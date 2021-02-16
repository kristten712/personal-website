import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Emoji from 'a11y-react-emoji'
import ContactForm from './ContactForm'

export default function FullWidthGrid({ appBarHeight }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12}>
            <Box pt={4}>
                <Typography
                align="center"
                variant="h6"
                style={{ color: "#6B4740" }}
                >
                <Emoji symbol="📬" label="mail" /> Contact me     
                </Typography>
            </Box>
        </Grid>

        <Grid item xs={12} sm={6} className={classes.gridItem}>
            <Grid container justify="center" alignItems="center">
                <ContactForm />
            </Grid>
        </Grid>

        <Grid item xs={12} style={{ "height": appBarHeight + 'px' }} />
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridItem: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

