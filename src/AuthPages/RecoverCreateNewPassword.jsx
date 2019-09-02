import React, { useState } from "react";
import { TextField, Button, CircularProgress } from "@material-ui/core";


export const RecoverCreateNewPassword = ({ createNewPassword }) => {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const validateForm = () => (
    code.length > 0 &&
    password.length > 0 &&
    password === confirmPassword
  );


  const formSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    await createNewPassword(code, password);
    setLoading(false);
  };

  const handleChange = e => {
    const { id, value } = e.target;
    if (id === "code") setCode(value);
    if (id === "password") setPassword(value);
    if (id === "confirmPassword") setConfirmPassword(value);
    setDisabled(validateForm());
  };

  return (
    <form onSubmit={formSubmit}>
      <TextField id="code"
        label="Confirmation Code"
        variant="outlined"
        required
        fullWidth
        value={code}
        onChange={handleChange}
        margin="normal"
      />
      <hr />
      <TextField id="password"
        label="New Password"
        type="password"
        variant="outlined"
        required
        fullWidth
        value={password}
        onChange={handleChange}
        margin="normal"
      />

      <TextField id="confirmPassword"
        label="Confirm New Password"
        type="password"
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
          disabled={disabled || loading}
          type="submit"
        >Reset Password
            {loading && <CircularProgress size={68} />}
        </Button>
      </div>

    </form>
  );
};


