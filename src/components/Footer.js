import React from 'react';
import cc from 'classcat';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  footer: {},
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
    maxWidth: '1200px',
    display: 'flex',
    margin: '0 auto',
    padding: '40px 30px 50px 30px',
    [theme.breakpoints.down('xl')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.only('xxs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  contentText: {
    color: theme.palette.c.main,
    [theme.breakpoints.down('xl')]: {
      fontSize: '1.3em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1em',
    },
    [theme.breakpoints.only('xxs')]: {
      fontSize: '0.9em',
    },
  },
  link: {
    color: [theme.palette.c.light],
    textDecoration: 'none',
  },
}));

export default function Contact() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div id='footer' className={classes.footer}>
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
          {useMediaQuery(theme.breakpoints.up('sm')) && (
            <Typography className={classes.contentText}>
              Site ©2019 designed and coded by me,&nbsp;
            </Typography>
          )}
          {useMediaQuery(theme.breakpoints.down('xs')) && (
            <Typography className={classes.contentText}>
              Site ©2019 designed and coded by me,
            </Typography>
          )}
          <Typography className={classes.contentText}>
            Christopher J Foster{' '}
            <a
              className={classes.link}
              href='https://github.com/ChristopherJFoster/portfolio'
            >
              (repo here)
            </a>
          </Typography>
        </div>
      </Box>
    </div>
  );
}
