import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../assets/themes/main_theme';
import Banner from './Banner';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Banner />
      </div>
    </ThemeProvider>
  );
}

export default App;
