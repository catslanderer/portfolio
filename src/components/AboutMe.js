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
    background: theme.palette.b.main,
  },
  containerDarkPink: {
    background: theme.palette.b.dark,
  },
  contentDiv: {
    background: theme.palette.b.main,
    maxWidth: '1200px',
    margin: '0 auto',
    [theme.breakpoints.down('xl')]: {
      padding: '40px 30px 50px 30px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '35px 30px 40px 30px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '30px 30px 30px 30px',
    },
    [theme.breakpoints.only('xxs')]: {
      padding: '25px 30px 20px 30px',
    },
  },
  title: {
    color: [theme.palette.c.main],
    [theme.breakpoints.down('xl')]: {
      fontSize: theme.fontSize.title.xlDown,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.fontSize.title.smDown,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.fontSize.title.xsDown,
    },
    [theme.breakpoints.only('xxs')]: {
      fontSize: theme.fontSize.title.xxsOnly,
    },
  },
  contentText: {
    color: theme.palette.c.main,
    paddingBottom: '20px',
    [theme.breakpoints.down('xl')]: {
      fontSize: theme.fontSize.text.xlDown,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.fontSize.text.smDown,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.fontSize.text.xsDown,
    },
    [theme.breakpoints.only('xxs')]: {
      fontSize: theme.fontSize.text.xxsOnly,
    },
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box
      className={cc(
        theme.variables.shadow === 'dark'
          ? classes.containerDark
          : theme.variables.shadow === 'pink'
          ? classes.containerPink
          : theme.variables.shadow === 'darkpink'
          ? classes.containerDarkPink
          : classes.container
      )}
    >
      <div className={classes.contentDiv}>
        <div className={classes.headerDiv}>
          <Typography className={classes.title}>About Me</Typography>
        </div>
        <Typography className={classes.contentText}>
          I am a software engineer who loves to learn, loves to write clean
          code, and loves the puzzle of optimization. I'm excited about joining
          a team of developers and applying the skills I already have as well as
          learning new ones.
        </Typography>
      </div>
    </Box>
  );
}
