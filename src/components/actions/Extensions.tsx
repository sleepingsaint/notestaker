import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import { Divider, FormControlLabel, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: "20px"
  },

  divider: {
    color: "#eee",
    backgroundColor: "#eee",
    width: "100%",
    margin: "10px"
  }
}));

export default function Extensions() {
  const [state, setState] = React.useState({
    paragraph: true,
    header: true,
  });
  const styles = useStyles();

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={styles.root}>
      <Typography variant="h5">Extensions</Typography>
      <Divider className={styles.divider} />
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.paragraph}
              onChange={handleChange}
              color="primary"
              name="paragraph"
            />
          }
          label="Paragraph"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.header}
              onChange={handleChange}
              color="primary"
              name="header"
            />
          }
          label="Header"
        />
      </FormGroup>
    </div>
  );
}
