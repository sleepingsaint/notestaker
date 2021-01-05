import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { VscSave, VscTrash } from 'react-icons/vsc';
import { makeStyles } from '@material-ui/core/styles';
import ChipInput from 'material-ui-chip-input';
import { NoteContext } from '../../App';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },

  input: {
    margin: '10px 0',
  },

  button: {
    margin: '10px 0',
  },

  tags: {
    margin: '10px 0',
  },

  icon: {
    fontSize: '16px',
    marginRight: '10px',
  },
}));

export default function Edit(props: any) {
  const {note, db, setNote, setAction} = useContext(NoteContext);

  const [title, setTitle] = useState(note ? note.title : '');
  const [description, setDescription] = useState(note ? note.description : '');
  const [tags, setTags] = useState(note ? note.tags : []);


  const styles = useStyles();

  const handleSave = (e: any) => {
    e.preventDefault();
    note.title = title;
    note.description = description;
    note.tags = tags;
    setNote(note);
    db.save(note.id, note);
  };

  const handleDelete = (e: any) => {
    db.delete(note.id);
    setAction("notes");
  };

  return (
    <div>
      <form className={styles.form}>
        <TextField
          className={styles.input}
          label="Title"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          fullWidth
        />
        <TextField
          className={styles.input}
          label="Description"
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          multiline
          rows={2}
          rowsMax={3}
          fullWidth
        />

        <ChipInput
          defaultValue={tags}
          onChange={(_tags) => setTags(_tags)}
          variant="outlined"
          fullWidth
          className={styles.tags}
          label="tags"
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSave}
          className={styles.button}
        >
          <VscSave className={styles.icon} />
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleDelete}
          className={styles.button}
        >
          <VscTrash className={styles.icon} />
          Delete
        </Button>
      </form>
    </div>
  );
}
