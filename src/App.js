import React, { Component } from 'react';

// context
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './Theme'
import { SiteProvider } from './context/SiteContext'

import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <SiteProvider>
          <Main />
        </SiteProvider> 
      </ThemeProvider>
    );
  }
}

export default App;
