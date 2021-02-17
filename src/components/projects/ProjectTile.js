import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
// import Image from 'material-ui-image'

export default function ProjectTile({ project }) {
  const classes = useStyles();

  function handleRedirect(url) {
    var win = window.open(url, '_blank')
    win.focus()
  }

  return (
    <Card className={classes.root}>
          {project.image && <CardMedia src={project.image} component="img" title="Some title" />}
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {project.languages}
        </Typography>
        <Typography variant="h6" component="h2">
          {project.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Grid container justify="space-between" alignItems="center">
        <Button size="small" onClick={() => handleRedirect(project.url)}>
            Source Code
        </Button>
        <Button size="small" onClick={() => handleRedirect(project.demo)}>
            Demo
        </Button>
      </Grid>
      </CardActions>
    </Card>
  );
}

const useStyles = makeStyles({
    root: {
      width: 345,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  