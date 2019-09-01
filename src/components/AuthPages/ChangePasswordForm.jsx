import React, { useState, useContext, useEffect } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { LoaderButton } from '../LoaderButton';
import './ChangePassword.css';
import { AuthContext } from '../../AuthContext';
import { withRouter } from 'react-router-dom';

export const ChangePasswordForm = withRouter(({ history }) => {
  const { actions } = useContext(AuthContext);


  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);


  const validateForm = () => (
    oldPassword.length > 0 &&
    password.length > 0 &&
    password === confirmPassword &&
    oldPassword !== password
  );

  useEffect(() => {
    setDisabled(!validateForm());
  }, [oldPassword, password, confirmPassword, validateForm])



  const handleChange = e => {
    const { id, value } = e.target;
    if (id === "password") setPassword(value);
    if (id === "oldPassword") setOldPassword(value);
    if (id === "confirmPassword") setConfirmPassword(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await actions.changePassword(oldPassword, password)
      history.push("/settings");
    }
    catch (e) {
      alert(e.message);
      setLoading(false);
    }
  }


  return (
    <div className="ChangePassword">
      <form onSubmit={handleSubmit}>
        <FormGroup bsSize="lg" controlId="oldPassword"        >
          <ControlLabel>Old Password</ControlLabel>
          <FormControl type="password" onChange={handleChange}
            value={oldPassword} />
        </FormGroup>
        <hr />
        <FormGroup bsSize="lg" controlId="password"        >
          <ControlLabel>New Password</ControlLabel>
          <FormControl type="password" onChange={handleChange}
            value={password} />
        </FormGroup>
        <FormGroup bsSize="lg" controlId="confirmPassword"        >
          <ControlLabel>Confirm New Password</ControlLabel>
          <FormControl type="password" onChange={handleChange}
            value={confirmPassword} />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="lg"
          text="Change Password"
          loadingText="Changing..."
          disabled={disabled}
          isLoading={loading}
        />
      </form>
    </div>
  )

});