import React from 'react';
import { Box, Link, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import NavDrawer from './NavDrawer';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  rectangle: {
    display: 'grid',
    gridTemplateRows: 'repeat(3, 33%)',
    maxWidth: '100%',
    background: [theme.palette.primary.main],
    [theme.breakpoints.down('xl')]: {
      width: '100%',
      height: '500px'
    },
    [theme.breakpoints.down('sm')]: {
      height: '350px'
    },
    [theme.breakpoints.down('xs')]: {
      height: '225px'
    }
  },
  linksdiv: {
    justifySelf: 'end',
    [theme.breakpoints.down('xl')]: {
      padding: '15px 8px 0px 0px'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '7px 12px 0px 0px'
    }
  },
  link: {
    margin: '10px',
    fontWeight: '300',
    fontSize: '1.1em',
    color: [theme.palette.primary.xdark]
  },
  content: {
    display: 'grid',
    justifySelf: 'center',
    alignSelf: 'center',
    maxWidth: '100%'
  },
  logodiv: {
    display: 'flex'
  },
  logo1: {
    position: 'relative',
    [theme.breakpoints.down('xl')]: {
      width: '113px',
      height: 'auto',
      top: '-30px',
      left: '15px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '77px',
      height: 'auto',
      top: '-23px',
      left: '15px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '50px',
      height: 'auto',
      top: '-17px',
      left: '10px'
    }
  },
  logo2: {
    position: 'relative',
    [theme.breakpoints.down('xl')]: {
      width: '113px',
      height: 'auto',
      top: '25px',
      left: '-40px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '77px',
      height: 'auto',
      top: '17px',
      left: '-30px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '50px',
      height: 'auto',
      top: '8px',
      left: '-20px'
    }
  },
  text: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: '700',
    color: [theme.palette.primary.xdark],
    [theme.breakpoints.down('xl')]: {
      fontSize: '3em'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em'
    }
  },
  subtitle: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: '300',
    color: [theme.palette.primary.xdark],
    [theme.breakpoints.down('xl')]: {
      fontSize: '1.4em'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.93em'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.56em'
    }
  },
  widthdiv: {
    // display: 'none',
    justifySelf: 'center',
    alignSelf: 'center'
  },
  widthText: {
    color: 'white',
    [theme.breakpoints.only('xl')]: {
      fontSize: '3em'
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '3em'
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '3em'
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '2em'
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.5em'
    }
  }
}));

export default function Banner() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.root}>
      <div className={classes.rectangle}>
        <div className={classes.linksdiv}>
          {useMediaQuery(theme.breakpoints.up('md')) && (
            <Typography>
              <Link
                href='https://christopherjfoster.dev/index.html'
                className={classes.link}
              >
                TOP
              </Link>
              <Link
                href='https://christopherjfoster.dev/index.html'
                className={classes.link}
              >
                PROJECTS
              </Link>
              <Link
                href='https://christopherjfoster.dev/index.html'
                className={classes.link}
              >
                TECH STACK
              </Link>
              <Link
                href='https://christopherjfoster.dev/index.html'
                className={classes.link}
              >
                CONTACT
              </Link>
            </Typography>
          )}
          {useMediaQuery(theme.breakpoints.down('sm')) && <NavDrawer />}
        </div>
        <div className={classes.content}>
          <div className={classes.logodiv}>
            <svg
              className={classes.logo1}
              width='113'
              height='123'
              viewBox='0 0 113 123'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M57.3654 50.3343L28.6175 0.878143H112.547L84.0424 50.3343H57.3654Z'
                fill={theme.palette.pink.main}
              />
              <path
                d='M57.3457 50.2741H0.18927L42.2994 122.965L70.9265 73.4298L57.3457 50.2741Z'
                fill={theme.palette.pink.main}
              />
              <path
                d='M84.1633 50.2746L70.8149 73.3948L57.4664 50.2746L84.1633 50.2746Z'
                fill={theme.palette.orange.main}
              />
            </svg>
            <div className={classes.text}>
              <Typography className={classes.title}>
                Christopher J Foster
              </Typography>
              <Typography className={classes.subtitle}>
                FULL STACK WEB DEVELOPER
              </Typography>
            </div>
            <svg
              className={classes.logo2}
              width='113'
              height='123'
              viewBox='0 0 113 123'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M55.4531 73.2766L84.2009 122.733H0.27174L28.776 73.2766H55.4531Z'
                fill={theme.palette.purple.main}
              />
              <path
                d='M55.4727 73.3368H112.629L70.519 0.645485L41.8919 50.1811L55.4727 73.3368Z'
                fill={theme.palette.purple.main}
              />
              <path
                d='M28.6551 73.3363L42.0035 50.2161L55.352 73.3363L28.6551 73.3363Z'
                fill={theme.palette.orange.main}
              />
            </svg>
          </div>
        </div>
        <div className={classes.widthdiv}>
          {useMediaQuery(theme.breakpoints.only('xs')) && (
            <Typography className={classes.widthText}>
              xs: {theme.breakpoints.values.xs}px -{' '}
              {theme.breakpoints.values.sm}px
            </Typography>
          )}
          {useMediaQuery(theme.breakpoints.only('sm')) && (
            <Typography className={classes.widthText}>
              sm: {theme.breakpoints.values.sm}px -{' '}
              {theme.breakpoints.values.md}px
            </Typography>
          )}
          {useMediaQuery(theme.breakpoints.only('md')) && (
            <Typography className={classes.widthText}>
              md: {theme.breakpoints.values.md}px -{' '}
              {theme.breakpoints.values.lg}px
            </Typography>
          )}
          {useMediaQuery(theme.breakpoints.only('lg')) && (
            <Typography className={classes.widthText}>
              lg: {theme.breakpoints.values.lg}px -{' '}
              {theme.breakpoints.values.xl}px
            </Typography>
          )}
          {useMediaQuery(theme.breakpoints.only('xl')) && (
            <Typography className={classes.widthText}>
              xl: > {theme.breakpoints.values.xl}px
            </Typography>
          )}
        </div>
      </div>
    </Box>
  );
}
