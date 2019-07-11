import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import NavDrawer from './NavDrawer';

const useStyles = makeStyles(theme => ({
  regular: {
    [theme.breakpoints.down('xl')]: {
      minHeight: '64px',
      maxHeight: '64px'
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '56px',
      maxHeight: '56px'
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '48px',
      maxHeight: '48px'
    }
  },
  gutters: {
    padding: '0px 16px'
  },
  root: {
    width: '100%'
  },
  container: {
    display: 'grid',
    [theme.breakpoints.down('xl')]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '75% 25%'
    }
  },
  logodiv: {
    display: 'flex',
    [theme.breakpoints.down('xl')]: {
      padding: '3px 0 0 0'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0'
    }
  },
  logo1: {
    position: 'relative',
    height: 'auto',
    [theme.breakpoints.down('xl')]: {
      width: '30px',
      top: '-7px',
      left: '0px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '25px',
      top: '-5px',
      left: '0px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '20px',
      top: '-4px',
      left: '0px'
    }
  },
  logo2: {
    position: 'relative',
    height: 'auto',
    [theme.breakpoints.down('xl')]: {
      width: '30px',
      top: '5px',
      left: '-2px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '25px',
      top: '4px',
      left: '-1px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '20px',
      top: '4px',
      left: '0px'
    }
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: '400',
    color: [theme.palette.primary.xdark],
    [theme.breakpoints.down('xl')]: {
      fontSize: '1.5em'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3em'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1em'
    }
  },
  linksdiv: {
    justifySelf: 'end',
    [theme.breakpoints.down('xl')]: {
      padding: '6px 0px 0px 0px'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '7px 0px 0px 0px'
    }
  },
  link: {
    margin: '0px 10px',
    fontWeight: '400',
    fontSize: '1.1em',
    color: [theme.palette.primary.xdark]
  }
}));

function ElevationScroll({ children }) {
  const triggerElevation = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: triggerElevation ? 4 : 0
  });
}

function TitleScroll() {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const sm = useMediaQuery(theme.breakpoints.only('sm'));
  const triggerTitle = useScrollTrigger({
    disableHysteresis: true,
    threshold: xs ? 145 : sm ? 215 : 310
  });
  return triggerTitle;
}

ElevationScroll.propTypes = {
  children: PropTypes.node.isRequired
};

export default function ElevateAppBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar
            classes={{ regular: classes.regular, gutters: classes.gutters }}
            className={classes.container}
          >
            <div>
              {TitleScroll() && (
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
              )}
            </div>
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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar
        classes={{ regular: classes.regular, gutters: classes.gutters }}
      />
    </React.Fragment>
  );
}