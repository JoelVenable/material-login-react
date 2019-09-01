import React, { useState } from "react";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";
import { LoaderButton } from "../LoaderButton";

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
      <FormGroup controlId="confirmationCode" bsSize="large">
        <ControlLabel>Confirmation Code</ControlLabel>
        <FormControl
          autoFocus
          type="tel"
          value={code}
          onChange={handleChange}
        />
        <HelpBlock>Please check your email for the code.</HelpBlock>
      </FormGroup>
      <LoaderButton
        block
        bsSize="large"
        disabled={disabled}
        type="submit"
        isLoading={loading}
        text="Verify"
        loadingText="Verifying…"
      />
    </form>
  );
};
