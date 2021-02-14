import React from 'react'
import { Grid } from '@material-ui/core';

// components
import Timeline from './Timeline'

export default function TimelineContainer() {
    return (
    <Grid container spacing={2} justify="flex-end" alignItems="center">
        <Grid item xs={12} sm={4} align="center">
            My Experience
        </Grid>
        
        <Grid item xs={12} sm={8}>
            <Timeline />
        </Grid>
    </Grid>
    )
}
