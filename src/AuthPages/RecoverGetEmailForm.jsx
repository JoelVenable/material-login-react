import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { validate } from '../helpers/emailValidator';
import { Link } from 'react-router-dom';
import { WelcomeContainer } from '../components/WelcomeContainer';

export const RecoverGetEmailForm = ({ getCode }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleGetCodeClick = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await getCode(email);
    }
    catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  const handleChange = e => {
    setEmail(e.target.value);
    setDisabled(!validate(email));
  }



  return (
    <>
      <WelcomeContainer>

        <Typography align='center' variant='h5'>Recover your password</Typography>

        <form onSubmit={handleGetCodeClick}>
          <TextField id="email"
            label="Email"
            variant="outlined"
            required
            fullWidth
            value={email}
            onChange={handleChange}
            margin="normal"
          />
          <div style={{ marginTop: '1rem' }}>
            <Button
              color="primary"
              disabled={disabled}
              variant="contained"
              style={{ fontSize: '1.3rem' }}
              type="submit"
            >Sign Up</Button>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <Button
              style={{ fontSize: '1.3rem' }}
              component={Link}
              to="/login"
            >Sign In</Button>
          </div>
        </form>
      </WelcomeContainer>
    </>
  )
}