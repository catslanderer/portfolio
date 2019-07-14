import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  rectangle: {
    elevation: 1,
    width: '100%',
    height: '100%',
    marginBottom: [theme.variables.contactHeight],
    background: [theme.palette.pink.main]
  }
}));

export default function PaperTest() {
  const classes = useStyles();

  return <Paper className={classes.rectangle} elevation='4' />;
}
