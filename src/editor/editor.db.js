const fs = require('fs');
const { remote } = require('electron');
const { dialog } = remote;

class DB {
    constructor(editor) {
        this.db = window.localStorage;
        this.editor = editor;
    }

    // create and update
    async save(title) {
        title = title || `notes-${Date.now()}`;
        console.log(title)

        // take path from user
        let { filePath } = await dialog.showSaveDialog({ defaultPath: `${title}.json` });

        // save the file is path is selected
        if (filePath) {
            filePath = filePath.split(' ').join('-');
            this.editor.save().then(data => {
                fs.writeFile(filePath, JSON.stringify(data), err => {
                    if (err) dialog.showErrorBox("Oops! Something went wrong", "Please try again :)");
                    else {
                        dialog.showMessageBox({ "type": "info", "message": "Note saved successfully" });
                        this.db.setItem(filePath, title);
                    }
                })
            })
        }
    }

    // load file
    async load(path) {
        if (!path) {
            const { canceled, filePaths } = await dialog.showOpenDialog({ properties: ["openFile"] });
            path = canceled ? path : filePaths[0];
        }

        if (path) {
            fs.readFile(path, (err, data) => {
                if (err) dialog.showErrorBox("Oops! Something went wrong", "Please try again :)");
                else {
                    try {
                        this.editor.render(JSON.parse(data));
                        if(!this.db.getItem(path)){
                            this.db.setItem(path, "untitled");
                        }
                    } catch (error) {
                        dialog.showErrorBox("Unsupported Format", "Make sure the file selected is a note file :)");
                    }
                }
            })
        }
    }

    // delete
    async delete(path) {
        if(path && this.db.getItem(path)){
            fs.access(path, (err) => {
                // checking if the file exists
                if (err) dialog.showErrorBox("Oops! Note doesn't exists", "Note may have been moved to somewhere :)");
                else {
                    // deleting the file
                    fs.unlink(path, (err) => {
                        if(err) dialog.showErrorBox("Oops! Note doesn't exists", "Note may have been moved to somewhere :)");
                        else {
                            dialog.showMessageBox({ "type": "info", "message": "Note deleted successfully" });
                            this.db.removeItem(path);
                        }
                    })
                }
            })
        }
    }

    clear(){
        Object.keys(this.db).forEach(async (path) => {
            await this.delete(path);
            this.db.removeItem(path);
        });
    }

}

exports.DB = DB;