import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const color0 = '#2ACC88'; // Background color
const color1a = '#F1D7D2'; // Left-top trapezoid
const color1b = '#F1D7D2'; // Left-bottom trapezoid
const color1c = '#00000000'; // Left triangle
const color2a = '#252741'; // Right-top trapezoid
const color2b = '#252741'; // Right-bottom trapezoid
const color2c = '#00000000'; // Right triangle
const color3 = '#008080'; // Text color

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  rectangle: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2400px',
    height: '500px',
    background: `${color0}`
  },
  content: {
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
    color: `${color3}`
  },
  subtitle: {
    fontWeight: '300',
    fontSize: '1.4em',
    color: `${color3}`
  }
});

export default function Banner() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div className={classes.rectangle}>
        <div className={classes.content}>
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
              fill={color1a}
            />
            <path
              d='M57.3457 50.2741H0.18927L42.2994 122.965L70.9265 73.4298L57.3457 50.2741Z'
              fill={color1b}
            />
            <path
              d='M84.1633 50.2746L70.8149 73.3948L57.4664 50.2746L84.1633 50.2746Z'
              fill={color1c}
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
              fill={color2a}
            />
            <path
              d='M55.4727 73.3368H112.629L70.519 0.645485L41.8919 50.1811L55.4727 73.3368Z'
              fill={color2b}
            />
            <path
              d='M28.6551 73.3363L42.0035 50.2161L55.352 73.3363L28.6551 73.3363Z'
              fill={color2c}
            />
          </svg>
        </div>
      </div>
    </Box>
  );
}
