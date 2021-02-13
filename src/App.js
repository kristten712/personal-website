import React, { Component } from 'react';
// import { Box } from '@material-ui/core/'
import Grid from '@material-ui/core/Grid';

// context
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './Theme'
import { SiteProvider } from './context/SiteContext'

// components 
import Header from './components/header/Header'
import Introduction from './components/introduction/Introduction'
import Timeline from './components/timeline/Timeline'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <SiteProvider>

          <Grid container spacing={0}>
        
            <Grid item xs={12}>
              <Header />
            </Grid>

            <Grid item xs={12}>
              <Introduction />
            </Grid>

            <Grid item xs={12}>
              <Timeline />
            </Grid>
        
          </Grid>               
        </SiteProvider> 
      </ThemeProvider>
    );
  }
}

export default App;
