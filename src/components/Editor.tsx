import React, { useState, useContext, useEffect } from 'react';
import EditorJs from 'react-editor-js';
import { Card } from '@material-ui/core';
import { NoteContext } from '../App';

export default function Editor(props: any) {
  const { note, setNote, db, action } = useContext(NoteContext);

  const handleChange = (api, data) => {
    console.log(data);
    if (data.blocks.length) {
      note.data = data;
      db.save(note.id, note);
    }
  };

  // useEffect(() => console.log(note));
  const emptyData = {
    blocks: [],
  };

  return (
    <Card {...props} elevation={10}>
      {action === 'edit' && (
        <EditorJs
          autofocus={true}
          onChange={handleChange}
          data={note ? note.data : emptyData}
          enableReInitialize={true}
          // readOnly={note === null ? true : false}
        />
      )}
    </Card>
  );
}
