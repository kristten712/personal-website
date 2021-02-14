import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box } from '@material-ui/core'
import ProfileImage from '../../images/profile-2.jpg'
import { useSite } from '../../context/SiteContext'
import Image from 'material-ui-image'

export default function Introduction({ appBarHeight }) {
    const classes = useStyles()
    const { bio } = useSite()

    return (
        <div className={classes.root}>
            <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item xs={12} style={{ "height": appBarHeight + 25 + 'px' }}></Grid>
                <Grid item xs={12} sm={3} align="center">
                    <Box className={classes.boxImage}>
                    <Image src={ProfileImage} />
                    </Box>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                    <Box className={classes.box}>{bio}</Box>
                </Grid>
                <Grid item xs={12} style={{ "height": appBarHeight + 25 + 'px' }}></Grid>
            </Grid>
      </div>
    )
}

const bgcolor = '#ffeae0'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: bgcolor,
    },
    box: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    boxImage: {
        padding: theme.spacing(2),
        height: theme.spacing(27),
        width: theme.spacing(27),
        alignContent: 'center'
    }
  }));