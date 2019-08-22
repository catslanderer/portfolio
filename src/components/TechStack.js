import React from 'react';
import cc from 'classcat';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
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
    background: theme.palette.b.dark,
  },
  contentDiv: {
    background: [theme.palette.b.main],
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px 30px 30px 30px',
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
      fontSize: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5em',
    },
  },
  contentText: {
    color: [theme.palette.c.main],
    fontSize: '1.5em',
  },
  card: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xl')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  gridDiv: {
    display: 'flex',
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0 10px 0',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
}));

export default function Contact() {
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
            : classes.container
        )}
      >
        <div className={classes.contentDiv}>
          <div className={classes.headerDiv}>
            <Typography className={classes.title}>Tech Stack</Typography>
          </div>
          <Typography className={classes.contentText}>
            I'm familiar with the following languages, frameworks, libraries,
            and technologies.
          </Typography>
          <div className={classes.root}>
            <div className={classes.gridDiv}>
              <Grid className={classes.gridContainer} container spacing={3}>
                {[
                  theme.logoProps.css3,
                  theme.logoProps.express,
                  theme.logoProps.github,
                  theme.logoProps.html5,
                  theme.logoProps.illustrator,
                  theme.logoProps.javascript,
                  theme.logoProps.jest,
                  theme.logoProps.jss,
                  theme.logoProps.less,
                  theme.logoProps.materialui,
                  theme.logoProps.nodejs,
                  theme.logoProps.postgresql,
                  theme.logoProps.python,
                  theme.logoProps.react,
                  theme.logoProps.redux,
                  theme.logoProps.sass,
                  theme.logoProps.svg,
                  theme.logoProps.xd,
                ].map(item => (
                  <Grid
                    className={classes.gridItem}
                    item
                    xs={'auto'}
                    component='a'
                    href={item.link}
                    key={item.text}
                  >
                    <Card className={classes.card}>
                      <img
                        className={classes.logo}
                        src={item.img}
                        alt={item.alt}
                      />
                      {item.text}
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}
