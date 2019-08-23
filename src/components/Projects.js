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
    background: theme.palette.a.main,
  },
  containerDark: {
    background: theme.palette.a.dark,
  },
  containerPink: {
    background: theme.palette.b.dark,
  },
  contentDiv: {
    background: theme.palette.a.main,
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
