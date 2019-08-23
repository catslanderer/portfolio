import React from 'react';
import cc from 'classcat';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import rxid_screenshot from '../assets/images/rxid_screenshot.png';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
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
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '20px',
  },
  headerDiv: {
    width: '100%',
    display: 'flex',
    paddingBottom: '10px',
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
  contentDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xl')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  textDiv: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xl')]: {
      width: '50%',
      paddingRight: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingRight: '0',
    },
  },
  contentText: {
    color: theme.palette.a.dark,
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
  imageLinkDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xl')]: {
      width: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  img: {
    border: '3px solid',
    borderColor: theme.palette.a.main,
    width: '100%',
  },
  linksDiv: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xl')]: {
      padding: '10px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '10px 10px 10px 0',
    },
  },
  link: {
    color: theme.palette.a.dark,
    paddingTop: '5px',
    fontWeight: '700',
    [theme.breakpoints.down('xl')]: {
      fontSize: '1.5em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em',
    },
    [theme.breakpoints.only('xxs')]: {
      fontSize: '0.9em',
    },
  },
}));

export default function Project1() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box
      className={cc(
        theme.variables.shadow === 'dark'
          ? classes.containerDark
          : theme.variables.shadow === 'pink'
          ? classes.containerPink
          : classes.container
      )}
    >
      <Card className={classes.card}>
        <div className={classes.headerDiv}>
          <Typography className={classes.title}>RxID</Typography>
        </div>
        <div className={classes.contentDiv}>
          <div className={classes.textDiv}>
            <Typography className={classes.contentText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nihil placeat dolores enim similique nesciunt aspernatur quia
              accusantium in? Iste esse rem atque amet sequi aspernatur
              inventore provident velit quam! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Corporis adipisci cum dolor
              reprehenderit veritatis autem eum officiis laborum ad ab, sapiente
              consequuntur eius temporibus voluptate saepe explicabo impedit
              nihil ullam. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eaque voluptate at ducimus corrupti accusantium tempora esse
              illo praesentium doloribus provident. Sapiente id odit quaerat?
              Illum repellat autem earum aut vitae?
            </Typography>
          </div>
          <div className={classes.imageLinkDiv}>
            <img
              src={rxid_screenshot}
              alt='rxid screenshot'
              className={classes.img}
            />
            <div className={classes.linksDiv}>
              <Link
                href={theme.projectLinks.rxidDeploy}
                className={classes.link}
              >
                Deployed Site
              </Link>
              <Link
                href={theme.projectLinks.rxidFrontEnd}
                className={classes.link}
              >
                Front End Repo (my commits)
              </Link>
              <Link
                href={theme.projectLinks.rxidBackEnd}
                className={classes.link}
              >
                Back End Repo (my commits)
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </Box>
  );
}
