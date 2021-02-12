// TODO:
// - make profile picture resizable
// - make website mobile friendly with grid sizing 

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, Box } from '@material-ui/core';
import ProfileImage from '../../images/profile-1.jpg'
import { useSite } from '../../context/SiteContext'

export default function Introduction() {
    const classes = useStyles()
    const { browserHeight, bio } = useSite()
    const paddingHeight = 6

    return (
    <div className={classes.container} style={{"height": browserHeight*0.6 + 'px'}}>
        <Grid 
            container 
            spacing={2}          
            direction="row"
            justify="center"
            alignItems="center"
        >                
            <Grid item xs={3} className={classes.gridItem}>
                <Box pt={paddingHeight}>
                    <Avatar alt="Kristen Fang" src={ProfileImage} className={classes.image} />
                </Box>
            </Grid>

            <Grid item xs={6}>
                <Box pt={paddingHeight}>
                    <p>{bio}</p>
                </Box>
            </Grid>

            
        </Grid>
    </div>
    )
}

// const textColor = 'black'
const bgcolor = '#ffeae0'

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        backgroundColor: bgcolor,
    },
    paper: {
        padding: theme.spacing(10),
        alignItems: "center"
    },
    gridItem: {
        // margin: "auto"
    },
    image: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        // TODO: resize image with browser
    }
  }));
