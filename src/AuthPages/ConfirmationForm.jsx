import React, { useState } from "react";
import { TextField, Button, CircularProgress, Typography } from "@material-ui/core";

export const ConfirmationForm = ({ handleConfirm }) => {
  const [code, setCode] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { value } = e.target;
    setCode(value);
    setDisabled(!validateConfirmationForm());
  };

  const formSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await handleConfirm(code);
    setLoading(false);
  };

  const validateConfirmationForm = () => {
    // dummy validation
    return code.length > 0;
  };

  return (
    <form onSubmit={formSubmit}>
      <Typography variant="h4">Please check your email for a confirmation code...</Typography>
      <TextField id="code"
        label="Confirmation Code"
        variant="outlined"
        required
        fullWidth
        value={code}
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
        >Confirm
            {loading && <CircularProgress size={68} />}
        </Button>
      </div>

    </form>
  );
};


