import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import gitHubIcon from '../assets/icons/gh_icon_40px_50op.svg';
import linkedInIcon from '../assets/icons/li_icon_40px_50op.svg';
import twitterIcon from '../assets/icons/tw_icon_40px_50op.svg';
import ContactForm from './ContactForm';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  container: {
    background: [theme.palette.a.main],
    width: '100%',
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
    color: [theme.palette.primary.xdark],
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
    color: [theme.palette.primary.xdark],
    fontSize: '1.5em',
    padding: '0 15px',
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div id='contact'>
      <Box className={classes.container}>
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
      </Box>
    </div>
  );
}
