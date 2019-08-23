import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import conways_screenshot from '../assets/images/conways_screenshot.png';

const useStyles = makeStyles(theme => ({
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
    padding: '20px',
  },
  headerDiv: {
    width: '100%',
    display: 'flex',
    paddingBottom: '10px',
  },
  title: {
    color: [theme.palette.a.xdark],
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
      flexDirection: 'column-reverse',
    },
  },
  textDiv: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xl')]: {
      width: '50%',
      paddingRight: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingRight: '0',
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
          <Typography className={classes.title}>Conway's Life</Typography>
        </div>
        <div className={classes.contentDiv}>
          <div className={classes.textDiv}>
            <Typography className={classes.contentText}>
              This project marries my interests in algorithms and retro-styled
              visualization. While there are numerous Conway's Life coding
              tutorials around, I avoided them all, preferring to learn the hard
              way. I'm most proud of the 'tracer' effect, which is accomplished
              by dynamically applying styles to cell divs.
            </Typography>
          </div>
          <div className={classes.imageLinkDiv}>
            <img
              src={conways_screenshot}
              alt='conways screenshot'
              className={classes.img}
            />
            <div className={classes.linksDiv}>
              <Link
                href={theme.projectLinks.conwaysDeploy}
                className={classes.link}
              >
                Deployed Site
              </Link>
              <Link
                href={theme.projectLinks.conwaysRepo}
                className={classes.link}
              >
                Repo
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </Box>
  );
}
