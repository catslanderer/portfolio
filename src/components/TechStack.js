import React from 'react';
import cc from 'classcat';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'white',
    flexGrow: 1,
  },
  techStack: {
    [theme.breakpoints.down('xl')]: {
      paddingTop: '64px',
      marginTop: '-64px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '56px',
      marginTop: '-56px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '48px',
      marginTop: '-48px',
    },
  },
  container: {
    background: theme.palette.b.main,
  },
  containerDark: {
    background: theme.palette.b.dark,
  },
  containerPink: {
    background: theme.palette.b.main,
  },
  containerDarkPink: {
    background: theme.palette.b.dark,
  },
  contentDiv: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    background: [theme.palette.b.main],
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
      padding: '20px 30px 80px 30px',
      '&:before': {
        height: '20px',
        backgroundSize: '40px 40px',
        backgroundImage: `radial-gradient(circle at 20px -10px, transparent 26px, ${theme.palette.a.main} 26px)`,
      },
      '&:after': {
        height: '30px',
        backgroundSize: '80px 40px',
        backgroundImage: `radial-gradient(circle at 20px 30px, ${theme.palette.a.main} 24px, transparent 24px)`,
      },
    },
    [theme.breakpoints.down('sm')]: {
      padding: '20px 30px 60px 30px',
      '&:before': {
        height: '16px',
        backgroundSize: '32px 32px',
        backgroundImage: `radial-gradient(circle at 16px -8px, transparent 20.8px, ${theme.palette.a.main} 20.8px)`,
      },
      '&:after': {
        height: '24px',
        backgroundSize: '64px 32px',
        backgroundImage: `radial-gradient(circle at 16px 24px, ${theme.palette.a.main} 19.2px, transparent 19.2px)`,
      },
    },
    [theme.breakpoints.down('xs')]: {
      padding: '20px 30px 50px 30px',
      '&:before': {
        height: '12px',
        backgroundSize: '24px 24px',
        backgroundImage: `radial-gradient(circle at 12px -6px, transparent 15.6px, ${theme.palette.a.main} 15.6px)`,
      },
      '&:after': {
        height: '18px',
        backgroundSize: '48px 24px',
        backgroundImage: `radial-gradient(circle at 12px 18px, ${theme.palette.a.main} 14.4px, transparent 14.4px)`,
      },
    },
    [theme.breakpoints.only('xxs')]: {
      padding: '20px 10px 40px 10px',
      '&:before': {
        height: '10px',
        backgroundSize: '20px 20px',
        backgroundImage: `radial-gradient(circle at 10px -5px, transparent 13px, ${theme.palette.a.main} 13px)`,
      },
      '&:after': {
        height: '15px',
        backgroundSize: '40px 20px',
        backgroundImage: `radial-gradient(circle at 10px 15px, ${theme.palette.a.main} 12px, transparent 12px)`,
      },
    },
  },
  headerDiv: {
    display: 'flex',
    paddingBottom: '10px',
    [theme.breakpoints.only('xxs')]: {
      flexDirection: 'column',
    },
  },
  title: {
    color: [theme.palette.c.main],
    [theme.breakpoints.down('xl')]: {
      fontSize: theme.fontSize.title.xlDown,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.fontSize.title.smDown,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.fontSize.title.xsDown,
    },
    [theme.breakpoints.only('xxs')]: {
      fontSize: theme.fontSize.title.xxsOnly,
    },
  },
  contentText: {
    color: theme.palette.c.main,
    paddingBottom: '20px',
    [theme.breakpoints.down('xl')]: {
      fontSize: theme.fontSize.text.xlDown,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.fontSize.text.smDown,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.fontSize.text.xsDown,
    },
    [theme.breakpoints.only('xxs')]: {
      fontSize: theme.fontSize.text.xxsOnly,
    },
  },
  logoDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: theme.spacing(1),
  },
  gridDiv: {
    display: 'flex',
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0',
  },
  gridItem: {
    minHeight: '180px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textDecoration: 'none',
    [theme.breakpoints.down('xl')]: {
      minHeight: '180px',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '180px',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '180px',
    },
    [theme.breakpoints.only('xxs')]: {
      minHeight: '80px',
    },
  },
  logo: {
    width: '100%',
    height: 'auto',
  },
  logoText: {
    marginTop: '15px',
    textAlign: 'center',
    color: theme.palette.c.main,
    [theme.breakpoints.down('xl')]: {
      fontSize: '1.3em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.fontSize.text.xsDown,
    },
    [theme.breakpoints.only('xxs')]: {
      fontSize: '0.75em',
    },
  },
}));

export default function TechStack() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div id='techStack' className={classes.techStack}>
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
          <div className={classes.headerDiv}>
            <Typography className={classes.title}>Tech Stack</Typography>
          </div>
          <Typography className={classes.contentText}>
            I'm familiar with the following languages, frameworks, libraries,
            technologies, and standards.
          </Typography>
          <Card className={classes.root}>
            <div className={classes.gridDiv}>
              <Grid className={classes.gridContainer} container spacing={3}>
                {[
                  theme.logoProps.javascript,
                  theme.logoProps.python,
                  theme.logoProps.github,
                  theme.logoProps.react,
                  theme.logoProps.redux,
                  theme.logoProps.jest,
                  theme.logoProps.nodejs,
                  theme.logoProps.express,
                  theme.logoProps.postgresql,
                  theme.logoProps.materialui,
                  theme.logoProps.jss,
                  theme.logoProps.less,
                  theme.logoProps.sass,
                  theme.logoProps.svg,
                  theme.logoProps.html5,
                  theme.logoProps.css3,
                  theme.logoProps.illustrator,
                  theme.logoProps.xd,
                ].map(item => (
                  <Grid
                    className={classes.gridItem}
                    item
                    xs={4}
                    sm={3}
                    md={'auto'}
                    component='a'
                    href={item.link}
                    key={item.text}
                  >
                    <div className={classes.logoDiv}>
                      <img
                        className={classes.logo}
                        src={item.img}
                        alt={item.alt}
                      />
                      <div className={classes.logoText}>{item.text}</div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Card>
        </div>
      </Box>
    </div>
  );
}
