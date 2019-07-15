import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
// import useTheme from '@material-ui/styles/useTheme';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  container: {
    background: [theme.palette.a.main],
    width: '100%',
    height: [theme.variables.contactHeight],
    position: 'fixed',
    bottom: '0',
    zIndex: '-1'
  },
  title: {
    fontSize: '4em'
  },
  subtitle: {
    fontSize: '3em'
  }
}));

export default function Contact() {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <div id='contact'>
      <Box className={classes.container}>
        <Typography className={classes.title}>Contact</Typography>
        <Typography className={classes.subtitle}>Chris</Typography>
        <Typography className={classes.subtitle}>GitHub</Typography>
        <Typography className={classes.subtitle}>So on...</Typography>
      </Box>
    </div>
  );
}
