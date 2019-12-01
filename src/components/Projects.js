import React from 'react';
import cc from 'classcat';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import ProjectRxID from './ProjectRxID';
import ProjectGraph from './ProjectGraph';
import ProjectAspectRatio from './ProjectAspectRatio';
import ProjectPortfolio from './ProjectPortfolio';
import ProjectConways from './ProjectConways';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  projects: {
    [theme.breakpoints.down('xl')]: {
      paddingTop: '64px',
      marginTop: '-64px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '56px',
      marginTop: '-56px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '48px',
      marginTop: '-48px',
    },
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
  headerDiv: {
    paddingBottom: '20px',
  },
  contentDiv: {
    background: theme.palette.b.main,
    maxWidth: '1200px',
    margin: '0 auto',
    [theme.breakpoints.down('xl')]: {
      padding: '20px 30px 30px 30px',
    },
    [theme.breakpoints.only('xxs')]: {
      padding: '20px 10px 30px 10px',
    },
  },
  title: {
    color: [theme.palette.c.main],
    fontWeight: '700',
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
  divider: {
    height: '30px',
  },
}));

export default function Projects() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div id="projects" className={classes.projects}>
      <Box
        className={cc(
          theme.variables.shadow === 'dark'
            ? classes.containerDark
            : theme.variables.shadow === 'pink'
            ? classes.containerPink
            : theme.variables.shadow === 'darkpink'
            ? classes.containerDarkPink
            : classes.container,
        )}
      >
        <div className={classes.contentDiv}>
          <div className={classes.headerDiv}>
            <Typography className={classes.title}>Projects</Typography>
          </div>
          <ProjectRxID />
          <div className={classes.divider} />
          <ProjectGraph />
          <div className={classes.divider} />
          <ProjectAspectRatio />
          <div className={classes.divider} />
          <ProjectPortfolio />
          <div className={classes.divider} />
          <ProjectConways />
        </div>
      </Box>
    </div>
  );
}
