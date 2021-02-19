import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import Emoji from 'a11y-react-emoji'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import IconButton from '@material-ui/core/IconButton'

export default function Footer() {
    const classes = useStyles()

    function scroll(id) {
        window.scrollTo({top: 0, behavior: 'smooth'}) 
    }

    return (
    <div className={classes.root}>
        <Box className={classes.box}>
            <footer className={classes.footer}>
                <IconButton onClick={() => scroll()}>
                    <ExpandLessIcon />
                </IconButton>
                <Typography variant="body1" component="h3">
                    Made with <Emoji symbol="💕" label="love" /> in React with Material UI 
                </Typography>
                <Typography variant="body2" component="h3">
                    Fork <Emoji symbol="🍴" label="fork" /> the&nbsp;
                    <a href="https://github.com/kristten712/personal-website" target="_blank" rel="noreferrer noopener"> 
                         source code 
                    </a> 
                    &nbsp;for this project
                </Typography>
                <Typography variant="caption" component="p">
                    @2021 All rights reserved
                </Typography>
            </footer>
        </Box>
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
        justify: 'center'
    },
    footer: {
        marginTop: theme.spacing(2),
    }
}));