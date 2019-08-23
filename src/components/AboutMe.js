import React from 'react';
import cc from 'classcat';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  container: {
    background: theme.palette.b.main,
  },
  containerDark: {
    background: theme.palette.b.dark,
  },
  containerPink: {
    background: theme.palette.b.dark,
  },
  contentDiv: {
    background: theme.palette.b.main,
    height: '1000px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px 30px 30px 30px',
  },
  title: {
    color: [theme.palette.c.main],
    [theme.breakpoints.down('xl')]: {
      fontSize: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5em',
    },
  },
  contentText: {
    color: theme.palette.c.main,
    fontSize: '1.5em',
    paddingBottom: '20px',
  },
}));

export default function About() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box
      className={cc(
        theme.variables.shadow === 'dark'
          ? classes.containerDark
          : theme.variables.shadow === 'pink'
          ? classes.containerPink
          : classes.container
      )}
    >
      <div className={classes.contentDiv}>
        <div className={classes.headerDiv}>
          <Typography className={classes.title}>About Me</Typography>
        </div>
        <Typography className={classes.contentText}>
          I am a software engineer who recently completed a seven-month coding
          boot camp focusing on full stack web development and computer science.
          I love to learn, I love to write clean code, and I love the puzzle of
          optimization. I'm excited about joining a team of developers and
          applying the skills I already have as well as learning new ones.
        </Typography>
      </div>
    </Box>
  );
}
