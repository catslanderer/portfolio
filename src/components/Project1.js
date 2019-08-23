import React from 'react';
import cc from 'classcat';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import rxid_screenshot from '../assets/images/rxid_screenshot.png';

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
    background: theme.palette.b.dark,
  },
  contentDiv: {
    background: theme.palette.a.main,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '30px 0',
    display: 'flex',
    justifyContent: 'space-between',
  },
  textDiv: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '20px',
  },
  imageDiv: {
    display: 'flex',
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
  link: {
    padding: '0 0 10px 5px',
    fontWeight: '700',
    fontSize: '1.5em',
    color: theme.palette.a.xdark,
  },
  contentText: {
    color: theme.palette.c.main,
    fontSize: '1.5em',
    paddingBottom: '20px',
  },
  img: {
    objectFit: 'none',
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
      <div className={classes.contentDiv}>
        <div className={classes.textDiv}>
          <Typography className={classes.title}>RxID</Typography>
          <Link href={theme.projectLinks.rxidDeploy} className={classes.link}>
            Deployed Site
          </Link>
          <Link href={theme.projectLinks.rxidFrontEnd} className={classes.link}>
            Front End Repo (my commits)
          </Link>
          <Link href={theme.projectLinks.rxidBackEnd} className={classes.link}>
            Back End Repo (my commits)
          </Link>
          <Typography className={classes.contentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil
            placeat dolores enim similique nesciunt aspernatur quia accusantium
            in? Iste esse rem atque amet sequi aspernatur inventore provident
            velit quam! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Corporis adipisci cum dolor reprehenderit veritatis autem eum
            officiis laborum ad ab, sapiente consequuntur eius temporibus
            voluptate saepe explicabo impedit nihil ullam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eaque voluptate at ducimus
            corrupti accusantium tempora esse illo praesentium doloribus
            provident. Sapiente id odit quaerat? Illum repellat autem earum aut
            vitae?
          </Typography>
        </div>
        <div className={classes.imageDiv}>
          <img
            src={rxid_screenshot}
            alt='rxid screenshot'
            className={classes.img}
          />
        </div>
      </div>
    </Box>
  );
}
