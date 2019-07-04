import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const color0a = '#F1D7D2'; // Background color - top
const color0b = '#252741'; // Text color - top
const color1a = '#252741'; // Background color - bottom
const color1b = '#F1D7D2'; // Text color - bottom
// const color2a = '#0066FF'; // Left triangle
// const color2b = '#0066FF'; // Right triangle
// const color3a = '#FF0066'; // Left-bottom trapezoid
// const color3b = '#FF0066'; // Right-top trapezoid

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  topRect: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '2400px',
    height: '250px',
    background: `${color0a}`
  },
  bottomRect: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '2400px',
    height: '250px',
    background: `${color0b}`
  },
  title: {
    display: 'flex',
    fontWeight: 'bold',
    fontSize: '3em',
    color: `${color1a}`
  },
  subtitle: {
    marginTop: '.7em',
    display: 'flex',
    fontWeight: '300',
    fontSize: '1.4em',
    color: `${color1b}`
  }
});

export default function Banner() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div className={classes.topRect}>
        <Typography className={classes.title}>Christopher J Foster</Typography>
      </div>
      <div className={classes.bottomRect}>
        <div className={classes.text}>
          <Typography className={classes.subtitle}>
            FULL STACK WEB DEVELOPER
          </Typography>
        </div>
      </div>
    </Box>
  );
}
