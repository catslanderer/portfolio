import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import theme from '../assets/mui-themes/main_theme';
import NavBar from './NavBar';
import Banner from './Banner';
import About from './About';
import TechStack from './TechStack';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id='aboutMe' className='App'>
        <NavBar />
        <Banner />
        <About />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
