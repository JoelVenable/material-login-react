import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { SignUpForm } from "./SignUpForm";
import { ConfirmationForm } from "./ConfirmationForm";
import { WelcomeContainer } from "../components/WelcomeContainer";

export const SignUp = () => {
  const { actions } = useContext(AuthContext);
  const [step, setStep] = useState(1);

  const handleSubmit = (username, password) => {
    return actions.signUp({ username, password })
      .then(() => setStep(2))
      .catch(alert);
  };

  const handleConfirm = code => {
    return actions.confirmSignUp(code)
      .catch(alert);
  };

  return (
    <WelcomeContainer>
      {step === 1 ? (
        <SignUpForm handleSubmit={handleSubmit} />
      ) : (
          <ConfirmationForm handleConfirm={handleConfirm} />
        )}


    </WelcomeContainer>
  );
};
