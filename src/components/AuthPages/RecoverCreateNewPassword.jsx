import React, { useState } from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { LoaderButton } from "../LoaderButton";

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
      <FormGroup controlId="code" bsSize="lg">
        <ControlLabel>Confirmation Code</ControlLabel>
        <FormControl
          autoFocus
          type="text"
          value={code}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup controlId="password" bsSize="lg">
        <ControlLabel>Password</ControlLabel>
        <FormControl type="password" value={password} onChange={handleChange} />
      </FormGroup>
      <FormGroup controlId="confirmPassword" bsSize="lg">
        <ControlLabel>Confirm Password</ControlLabel>
        <FormControl
          type="password"
          value={confirmPassword}
          onChange={handleChange}
        />
      </FormGroup>
      <LoaderButton
        block
        bsSize="lg"
        disabled={disabled}
        type="submit"
        isLoading={loading}
        text="Login"
        loadingText="Logging in..."
      />
    </form>
  );
};
