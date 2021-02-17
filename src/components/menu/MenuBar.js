import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from '@material-ui/core/ListItemText'
import Toolbar from '@material-ui/core/Toolbar'
import HomeIcon from '@material-ui/icons/Home'
import { fade } from '@material-ui/core/styles/colorManipulator'
import Box from '@material-ui/core/Box'

// icons
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import YouTubeIcon from '@material-ui/icons/YouTube'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const menuBarColor = "#6B4740"

export default function MenuBar({ handleScroll, appBarHeight }) {
    const classes = useStyles()

    function scroll(id) {
        handleScroll(id)
    }

    function handleRedirect(url) {
        var win = window.open(url, '_blank')
        win.focus()
    }

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'}) 
    }

    return (
        <AppBar position="fixed" className={classes.appbar} style={{ "height": appBarHeight + 'px' }}>
            <Toolbar>
            <Box display='flex' flexGrow={1}>
                <IconButton onClick={() => scrollToTop()}>
                    <HomeIcon style={{ color: menuBarColor }} />
                </IconButton>
                {menuListItems.map((item, index) => (
                    <List key={index} component="nav" onClick={() => scroll(item.anchor)}>
                        <ListItem button>
                            <ListItemText primary={item.name} style={{ color: menuBarColor }} />
                        </ListItem>
                    </List>
                ))}
                </Box>            
                {socialLinks.map((link, index) => (
                    <IconButton key={index} onClick={() => handleRedirect(link.url)}>
                        {link.icon}
                    </IconButton>
                ))}
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: fade("#ffeae0", 0.9),
        justifyContent: 'center',
    },
}));



const socialLinks = [
    {
        url: 'https://www.linkedin.com/in/kristen-fang/',
        icon: <LinkedInIcon style={{ color: menuBarColor }} />
    },
    {
        url: 'https://github.com/kristten712/',
        icon: <GitHubIcon style={{ color: menuBarColor }} />,
    },
    {
        url: 'https://medium.com/@fang-kristen',
        icon:  <FontAwesomeIcon icon={faMedium} style={{ color: menuBarColor }} /> 
    },
    {
        url: 'https://www.youtube.com/c/CollegeLead?sub_confirmation=1',
        icon: <YouTubeIcon style={{ color: menuBarColor }} />
    }
]

const menuListItems = [
    {
        name: 'Experience',
        anchor: 'experience'
    },
    {
        name: 'Projects',
        anchor: 'projects'
    },
    {
        name: 'Blog',
        anchor: 'blog'
    },
    {
        name: 'Contact',
        anchor: 'contact'
    }
]

