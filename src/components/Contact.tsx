import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name.trim() === '');
    setEmailError(email.trim() === '');
    setMessageError(message.trim() === '');

    if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
      const templateParams = {
        name,
        email,
        message,
      };

      console.log(templateParams);
      
      emailjs.send('service_2g39bqe', 'template_dz8tzpq', templateParams, 'PMIo6NN4uZi-pXsv_')
        .then(
          (response) => console.log('SUCCESS!', response.status, response.text),
          (error) => console.log('FAILED...', error)
        );

      // Clear form fields after submission
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Excited to work in your company on your projects!</p>
          <Box component="form" noValidate autoComplete="off" className="contact-form" onSubmit={sendEmail}>
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                variant="outlined"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
                InputLabelProps={{
                  style: { 
                    backgroundColor: '#f8f9fa', // Match your background
                    paddingRight: '8px'
                  }
                }}
                InputProps={{
                  style: {
                    borderRadius: '8px',
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  }
                }}
              />
              <TextField
                required
                label="Email / Phone"
                   variant="outlined"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
                InputLabelProps={{
                  style: { 
                    backgroundColor: '#f8f9fa', // Match your background
                    paddingRight: '8px'
                  }
                }}
                InputProps={{
                  style: {
                    borderRadius: '8px',
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  }
                }}
              />
            </div>
            <TextField
              required
              label="Message"
                 variant="outlined"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={4}
              maxRows={10}
              style={{ width: '100%' }}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
              InputLabelProps={{
                style: { 
                  backgroundColor: '#f8f9fa', // Match your background
                  paddingRight: '8px'
                }
              }}
              InputProps={{
                style: {
                  borderRadius: '8px',
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                }
              }}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
