import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Emoji from 'a11y-react-emoji'
import { makeStyles } from '@material-ui/core/styles'

// components
import Timeline from './Timeline'

export default function TimelineContainer() {
  const classes = useStyles()

    return (
    <Grid 
      container 
      spacing={2} 
      justify="flex-end" 
      alignItems="center"
      className={classes.root}
    >
        <Grid item xs={12} sm={4} align="center">
        <Typography
          align="center"
          variant="h5"
          style={{ color: "#6B4740" }}
        >
          Here's my work <Emoji symbol="🔨" label="write" /> experience  
        </Typography>
        <Typography
          align="center"
          variant="subtitle1"
          style={{ color: "#6B4740" }}
        >
          Contact me below if you'd like a copy of my resume 
        </Typography>
        </Grid>
        
        <Grid item xs={12} sm={8}>
            <Timeline />
        </Grid>
    </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
