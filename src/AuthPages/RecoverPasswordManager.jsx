import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { RecoverGetEmailForm } from './RecoverGetEmailForm';
import { RecoverSuccessMessage } from '../components/AuthPages/RecoverSuccessMessage';
import { RecoverCreateNewPassword } from './RecoverCreateNewPassword';



export const RecoverPasswordManager = withRouter(
  ({ history }) => {
    const { actions } = useContext(AuthContext); const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");

    const getCode = async (sentEmail) => {
      try {
        setEmail(sentEmail)
        await actions.getPasswordRecoveryCode(sentEmail);
        setStep(2);
      }
      catch (e) {
        alert(e.message);
      }
    };

    const createNewPassword = async (code, password) => {
      await actions.recoverPassword(email, code, password);
      setStep(3);
    };


    switch (step) {
      case 1:
        return <RecoverGetEmailForm getCode={getCode} />
      case 2:
        return <RecoverCreateNewPassword createNewPassword={createNewPassword} />
      case 3:
        return <RecoverSuccessMessage />
      default:
        return null;
    }
  });