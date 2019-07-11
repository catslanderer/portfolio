import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../assets/themes/main_theme';
import NavBar from './NavBar';
import Banner from './Banner';
import Empty from './Empty';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <NavBar />
        <Banner />
        <Empty />
      </div>
    </ThemeProvider>
  );
}

export default App;
