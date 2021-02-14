import React from 'react'
import Grid from '@material-ui/core/Grid';

// components 
import MenuBar from './menu/MenuBar'
import Introduction from './introduction/Introduction'
import TimelineContainer from './timeline/TimelineContainer'
import Projects from './projects/Projects'

export default function Main() {
    const appBarHeight = 50 // to standardize and pass to introduction & menubar components
    function handleScroll(id) {
        document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' })
    }

    return (
    <>
    <MenuBar handleScroll={handleScroll} appBarHeight={appBarHeight} />
        <Grid container spacing={0}>
            <Grid item xs={12} id="bio">
                <Introduction appBarHeight={appBarHeight} />
            </Grid>
            <Grid item xs={12} id='experience'>
                <TimelineContainer />
            </Grid>
            <Grid item xs={12} id='experience'>
                <Projects />
            </Grid>
        </Grid>  
    </>
    )
}
