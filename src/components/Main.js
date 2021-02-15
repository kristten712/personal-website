import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

// components 
import MenuBar from './menu/MenuBar'
import Introduction from './introduction/Introduction'
import TimelineContainer from './timeline/TimelineContainer'
import Blog from './projects/Blog'
import Footer from './footer/Footer'

export default function Main() {
    const appBarHeight = 50 // to standardize and pass to introduction & menubar components
    const classes = useStyles()

    function handleScroll(id) {
        document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' })
    }

    return (
    <>
    <MenuBar handleScroll={handleScroll} appBarHeight={appBarHeight} />
        <Grid 
            container 
            direction="row"
            spacing={2}
            style={{ backgroundColor: "#F9f6f6"}}
        >
            <Grid item xs={12} id="bio">
                <Introduction appBarHeight={appBarHeight} />
            </Grid>
            <Grid item xs={12} id='experience'>
                <TimelineContainer />
            </Grid>
            <Grid item xs={12} id='blog'>
                <Blog appBarHeight={appBarHeight} />
            </Grid>
            <Grid item xs={12} id='blog' className={classes.footer}>
                <Footer handleScroll={handleScroll} />
            </Grid>
        </Grid>  
    </>
    )
}

const bgcolor = '#ffeae0'

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: bgcolor,
    },
}));
