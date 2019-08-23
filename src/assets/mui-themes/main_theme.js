import { createMuiTheme } from '@material-ui/core/styles';

import css3_logo from '../logos/css3_logo.svg';
import express_logo from '../logos/express_logo.svg';
import github_logo from '../logos/github_logo.svg';
import html5_logo from '../logos/html5_logo.svg';
import illustrator_logo from '../logos/illustrator_logo.svg';
import javascript_logo from '../logos/javascript_logo.svg';
import jest_logo from '../logos/jest_logo.svg';
import jss_logo from '../logos/jss_logo.svg';
import less_logo from '../logos/less_logo.svg';
import materialui_logo from '../logos/materialui_logo.svg';
import nodejs_logo from '../logos/nodejs_logo.svg';
import postgresql_logo from '../logos/postgresql_logo.svg';
import python_logo from '../logos/python_logo.svg';
import react_logo from '../logos/react_logo.svg';
import redux_logo from '../logos/redux_logo.svg';
import sass_logo from '../logos/sass_logo.svg';
import svg_logo from '../logos/svg_logo.svg';
import xd_logo from '../logos/xd_logo.svg';

export default createMuiTheme({
  variables: {
    shadow: 'pink', // values: 'none', 'dark', 'pink'
  },
  navLinks: {
    aboutMe: '#aboutMe',
    projects: '#projects',
    techStack: '#techStack',
    contact: '#contact',
  },
  projectLinks: {
    rxidDeploy: 'https://www.rxid.net/',
    rxidFrontEnd:
      'https://github.com/labs12-rxid/Front-End/commits?author=ChristopherJFoster',
    rxidBackEnd:
      'https://github.com/labs12-rxid/Backend/commits?author=ChristopherJFoster',
  },
  logoProps: {
    css3: {
      text: 'CSS3',
      link: 'https://www.w3.org/Style/CSS/current-work.en.html',
      img: css3_logo,
      alt: 'css3 logo',
    },
    express: {
      text: 'Express',
      link: 'https://expressjs.com/',
      img: express_logo,
      alt: 'express logo',
    },
    github: {
      text: 'GitHub',
      link: 'https://github.com/',
      img: github_logo,
      alt: 'github logo',
    },
    html5: {
      text: 'HTML5',
      link: 'https://www.w3.org/html/',
      img: html5_logo,
      alt: 'html5 logo',
    },
    illustrator: {
      text: 'Adobe Illustrator',
      link: 'https://helpx.adobe.com/illustrator/user-guide.html',
      img: illustrator_logo,
      alt: 'illustrator logo',
    },
    javascript: {
      text: 'JavaScript',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
      img: javascript_logo,
      alt: 'javascript logo',
    },
    jest: {
      text: 'Jest',
      link: 'https://jestjs.io/',
      img: jest_logo,
      alt: 'jest logo',
    },
    jss: {
      text: 'JSS',
      link: 'https://cssinjs.org/',
      img: jss_logo,
      alt: 'jss logo',
    },
    less: {
      text: 'less',
      link: 'http://lesscss.org/',
      img: less_logo,
      alt: 'less logo',
    },
    materialui: {
      text: 'Material-UI',
      link: 'https://material-ui.com/',
      img: materialui_logo,
      alt: 'material-ui logo',
    },
    nodejs: {
      text: 'Node.js',
      link: 'https://nodejs.org/',
      img: nodejs_logo,
      alt: 'nodejs logo',
    },
    postgresql: {
      text: 'PostgreSQL',
      link: 'https://www.postgresql.org/',
      img: postgresql_logo,
      alt: 'postgresql logo',
    },
    python: {
      text: 'Python',
      link: 'https://www.python.org/',
      img: python_logo,
      alt: 'python logo',
    },
    react: {
      text: 'React',
      link: 'https://reactjs.org/',
      img: react_logo,
      alt: 'react logo',
    },
    redux: {
      text: 'Redux',
      link: 'https://redux.js.org/',
      img: redux_logo,
      alt: 'redux logo',
    },
    sass: {
      text: 'Sass',
      link: 'https://sass-lang.com/',
      img: sass_logo,
      alt: 'sass logo',
    },
    svg: {
      text: 'SVG',
      link: 'https://www.w3.org/Graphics/SVG/',
      img: svg_logo,
      alt: 'svg logo',
    },
    xd: {
      text: 'Adobe XD',
      link: 'https://helpx.adobe.com/xd/user-guide.html',
      img: xd_logo,
      alt: 'xd logo',
    },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1800,
    },
  },
  palette: {
    // teal
    primary: {
      light: '#8bffff',
      main: '#53d3d1',
      dark: '#00a1a0',
      xdark: '#006666',
    },
    // pink
    secondary: {
      light: '#ffffff',
      main: '#FBECEB',
      dark: '#c8bab9',
    },
    a: {
      // teal
      light: '#8bffff',
      main: '#53d3d1',
      dark: '#00a1a0',
      xdark: '#006666',
    },
    b: {
      // pink
      light: '#ffffff',
      main: '#FBECEB',
      dark: '#c8bab9',
    },
    c: {
      // purple
      light: '#344b73',
      main: '#002447',
      dark: '#000020',
    },
    d: {
      // orange
      light: '#ffe479',
      main: '#feb249',
      dark: '#c78214',
    },
  },
});
