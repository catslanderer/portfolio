import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../assets/themes/main_theme';
import NavBar from './NavBar';
import Banner from './Banner';
import About from './About';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <NavBar />
        <Banner />
        <About />
      </div>
    </ThemeProvider>
  );
}

export default App;
