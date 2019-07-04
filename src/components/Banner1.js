import React from 'react';
import { Box, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const color0 = '#2ACC88'; // Background color
const color1a = '#008080'; // Text color
const color1b = '#252741'; // Link color
const color2a = '#F1D7D2'; // Left-top trapezoid
const color2b = '#F1D7D2'; // Left-bottom trapezoid
const color2c = '#00000000'; // Left triangle
const color3a = '#252741'; // Right-top trapezoid
const color3b = '#252741'; // Right-bottom trapezoid
const color3c = '#00000000'; // Right triangle

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  rectangle: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    width: '2400px',
    height: '500px',
    background: `${color0}`
  },
  links: {
    flexGrow: 1,
    paddingTop: '15px',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  link: {
    margin: '15px',
    fontWeight: '300',
    fontSize: '1.1em',
    color: `${color1b}`
  },
  content: {
    flexGrow: 99,
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: '-30px'
  },
  logodiv: {
    display: 'flex'
  },
  logo1: {
    position: 'relative',
    top: '-30px',
    left: '15px'
  },
  logo2: {
    position: 'relative',
    top: '25px',
    left: '-40px'
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '3em',
    color: `${color1a}`
  },
  subtitle: {
    fontWeight: '300',
    fontSize: '1.4em',
    color: `${color1a}`
  }
});

export default function Banner() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div className={classes.rectangle}>
        <div className={classes.links}>
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
                fill={color2a}
              />
              <path
                d='M57.3457 50.2741H0.18927L42.2994 122.965L70.9265 73.4298L57.3457 50.2741Z'
                fill={color2b}
              />
              <path
                d='M84.1633 50.2746L70.8149 73.3948L57.4664 50.2746L84.1633 50.2746Z'
                fill={color2c}
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
                fill={color3a}
              />
              <path
                d='M55.4727 73.3368H112.629L70.519 0.645485L41.8919 50.1811L55.4727 73.3368Z'
                fill={color3b}
              />
              <path
                d='M28.6551 73.3363L42.0035 50.2161L55.352 73.3363L28.6551 73.3363Z'
                fill={color3c}
              />
            </svg>
          </div>
        </div>
      </div>
    </Box>
  );
}
