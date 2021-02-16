import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

export default function ContactForm() {
    const classes = useStyles()
    const [success, setSuccess] = useState(false);

    useEffect(() => {
      if ( window.location.search.includes('success=true') ) {
        setSuccess(true)
        alert(`Thank you for contacting me! I'll get back to you as soon as I can.`)
      }
    }, []);
    
    return (
    <>
     <form 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        className={classes.root}
     >
     <input type="hidden" name="form-name" value="contact" />
        <TextField 
            fullWidth
            id="standard-basic" 
            label="name" 
            name="name" 
            variant="outlined" 
            margin="normal"
            className={classes.textField}
        />
        <TextField 
            fullWidth
            id="standard-basic" 
            label="email" 
            name="email" 
            variant="outlined" 
            margin="normal"
            className={classes.textField}
        />
        <TextField 
            multiline 
            fullWidth
            variant="outlined"
            margin="normal"
            id="standard-basic" 
            label="message" 
            name="message"
            className={classes.textField} 
            rows={4}
        />
        <Button 
            type="submit" 
            variant="contained" 
            color="secondary"
            className={classes.button}
        >
            Submit
        </Button>
    </form>
    </>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        marginTop: theme.spacing(1)
    }      
  }));
