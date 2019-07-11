import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import PhotoLibrary from '@material-ui/icons/PhotoLibrary';
import Memory from '@material-ui/icons/Memory';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  menuIcon: {},
  drawerContent: {
    color: [theme.palette.teal.dark]
  }
}));

export default function NavDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [state, setState] = React.useState({
    top: false
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
          { text: 'TOP', link: 'https://christopherjfoster.dev/index.html' },
          {
            text: 'PROJECTS',
            link: 'https://christopherjfoster.dev/index.html'
          },
          {
            text: 'TECH STACK',
            link: 'https://christopherjfoster.dev/index.html'
          },
          { text: 'CONTACT', link: 'https://christopherjfoster.dev/index.html' }
        ].map(item => (
          <ListItem button component='a' href={item.link} key={item.text}>
            <ListItemIcon>
              {item.text === 'TOP' ? (
                <ArrowUpward className={classes.drawerContent} />
              ) : item.text === 'PROJECTS' ? (
                <PhotoLibrary className={classes.drawerContent} />
              ) : item.text === 'TECH STACK' ? (
                <Memory className={classes.drawerContent} />
              ) : (
                <MailIcon className={classes.drawerContent} />
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
      <Menu
        fontSize='large'
        style={{ color: [theme.palette.primary.xdark] }}
        onClick={toggleDrawer('top', true)}
      />
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
