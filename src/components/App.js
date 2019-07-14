import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import theme from '../assets/themes/main_theme';
import NavBar from './NavBar';
import Banner from './Banner';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id='top' className='App'>
        <NavBar />
        <Banner />
        <About />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
