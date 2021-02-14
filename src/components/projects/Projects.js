import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Introduction({ appBarHeight }) {
    const classes = useStyles()
    const mediumRSS = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40fang.kristen`

    const [mediumData, setMediumData] = useState([])

    useEffect(() => {
        fetch(mediumRSS)
          .then(res => res.json())
          .then(data => {
            setMediumData(data.items);
            console.log(data.items)
          })
          .catch(err => console.log(err));
      }, [mediumRSS])

    return (
        <div className={classes.root}>
            <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item xs={12} style={{ "height": appBarHeight + 25 + 'px' }}></Grid>

                <Card className={classes.cardContainer}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
                <Grid item xs={12} style={{ "height": appBarHeight + 25 + 'px' }}></Grid>
            </Grid>
      </div>
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