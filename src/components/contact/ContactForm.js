import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'

export default function ContactForm() {
    const [success, setSuccess] = useState(false);

    useEffect(() => {
      if ( window.location.search.includes('success=true') ) {
        setSuccess(true);
      }
    }, []);

    return (
    <>
<Container maxWidth='sm'>
 <h2>CONTACT</h2>
   <Card>
     <form 
       name="contact" 
       method="POST" 
       data-netlify="true" 
      >
     <input type="hidden" name="form-name" value="contact" />
        <TextField id="standard-basic" label="name" name="name" />
        <TextField id="standard-basic" label="email" name="email" />
        <TextField multiline id="standard-basic" label="message" name="message" />
        <Button type="submit">Send</Button>
       </form>
      </Card>
   </Container>
    </>
    )
}
