import { Data } from 'electron/renderer';
import React, { useContext } from 'react';
import {
  VscExtensions,
  VscAdd,
  VscEdit,
  VscLibrary,
  VscSettings,
  VscTrash,
} from 'react-icons/vsc';
import { NoteContext } from '../App';
import Database from '../Database';
import styles from '../styles/global.scss';
import clsx from 'clsx';

interface contextInterface {
  (): void;
  db: Database;
};

function ActionBar(props: any) {
  const { setNote, db, setAction, action }: contextInterface = useContext(NoteContext);

  const createNewNote = () => {
    let _note = db.create();
    setNote(_note);
    setAction("edit");
  }

  const getNotes = () => {
    let notes = db.getAllNotes();
    console.log(notes);
    setAction("notes");
  }

  const getTrashNotes = () => {
    let trashNotes = db.trashNotes();
    console.log(trashNotes);
    setAction("trash");
  }

  return (
    <ul {...props}>
      <li onClick={createNewNote} className={clsx(action === "new" && styles.activeAction)}>
        <VscAdd />
      </li>
      <li className={clsx(action === "edit" && styles.activeAction)}>
        <VscEdit />
      </li>
      <li onClick={getNotes} className={clsx(action === "notes" && styles.activeAction)}>
        <VscLibrary />
      </li>
      {/* <li onClick={() => setAction("extensions")} className={clsx(action === "extensions" && styles.activeAction)}>
        <VscExtensions />
      </li>
      <li onClick={() => setAction("settings")} className={clsx(action === "settings" && styles.activeAction)}>
        <VscSettings />
      </li>
      <li onClick={getTrashNotes} className={clsx(action === "trash" && styles.activeAction)}>
        <VscTrash />
      </li> */}
    </ul>
  );
}

export default ActionBar;
