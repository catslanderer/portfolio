import React from 'react';
import cc from 'classcat';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Project1 from './Project1';

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
  headerDiv: {
    paddingBottom: '20px',
  },
  contentDiv: {
    background: theme.palette.b.main,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px 30px 30px 30px',
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
    fontSize: '1.5em',
    paddingBottom: '20px',
  },
}));

export default function Projects() {
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
          <Typography className={classes.title}>Projects</Typography>
        </div>
        <Project1 />
      </div>
    </Box>
  );
}
