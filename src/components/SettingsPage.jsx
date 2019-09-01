import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { LoaderButton } from './LoaderButton';
import "./Settings.css";



export const SettingsPage = () => {



  return (
    <div className="Settings">
      <LinkContainer to="/settings/email">
        <LoaderButton block bsSize="lg" text="Change Email" />
      </LinkContainer>
      <LinkContainer to="/settings/password">
        <LoaderButton block bsSize="lg" text="Change Password" />
      </LinkContainer>
    </div>
  )
}