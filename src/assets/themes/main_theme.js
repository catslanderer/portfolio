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
    primary: {
      main: '#002447'
    },
    secondary: {
      main: '#53d3d1'
    }
  }
});
