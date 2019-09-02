import React, { useState } from "react";
import { validate } from "../helpers/emailValidator";
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const SignUpForm = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const validateForm = () => {
    return (
      validate(email) && password.length > 0 && password === confirmPassword
    );
  };

  const formSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    await handleSubmit(email, password);
    setLoading(false);
  };

  const handleChange = e => {
    const { id, value } = e.target;
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
    if (id === "confirmPassword") setConfirmPassword(value);
    setDisabled(validateForm());
  };

  return (
    <form onSubmit={formSubmit}>
      <TextField id="email"
        label="Email"
        variant="outlined"
        required
        fullWidth
        value={email}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        required
        fullWidth
        value={password}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        id="confirmPassword"
        label="Confirm Password"
        variant="outlined"
        required
        fullWidth
        value={confirmPassword}
        onChange={handleChange}
        margin="normal"
      />
      <div style={{ marginTop: '1rem' }}>
        <Button
          color="primary"
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
  );
};
