import React, { createContext, useState } from 'react';
import ActionBar from './components/ActionBar';
import ActionContainer from './components/ActionContainer';
import styles from './styles/global.scss';
import Editor from './components/Editor';
import Database from './Database';

export const NoteContext = createContext();

export default function App() {
  const [note, setNote] = useState(null);

  const [action, setAction] = React.useState("notes");

  // const styles = useStyles();

  // const handleChange = (event: any) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };
  const db = new Database();
  return (
    <NoteContext.Provider value={{ note, setNote, db, action, setAction }}>
      <div className={styles['grid-container']}>
        <ActionBar className={styles.actionsBar} />
        <ActionContainer className={styles.actionsContainer} />
        <Editor className={styles.editor} />
      </div>
    </NoteContext.Provider>
  );
}
