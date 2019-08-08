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
    // No mobile support for the following:
    // position: 'fixed',
    // bottom: '0',
    // zIndex: '-1',
    padding: '10px'
  },
  title: {
    color: [theme.palette.primary.xdark],
    fontSize: '3em',
    padding: '10px 0px'
  },
  subtitle: {
    color: [theme.palette.primary.xdark],
    fontSize: '1.5em'
  }
}));

export default function Contact() {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <div id='contact'>
      <Box className={classes.container}>
        <Typography className={classes.title}>Contact</Typography>
        <Typography className={classes.subtitle}>
          If you have questions about my work (past, present, or even future),
          please don't hesitate to reach out:
        </Typography>
        <Typography className={classes.subtitle}>GitHub</Typography>
        <Typography className={classes.subtitle}>So on...</Typography>
      </Box>
    </div>
  );
}
