import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
// import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  overrides: {
    MuiTimelineItem: {
      missingOppositeContent: {
        "&:before": {
          display: "none"
        }
      }
    },
  },
  palette: {
    // action: {
    //   hover: '#f0f8ff'
    // },
    primary: {
      main: '#ffeae0',
    },
    secondary: {
      main: '#ef9c84',
    },
  }
  });