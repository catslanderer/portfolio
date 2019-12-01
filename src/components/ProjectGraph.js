import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import graph_screenshot from '../assets/images/graph_screenshot.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  container: {},
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('xl')]: {
      padding: '30px 40px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '25px 30px',
    },
  },
  headerDiv: {
    width: '100%',
    display: 'flex',
    paddingBottom: '10px',
  },
  title: {
    color: [theme.palette.a.xdark],
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
  contentDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xl')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  textDiv: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xl')]: {
      width: '50%',
      paddingLeft: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingLeft: '0',
    },
  },
  contentText: {
    color: theme.palette.a.dark,
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
  imageLinkDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xl')]: {
      width: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  img: {
    border: '3px solid',
    borderColor: theme.palette.a.main,
    borderRadius: '3px',
    width: '100%',
  },
  linksDiv: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xl')]: {
      padding: '10px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '10px 10px 10px 0',
    },
  },
  link: {
    color: theme.palette.a.dark,
    paddingTop: '5px',
    fontWeight: '700',
    [theme.breakpoints.down('xl')]: {
      fontSize: '1.5em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em',
    },
    [theme.breakpoints.only('xxs')]: {
      fontSize: '0.9em',
    },
  },
}));

export default function Project1() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.container}>
      <Card className={classes.card}>
        <div className={classes.headerDiv}>
          <Typography className={classes.title}>Graph Traversal</Typography>
        </div>
        <div className={classes.contentDiv}>
          <div className={classes.imageLinkDiv}>
            <img
              src={graph_screenshot}
              alt="graph screenshot"
              className={classes.img}
            />
            <div className={classes.linksDiv}>
              <Link
                href={theme.projectLinks.graphAlgorithm}
                className={classes.link}
              >
                Algorithm (raw text)
              </Link>
              <Link
                href={theme.projectLinks.graphRepo}
                className={classes.link}
              >
                Repo
              </Link>
            </div>
          </div>
          <div className={classes.textDiv}>
            <Typography className={classes.contentText}>
              At Lambda School, where I studied software engineering and
              computer science, students were tasked with writing an algorithm
              that could traverse an undirected cyclic graph in as few steps as
              we could manage. My algorithm produced a traversal that beat the
              prior school record by over 30 steps. Its key feature is that it
              identifies dead ends in one pass and then methodically explores
              them in the next pass, thus minimizing backtracking. The algorithm
              is heavily commented to explain how it works, and also includes my
              thoughts about how it could be further improved.
            </Typography>
          </div>
        </div>
      </Card>
    </Box>
  );
}
