import React, {useContext} from 'react';
import styles from '../styles/actionContainer.scss';
import Paper from '@material-ui/core/Paper';
import { Route } from 'react-router-dom';
import Edit from './actions/Edit';
import Trash from './actions/Trash';
import Settings from './actions/Settings';
import Extensions from './actions/Extensions';
import Notes from './actions/Notes';
import {NoteContext} from '../App';

export default function ActionContainer(props: any) {
  const {action} = useContext(NoteContext);

  return (
    <Paper {...props} elevation={10}>
      {action === "edit" && <Edit />}
      {action === "notes" && <Notes />}
      {/* {action === "extensions" && <Extensions />}
      {action === "trash" && <Trash />}
      {action === "settings" && <Settings />} */}
    </Paper>
  );
}
