import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  techStack: {
    [theme.breakpoints.down('xl')]: {
      paddingTop: '64px',
      marginTop: '-64px'
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '56px',
      marginTop: '-56px'
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '48px',
      marginTop: '-48px'
    }
  },
  container: {
    background: [theme.palette.b.main],
    width: '100%',
    height: '1000px',
    padding: '15px'
  },
  headerDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '10px',
    [theme.breakpoints.only('xxs')]: {
      flexDirection: 'column'
    }
  },
  title: {
    color: [theme.palette.primary.xdark],
    [theme.breakpoints.down('xl')]: {
      fontSize: '3em'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5em'
    }
  },
  linkIconDiv: {
    [theme.breakpoints.down('xl')]: {
      height: '64px'
    },
    [theme.breakpoints.down('xs')]: {
      height: '56px'
    }
  },
  linkIcon: {
    [theme.breakpoints.down('xl')]: {
      height: '40px'
    },
    [theme.breakpoints.down('xs')]: {
      height: '32px'
    }
  },
  contentText: {
    color: [theme.palette.primary.xdark],
    fontSize: '1.5em'
  }
}));

export default function Contact() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div id='techStack' className={classes.techStack}>
      <Box className={classes.container}>
        <div className={classes.headerDiv}>
          <Typography className={classes.title}>Tech Stack</Typography>
        </div>
        <Typography className={classes.contentText}>
          I'm familiar with the following languages, frameworks, libraries, and
          technologies.
        </Typography>
        <Typography style={{ color: [theme.palette.b.main] }}>
          {'<contact form goes here>'}
        </Typography>
      </Box>
    </div>
  );
}
