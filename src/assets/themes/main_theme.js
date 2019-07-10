import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
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
    // orange
    secondary: {
      light: '#ffe479',
      main: '#feb249',
      dark: '#c78214'
    },
    orange: {
      light: '#ffe479',
      main: '#feb249',
      dark: '#c78214'
    },
    pink: {
      light: '#ffffff',
      main: '#FBECEB',
      dark: '#c8bab9'
    },
    purple: {
      light: '#344b73',
      main: '#002447',
      dark: '#000020'
    },
    teal: {
      light: '#8bffff',
      main: '#53d3d1',
      dark: '#00a1a0',
      xdark: '#006666'
    }
  }
});
