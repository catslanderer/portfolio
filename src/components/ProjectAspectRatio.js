import React from 'react';
import cc from 'classcat';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import aspect_ratio_screenshot from '../assets/images/aspect_ratio_screenshot.png';

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
  italics: {
    fontStyle: 'italic',
  },
  newLine: {
    marginTop: '1.2em',
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
          <Typography className={classes.title}>
            Aspect Ratio Detector
          </Typography>
        </div>
        <div className={classes.contentDiv}>
          <div className={classes.textDiv}>
            <Typography className={classes.contentText}>
              In this project I explore using media queries to detect and
              respond to aspect ratio{' '}
              <span className={classes.italics}>and</span> viewport size (not
              just the latter). Designing for different viewport widths is
              generally a bit simpler, and it obviously works pretty well for
              scrollable material like paragraphs of text or a series of images.
              However, there are cases where some elements (perhaps the primary
              elements) of an app need to be visible at all times. Furthermore,
              we might want those elements to be as large as possible based on
              the available screen real estate.
            </Typography>
            <Typography className={cc([classes.contentText, classes.newLine])}>
              I published an{' '}
              <Link href={theme.projectLinks.aspectRatioArticle}>
                article on Medium
              </Link>{' '}
              detailing this project.
            </Typography>
          </div>
          <div className={classes.imageLinkDiv}>
            <img
              src={aspect_ratio_screenshot}
              alt='aspect_ratio screenshot'
              className={classes.img}
            />
            <div className={classes.linksDiv}>
              <Link
                href={theme.projectLinks.aspectRatioArticle}
                className={classes.link}
              >
                Medium article
              </Link>
              <Link
                href={theme.projectLinks.aspectRatioCodeSandbox}
                className={classes.link}
              >
                CodeSandbox App
              </Link>
              <Link
                href={theme.projectLinks.aspectRatioRepo}
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
