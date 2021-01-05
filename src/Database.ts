import { v4 as uuidv4 } from 'uuid';

export default class Database {
  constructor() {}

  create() {
    let id = uuidv4();
    let note = {
      id: id,
      title: '',
      description: '',
      tags: [],
      blocks: [],
      data: undefined,
      in_trash: false,
    };

    localStorage.setItem(id, JSON.stringify(note));
    return note;
  }

  save(id: string, data: object) {
    localStorage.setItem(id, JSON.stringify(data));
  }

  delete(id: string) {
    localStorage.removeItem(id);
  }

  getNote(index: string): object | null{
    let note = localStorage.getItem(index);
    if(note) return JSON.parse(note);
    return null;
  }

  getAllNotes() {
    let noteIds = Object.keys(localStorage);
    let notes = [];
    noteIds.forEach((id) => {
      if (id != 'loglevel:webpack-dev-server') {
        let _note = localStorage.getItem(id);
        if (_note && !JSON.parse(_note).in_trash) {
          notes.push(JSON.parse(_note));
        }
      }
    });
    return notes;
  }

  trashNotes(): any[] {
    let noteIds = Object.keys(localStorage);
    let trashNotes: any[] = [];
    noteIds.forEach((id) => {
      if (id != 'loglevel:webpack-dev-server') {
        let _note = localStorage.getItem(id);
        if (_note && JSON.parse(_note).in_trash) {
          trashNotes.push(JSON.parse(_note));
        }
      }
    });
    return trashNotes;
  }

  check(){
    console.log("hello world")
  }
}
