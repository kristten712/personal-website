import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default function MediumTile({ item }) {
    const classes = useStyles()
    
    function handleRedirect(url) {
        var win = window.open(url, '_blank')
        win.focus()
    }

    return (
        <Card className={classes.cardContainer}>
            <CardActionArea onClick={() => handleRedirect(item.link)}>
            <CardMedia
                className={classes.media}
                image={item.thumbnail}
                title={item.title}
            />
                <CardContent>
                    <Typography gutterBottom variant="body1" component="h2">
                    {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {item.description.replace(/<[^>]+>/g, '').split('Continue reading on Medium »')}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary" onClick={() => handleRedirect(item.link)}>
                    Continue reading »
                </Button>
            </CardActions>
        </Card>
    )
}

const bgcolor = '#cec0c0'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: bgcolor,
    },
    cardContainer: {
        maxWidth: 345,
    },
    media: {
        height: 140,
      },
  }));
