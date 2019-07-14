import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  variables: {
    contactHeight: '500px'
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1800
    }
  },
  palette: {
    // teal
    primary: {
      light: '#8bffff',
      main: '#53d3d1',
      dark: '#00a1a0',
      xdark: '#006666'
    },
    // pink
    secondary: {
      light: '#ffffff',
      main: '#FBECEB',
      dark: '#c8bab9'
    },
    a: {
      // teal
      light: '#8bffff',
      main: '#53d3d1',
      dark: '#00a1a0',
      xdark: '#006666'
    },
    b: {
      // pink
      light: '#ffffff',
      main: '#FBECEB',
      dark: '#c8bab9'
    },
    c: {
      // purple
      light: '#344b73',
      main: '#002447',
      dark: '#000020'
    },
    d: {
      // orange
      light: '#ffe479',
      main: '#feb249',
      dark: '#c78214'
    }
  }
});
