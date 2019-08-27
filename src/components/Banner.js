import React from 'react';
import cc from 'classcat';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import BreakpointDisplay from '../utilities/BreakpointDisplay';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  container: {
    background: theme.palette.a.main,
  },
  containerDark: {
    background: theme.palette.a.dark,
  },
  containerPink: {
    background: theme.palette.b.main,
  },
  containerDarkPink: {
    background: theme.palette.b.dark,
  },
  contentDiv: {
    display: 'grid',
    maxWidth: '1200px',
    margin: '0 auto',
    background: [theme.palette.a.main],
    // wavy 'curtain' effect
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '0',
      bottom: '0',
      right: '0',
      backgroundRepeat: 'repeat-x',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      left: '0',
      bottom: '0',
      right: '0',
      backgroundRepeat: 'repeat-x',
    },
    [theme.breakpoints.down('xl')]: {
      width: '100%',
      height: '500px',
      gridTemplateRows: '25% 50% 25%',
      '&:before': {
        height: '20px',
        backgroundSize: '40px 40px',
        backgroundImage: `radial-gradient(circle at 20px -5px, transparent 24px, ${theme.palette.b.main} 26px)`,
      },
      '&:after': {
        height: '30px',
        backgroundSize: '80px 40px',
        backgroundImage: `radial-gradient(circle at 20px 35px, ${theme.palette.b.main} 24px, transparent 26px)`,
      },
    },
    [theme.breakpoints.down('sm')]: {
      height: '350px',
      gridTemplateRows: '22% 50% 28%',
      '&:before': {
        height: '16px',
        backgroundSize: '32px 32px',
        backgroundImage: `radial-gradient(circle at 16px -5px, transparent 19.2px, ${theme.palette.b.main} 20.8px)`,
      },
      '&:after': {
        height: '24px',
        backgroundSize: '64px 32px',
        backgroundImage: `radial-gradient(circle at 16px 27px, ${theme.palette.b.main} 19.2px, transparent 20.8px)`,
      },
    },
    [theme.breakpoints.down('xs')]: {
      height: '200px',
      gridTemplateRows: '20% 50% 30%',
      '&:before': {
        height: '12px',
        backgroundSize: '24px 24px',
        backgroundImage: `radial-gradient(circle at 12px -3px, transparent 14.4px, ${theme.palette.b.main} 15.6px)`,
      },
      '&:after': {
        height: '18px',
        backgroundSize: '48px 24px',
        backgroundImage: `radial-gradient(circle at 12px 21px, ${theme.palette.b.main} 14.4px, transparent 15.6px)`,
      },
    },
    [theme.breakpoints.only('xxs')]: {
      '&:before': {
        height: '10px',
        backgroundSize: '20px 20px',
        backgroundImage: `radial-gradient(circle at 10px -3px, transparent 12px, ${theme.palette.b.main} 13px)`,
      },
      '&:after': {
        height: '15px',
        backgroundSize: '40px 20px',
        backgroundImage: `radial-gradient(circle at 10px 17px, ${theme.palette.b.main} 12px, transparent 13px)`,
      },
    },
  },
  linksdiv: {
    justifySelf: 'end',
    [theme.breakpoints.down('xl')]: {
      padding: '15px 8px 0px 0px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '7px 12px 0px 0px',
    },
  },
  link: {
    margin: '10px',
    fontWeight: '300',
    fontSize: '1.1em',
    color: [theme.palette.primary.xdark],
  },
  gridDiv: {
    display: 'grid',
    justifySelf: 'center',
    alignSelf: 'start',
    maxWidth: '100%',
  },
  logodiv: {
    display: 'flex',
    [theme.breakpoints.down('xl')]: {
      height: '182px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '138px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '75px',
    },
  },
  logo1Div: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  logo1: {
    height: 'auto',
    [theme.breakpoints.down('xl')]: {
      width: '120px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '50px',
    },
  },
  logo2Div: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  logo2: {
    height: 'auto',
    [theme.breakpoints.down('xl')]: {
      width: '120px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '50px',
    },
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('xl')]: {
      paddingBottom: '10px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '8px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '2px',
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: '700',
    color: [theme.palette.primary.xdark],
    [theme.breakpoints.down('xl')]: {
      fontSize: '3em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.4em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em',
    },
  },
  subtitle: {
    marginTop: '3px',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: '300',
    color: [theme.palette.primary.xdark],
    [theme.breakpoints.down('xl')]: {
      fontSize: '1.4em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.56em',
    },
  },
  breakpointDisplayDEV: {
    justifySelf: 'center',
    alignSelf: 'center',
  },
  breakpointDisplayPROD: {
    display: 'none',
  },
}));

export default function Banner() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div id='banner'>
      <Box
        className={cc(
          theme.variables.shadow === 'dark'
            ? classes.containerDark
            : theme.variables.shadow === 'pink'
            ? classes.containerPink
            : theme.variables.shadow === 'darkpink'
            ? classes.containerDarkPink
            : classes.container
        )}
      >
        <div className={classes.contentDiv}>
          <div />
          <div className={classes.gridDiv}>
            <div className={classes.logodiv}>
              <div className={classes.logo1Div}>
                <svg
                  className={classes.logo1}
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
              <div className={classes.text}>
                <Typography className={classes.title}>
                  Christopher J Foster
                </Typography>
                <Typography className={classes.subtitle}>
                  SOFTWARE ENGINEER
                </Typography>
              </div>
              <div className={classes.logo2Div}>
                <svg
                  className={classes.logo2}
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
          <div
            className={
              process.env.REACT_APP_DEV_MODE === 'on'
                ? classes.breakpointDisplayDEV
                : classes.breakpointDisplayPROD
            }
          >
            <BreakpointDisplay />
          </div>
        </div>
      </Box>
    </div>
  );
}
