import React from 'react';
import cc from 'classcat';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import gitHubIcon from '../assets/icons/gh_icon_40px_theme.palette.c.main.svg';
import linkedInIcon from '../assets/icons/li_icon_40px_theme.palette.c.main.svg';
import twitterIcon from '../assets/icons/tw_icon_40px_theme.palette.c.main.svg';
import ContactForm from './ContactForm';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.a.main,
    width: '100%',
  },
  contact: {
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
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '15px',
  },
  headerDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '10px',
    padding: '0 15px',
    [theme.breakpoints.only('xxs')]: {
      flexDirection: 'column',
    },
  },
  title: {
    color: theme.palette.c.main,
    [theme.breakpoints.down('xl')]: {
      fontSize: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5em',
    },
  },
  linkIconDiv: {
    [theme.breakpoints.down('xl')]: {
      height: '64px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '56px',
    },
  },
  linkIcon: {
    [theme.breakpoints.down('xl')]: {
      height: '40px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '32px',
    },
  },
  contentText: {
    color: theme.palette.c.main,
    padding: '0 15px',
    [theme.breakpoints.down('xl')]: {
      fontSize: '1.5em',
    },
    [theme.breakpoints.only('xxs')]: {
      fontSize: '1em',
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div id='contact' className={classes.contact}>
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
            <Typography className={classes.title}>Contact</Typography>
            <div className={classes.linksDiv}>
              <IconButton
                className={classes.linkIconDiv}
                href='https://github.com/ChristopherJFoster'
              >
                <img
                  className={classes.linkIcon}
                  src={gitHubIcon}
                  alt='GitHub icon/link'
                />
              </IconButton>
              <IconButton
                className={classes.linkIconDiv}
                href='https://www.linkedin.com/in/christopherjfoster/'
              >
                <img
                  className={classes.linkIcon}
                  src={linkedInIcon}
                  alt='LinkedIn icon/link'
                />
              </IconButton>
              <IconButton
                className={classes.linkIconDiv}
                href='https://twitter.com/chrstphrjfstr'
              >
                <img
                  className={classes.linkIcon}
                  src={twitterIcon}
                  alt='Twitter icon/link'
                />
              </IconButton>
            </div>
          </div>
          <Typography className={classes.contentText}>
            If you have questions about my work (past, present, or even future),
            please don't hesitate to reach out.
          </Typography>
          <ContactForm />
        </div>
      </Box>
    </div>
  );
}
