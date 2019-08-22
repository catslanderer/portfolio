import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import PhotoLibrary from '@material-ui/icons/PhotoLibrary';
import Memory from '@material-ui/icons/Memory';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  menuIcon: {
    color: theme.palette.c.main,
    [theme.breakpoints.only('sm')]: {
      width: '32px',
      height: '32px',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawerContent: {
    fontWeight: '300',
    color: theme.palette.c.main,
  },
}));

export default function NavDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {[
          { text: 'ABOUT ME', link: [theme.navLinks.aboutMe] },
          {
            text: 'PROJECTS',
            link: [theme.navLinks.project],
          },
          {
            text: 'TECH STACK',
            link: [theme.navLinks.techStack],
          },
          { text: 'CONTACT', link: [theme.navLinks.contact] },
        ].map(item => (
          <ListItem button component='a' href={item.link} key={item.text}>
            <ListItemIcon className={classes.drawerContent}>
              {item.text === 'ABOUT ME' ? (
                <ArrowUpward className={classes.drawerContent} />
              ) : item.text === 'PROJECTS' ? (
                <PhotoLibrary className={classes.drawerContent} />
              ) : item.text === 'TECH STACK' ? (
                <Memory className={classes.drawerContent} />
              ) : item.text === 'CONTACT' ? (
                <MailIcon className={classes.drawerContent} />
              ) : (
                <></>
              )}
            </ListItemIcon>
            <ListItemText
              className={classes.drawerContent}
              primary={item.text}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton aria-label='open drawer' onClick={toggleDrawer('top', true)}>
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
      <Drawer
        anchor='top'
        open={state.top}
        onClose={toggleDrawer('top', false)}
      >
        {fullList('top')}
      </Drawer>
    </div>
  );
}
