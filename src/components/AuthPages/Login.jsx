import React, { useState, useContext } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Typography, TextField } from '@material-ui/core';
import "./login.css";
import { AuthContext } from "../../AuthContext";
import { LoaderButton } from "../LoaderButton";
import { Link } from 'react-router-dom';
import { validate } from "../../helpers/emailValidator";


export const Login = () => {
  const { actions } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState();
  const [loading, setLoading] = useState(false);

  const validateForm = () => validate(email) && password.length > 0;

  const checkEmailField = () => setError(!validate(email));

  const handleChange = e => {
    const { id, value } = e.target;
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
    setDisabled(!validateForm());
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    await actions.login(email, password);

    setLoading(false);
  };

  return (
    <div className="Login">
      <Typography align='center' variant='h2'>Welcome to Scratch</Typography>
      <form onSubmit={handleSubmit}>
        <TextField id="email"
          label="Email"
          variant="outlined"
          required
          value={email}
          onChange={handleChange}
          margin="normal"
        />

        <FormGroup controlId="email" bsSize="lg">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onBlur={checkEmailField}
            error={error}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="lg">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={password}
            onChange={handleChange}
          />
        </FormGroup>
        <Link to="/recover">Forgot password?</Link>
        <LoaderButton
          block
          bsSize="large"
          disabled={disabled}
          type="submit"
          isLoading={loading}
          text="Login"
          loadingText="Logging in..."
        />
      </form>
    </div>
  );
};
