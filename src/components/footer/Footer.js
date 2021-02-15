import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import IconButton from '@material-ui/core/IconButton'

export default function Footer({ handleScroll }) {
    const classes = useStyles()

    function scroll(id) {
        window.scrollTo({top: 0, behavior: 'smooth'}) // figure out how to scroll smoothly
    }

    return (
    <div className={classes.root}>
        <Box className={classes.box}>
            <footer className={classes.footer}>
                <IconButton onClick={() => scroll()}>
                    <ExpandLessIcon />
                </IconButton>
                <Typography variant="body1" component="h3">
                    React App with Material UI
                </Typography>
                <Typography variant="caption" component="p">
                    @2021 All right reserved
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
    },
    footer: {
        marginTop: theme.spacing(2),
    }
}));