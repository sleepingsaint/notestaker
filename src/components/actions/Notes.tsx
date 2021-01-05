import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NoteContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    height: 'inherit',
    width: 'inherit',
    paddingTop: '10px',
  },
  note: {
    margin: '5px 20px',
  },
  tag: {
    margin: '4px',
    marginBottom: '0px',
  },
}));

export default function Notes() {
  // fake data
  let { db, setNote, setAction } = useContext(NoteContext);
  const notes = db.getAllNotes();

  const styles = useStyles();

  const handleClick = (index: string) => {
    let _note = db.getNote(index);
    setNote(_note);
    setAction("edit");
    console.log(_note);
  };

  return (
    <div className={styles.root}>
      {notes &&
        notes.length ?
        notes.map((note, index) => (
          <Card
            raised={true}
            className={styles.note}
            key={index}
            onClick={() => handleClick(note.id)}
          >
            <CardContent>
              <Typography>{note.title || 'untitled'}</Typography>
              <Typography>{note.description || ''}</Typography>
              {note.tags && note.tags.length
                ? note.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      color="primary"
                      size="small"
                      className={styles.tag}
                    />
                  ))
                : null}
            </CardContent>
          </Card>
        )): <Typography align="center">No notes</Typography>}
    </div>
  );
}
