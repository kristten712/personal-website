import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Emoji from 'a11y-react-emoji'
// import ProjectTile from './ProjectTile'
import { useSite } from '../../context/SiteContext'

export default function FullWidthGrid({ appBarHeight }) {
  const classes = useStyles()
  const { projects } = useSite()

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12}>
            <Box py={4}>
                <Typography
                align="center"
                variant="h5"
                style={{ color: "#6B4740" }}
                >
                Here are a few projects <Emoji symbol="💻" label="laptop" /> I've been up to   
                </Typography>
            </Box>
        </Grid>

        <Grid item xs={12} sm={4} className={classes.gridItem}>
              <Grid container justify="center" alignItems="center">
                Coming soon!
              </Grid>
        </Grid>

        {/* {projects.map((project, index) => (
          <Grid key={index} item xs={12} sm={4} className={classes.gridItem}>
              <Grid container justify="center" alignItems="center">
                <ProjectTile project={project} />
              </Grid>
          </Grid>
        ))} */}

        <Grid item xs={12} style={{ "height": appBarHeight - 10 + 'px' }} />
      </Grid>
    </div>
  );
}

const bgcolor = '#cec0c0'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: bgcolor,
  },
  gridItem: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

