import React from 'react';
import cc from 'classcat';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Link from '@material-ui/core/Link';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import NavDrawer from './NavDrawer';

const useStyles = makeStyles(theme => ({
  regular: {
    [theme.breakpoints.down('xl')]: {
      minHeight: '64px',
      maxHeight: '64px',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '56px',
      maxHeight: '56px',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '48px',
      maxHeight: '48px',
    },
  },
  gutters: {
    [theme.breakpoints.down('xl')]: {
      padding: '0px 16px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0px 0px 0px 16px',
    },
  },
  appBar: {
    background: theme.palette.a.main,
  },
  appBarDark: {
    background: theme.palette.a.dark,
  },
  appBarPink: {
    background: theme.palette.b.dark,
  },
  container: {
    background: theme.palette.a.main,
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    [theme.breakpoints.down('xl')]: {
      gridTemplateColumns: '40% 60%',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '75% 25%',
    },
  },
  logoDiv: {
    transition: 'opacity 0.9s',
    display: 'flex',
    [theme.breakpoints.down('xl')]: {
      height: '45px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '39px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '31px',
      padding: '0',
    },
  },
  logoDivVisible: {
    opacity: 1,
  },
  logoDivInvisible: {
    opacity: 0,
  },
  logo1Div: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  logo1: {
    display: 'flex',
    height: 'auto',
    [theme.breakpoints.down('xl')]: {
      width: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '25px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '20px',
    },
  },
  logo2Div: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  logo2: {
    height: 'auto',
    [theme.breakpoints.down('xl')]: {
      width: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '25px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '20px',
    },
  },
  titleDiv: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '400',
    color: [theme.palette.a.xdark],
    [theme.breakpoints.down('xl')]: {
      fontSize: '1.55em',
    },
    [theme.breakpoints.only('sm')]: {
      paddingTop: '2px',
      fontSize: '1.4em',
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '2px',
      fontSize: '1.1em',
    },
  },
  linksdiv: {
    justifySelf: 'end',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xl')]: {
      paddingTop: '3px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
    },
  },
  link: {
    margin: '0px 10px',
    fontWeight: '300',
    fontSize: '1.1em',
    color: [theme.palette.c.main],
  },
}));

function ElevationScroll({ children }) {
  const triggerElevation = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: triggerElevation ? 4 : 0,
  });
}

function TitleScroll() {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const sm = useMediaQuery(theme.breakpoints.only('sm'));
  const triggerTitle = useScrollTrigger({
    disableHysteresis: true,
    threshold: xs ? 145 : sm ? 215 : 310,
  });
  return triggerTitle;
}

ElevationScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ElevateAppBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          className={cc(
            theme.variables.shadow === 'dark'
              ? classes.appBarDark
              : theme.variables.shadow === 'pink'
              ? classes.appBarPink
              : classes.appBar
          )}
        >
          <Toolbar
            classes={{ regular: classes.regular, gutters: classes.gutters }}
            className={classes.container}
          >
            <div>
              <div
                className={cc([
                  classes.logoDiv,
                  TitleScroll()
                    ? classes.logoDivVisible
                    : classes.logoDivInvisible,
                ])}
              >
                <div className={classes.logo1Div}>
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
                      fill={theme.palette.b.main}
                    />
                    <path
                      d='M57.3457 50.2741H0.18927L42.2994 122.965L70.9265 73.4298L57.3457 50.2741Z'
                      fill={theme.palette.b.main}
                    />
                    <path
                      d='M84.1633 50.2746L70.8149 73.3948L57.4664 50.2746L84.1633 50.2746Z'
                      fill={theme.palette.d.main}
                    />
                  </svg>
                </div>
                <div className={classes.titleDiv}>
                  <Typography className={classes.title}>
                    Christopher J Foster
                  </Typography>
                </div>
                <div className={classes.logo2Div}>
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
                      fill={theme.palette.c.main}
                    />
                    <path
                      d='M55.4727 73.3368H112.629L70.519 0.645485L41.8919 50.1811L55.4727 73.3368Z'
                      fill={theme.palette.c.main}
                    />
                    <path
                      d='M28.6551 73.3363L42.0035 50.2161L55.352 73.3363L28.6551 73.3363Z'
                      fill={theme.palette.d.main}
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={classes.linksdiv}>
              {useMediaQuery(theme.breakpoints.up('md')) && (
                <Typography>
                  <Link href={theme.navLinks.aboutMe} className={classes.link}>
                    ABOUT ME
                  </Link>
                  <Link href={theme.navLinks.projects} className={classes.link}>
                    PROJECTS
                  </Link>
                  <Link
                    href={theme.navLinks.techStack}
                    className={classes.link}
                  >
                    TECH STACK
                  </Link>
                  <Link href={theme.navLinks.contact} className={classes.link}>
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
