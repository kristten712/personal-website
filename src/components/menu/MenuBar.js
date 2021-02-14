import React from 'react'
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText } from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home';

export default function MenuBar({ handleScroll }) {
    function scroll(id) {
        handleScroll(id)
    }

    return (
    <AppBar position="static">
        <Toolbar>
            <IconButton>
                <HomeIcon style={{ color: '#8e5c55' }} />
            </IconButton>
            {menuListItems.map((item, index) => (
                <List key={index} component="nav" onClick={() => scroll(item.anchor)}>
                    <ListItem button>
                        <ListItemText primary={item.name} style={{ color: '#8e5c55' }} />
                    </ListItem>
                </List>
            ))}
        </Toolbar>
    </AppBar>
    )
}

const menuListItems = [
    {
        name: 'Bio',
        anchor: 'bio'
    },
    {
        name: 'Experience',
        anchor: 'experience'
    },
    {
        name: 'Projects',
        anchor: ''
    },
    {
        name: 'Blog',
        anchor: ''
    },
    {
        name: 'Contact',
        anchor: ''
    }
]
