import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSite } from '../../context/SiteContext'

// timeline 
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function CustomizedTimeline() {
  const classes = useStyles()
  const { workExperience, education } = useSite()

  return (
    <Timeline>
        {workExperience.map((experience, index) => (
            <TimelineItem key={index}>
            <TimelineSeparator>
                <TimelineDot color="secondary">
                    {experience.icon}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="body1" style={{display: 'inline-block'}}>
                        {`${experience.position}, ${experience.company}`}
                    </Typography>
                    <Typography variant="body2" style={{display: 'block'}}> 
                        {experience.description} 
                    </Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>        
        ))}
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot color="secondary">
                    {education.icon}
                </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="body1" style={{display: 'inline-block'}}>
                        {`${education.degree}, ${education.university}`}
                    </Typography>
                    <Typography variant="body2" style={{display: 'block'}}> 
                        {`Key Coursework: ${education.coursework}`} 
                    </Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem> 
    </Timeline>
  );
}

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
  }));