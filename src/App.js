import React, { Component } from 'react';
import { Box } from '@material-ui/core/'

// theme
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './Theme'

// components 
import Header from './components/header/Header'

// remove da box shit below :) 

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Box m={0}> 
            <Header />
        </Box>
      </ThemeProvider>
    );
  }
}

export default App;
