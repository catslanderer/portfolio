import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
// import useTheme from '@material-ui/styles/useTheme';
import Box from '@material-ui/core/Box';

import PaperTest from './PaperTest';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  container: {
    height: '3000px'
  }
}));

export default function About() {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Box className={classes.container}>
      <PaperTest />
    </Box>
  );
}
