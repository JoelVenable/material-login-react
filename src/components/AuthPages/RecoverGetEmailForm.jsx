import React, { useState } from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';
import { LoaderButton } from '../LoaderButton';
import { validate } from '../../helpers/emailValidator';



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
      <h3>Recover your password...</h3>
      <hr />
      <p>Please input your account email address <br />
        and we'll send you a recovery code.
    </p>
      <hr />

      <form onSubmit={handleGetCodeClick}>
        <FormGroup bsSize="lg" controlId="email">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={handleChange} />

        </FormGroup>
        <LoaderButton
          block
          className="btn-primary"
          type="submit"
          bsSize="lg"
          loadingText="Sending..."
          text="Send Confirmation"
          isLoading={loading}
          disabled={disabled}
        />
      </form>
    </>
  )
}