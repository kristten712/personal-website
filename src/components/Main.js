import React from 'react'
import Grid from '@material-ui/core/Grid';

// components 
import MenuBar from './menu/MenuBar'
import Introduction from './introduction/Introduction'
import TimelineContainer from './timeline/TimelineContainer'

export default function Main() {
    // const refIntro = useRef(null)
    // const refExp = useRef(null)

    function handleScroll(id) {
        document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' })
    }

    return (
    <>
    <MenuBar handleScroll={handleScroll} />
        <Grid container spacing={0}>
            <Grid item xs={12} id="bio">
                <Introduction />
            </Grid>
            <Grid item xs={12} id='experience'>
                <TimelineContainer />
            </Grid>
        </Grid>  
    </>
    )
}
