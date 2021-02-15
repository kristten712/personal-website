import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MediumTile from './MediumTile'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'


export default function Blog({ appBarHeight }) {
  const classes = useStyles()
  const mediumRSS = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40fang.kristen&api_key=xpjle8iutxjiok3ukbomuccihlwiwr85ibffsosw`

  const [mediumData, setMediumData] = useState([])

  useEffect(() => {
      fetch(mediumRSS)
        .then(res => res.json())
        .then(data => {setMediumData(data.items)})
        .catch(err => console.log(err));
    }, [mediumRSS])
      
  return (
    <div className={classes.root}>
      <Box py={3}>
        <Typography
          align="center"
          variant="h4"
          style={{ color: "#413a3f" }}
        >
          Blog 
        </Typography>
      </Box>
      <Grid container spacing={2} justify="center" alignItems="center"
      >
          {mediumData.map((item, index) => (
            <Grid item xs={4} key={index}>
              <MediumTile item={item} />
            </Grid>
          ))}
          <Grid item xs={12} style={{ "height": appBarHeight - 20 + 'px' }} />
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