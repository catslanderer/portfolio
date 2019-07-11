import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  rectangle: {
    maxWidth: '100%',
    height: '5000px',
    background: [theme.palette.pink.main]
  }
}));

export default function Banner() {
  const classes = useStyles();

  return <Box className={classes.rectangle} />;
}
