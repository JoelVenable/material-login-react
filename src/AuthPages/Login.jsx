import React, { useState, useContext } from "react";
import { TextField, Container, Button, CircularProgress } from '@material-ui/core';
import { AuthContext } from "../AuthContext";
import { Link } from 'react-router-dom';
import { validate } from "../helpers/emailValidator";
import { withRouter } from 'react-router-dom';
import { WelcomeHeader } from "../components/WelcomeHeader";


export const Login = withRouter(({ history }) => {
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
    <>
      <WelcomeHeader />
      <Container maxWidth="xs" style={{ marginTop: '2rem' }}>

        <form onSubmit={handleSubmit}>
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
            type="password"
            required
            fullWidth
            value={password}
            onChange={handleChange}
            margin="normal"
          />
          <div style={{ marginTop: '1rem' }}>
            <Button
              color="primary"
              variant="contained"
              style={{ fontSize: '1.3rem' }}
              disabled={disabled || loading}
              type="submit"
            >Sign In
            {loading && <CircularProgress size={68} />}
            </Button>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <Button
              style={{ fontSize: '1.3rem' }}
              component={Link}
              to="/signup"
            >Register</Button>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <Button
              style={{ fontSize: '1.3rem' }}
              component={Link}
              to="/recover"
            >Forgot Password?</Button>
          </div>

        </form>
      </Container>
    </>
  );
});
