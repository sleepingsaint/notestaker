const EditorJS = require('@editorjs/editorjs');
const { DB } = require("./editor/editor.db")
const { EditorConfig } = require("./editor/editor.config")

const saveBtn = document.getElementById("save-btn");
const loadBtn = document.getElementById("load-btn");
const clearBtn = document.getElementById("clear-btn");
const recentNotes = document.getElementById("recent-notes");
const title = document.getElementById("title");

const editor = new EditorJS(EditorConfig)
const db = new DB(editor);

saveBtn.addEventListener('click', () => db.save(title.value));
loadBtn.addEventListener('click', () => db.load());
clearBtn.addEventListener('click', () => db.clear());

function createNote(path, title) {
    return `
        <div class="card my-1 note-card" data-title=${title.split(' ').join("%")} data-path=${path}>
            <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${path}</p>
            </div>
        </div>
    `;
}

Object.keys(db.db).map(path => {
    let title = db.db.getItem(path);
    recentNotes.innerHTML += createNote(path, title);
})

const noteCards = document.querySelectorAll('.note-card');
noteCards.forEach(note => note.addEventListener('click', e => {
    db.load(note.dataset.path);
    title.value = note.dataset.title.split("%").join(" ");
}))