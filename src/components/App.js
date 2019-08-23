import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import theme from '../assets/mui-themes/main_theme';
import NavBar from './NavBar';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Projects from './Projects';
import TechStack from './TechStack';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id='aboutMe' className='App'>
        <NavBar />
        <Banner />
        <AboutMe />
        <Projects />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
