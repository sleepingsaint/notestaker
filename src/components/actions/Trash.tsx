import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
    marginBottom: "0px"
  },
}));

export default function Notes() {
  // fake data
  const note = {
    title: 'some title',
    description: 'some description',
    tags: ['tag 1', 'tag 2'],
  };

  const notes = [note, note, note];

  const styles = useStyles();

  return (
    <div className={styles.root}>
      {notes &&
        notes.length &&
        notes.map((note, index) => (
          <Card raised={true} className={styles.note} key={index}>
            <CardContent>
              <Typography>title</Typography>
              <Typography>description</Typography>
              {note.tags &&
                note.tags.length &&
                note.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    color="primary"
                    size="small"
                    className={styles.tag}
                  />
                ))}
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
