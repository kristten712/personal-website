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
    const { browserHeight, browserWidth, bio } = useSite()
    const smallerDimension = (browserHeight > browserWidth)? browserWidth : browserHeight 
    console.log(smallerDimension)

    const paddingHeight = 6
    const imageSize = smallerDimension*.3

    return (
    <div className={classes.container} style={{"height": browserHeight*0.7 + 'px'}}>
        <Grid 
            container 
            spacing={2}          
            justify="center"
            alignItems="center"
        >                
            <Grid item xs={2} s={3} className={classes.gridItem}>
                <Box pt={paddingHeight}>
                    <Avatar 
                        alt="Kristen Fang" 
                        src={ProfileImage} 
                        className={classes.image} 
                        style={{
                            "height": imageSize + 'px', 
                            "width": imageSize + 'px'
                        }} 
                    />
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
        flexGrow: 1
    },
  }));
