import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import { Typography } from '@material-ui/core';
import { LoaderButton } from './LoaderButton';
import "./Settings.css";

export const SettingsPage = () => {



  return (
    <div className="Settings">
      <Typography align='center' variant='h1'>Welcome to Scratch</Typography>
      <LinkContainer to="/settings/email">
        <LoaderButton block bsSize="lg" text="Change Email" />
      </LinkContainer>
      <LinkContainer to="/settings/password">
        <LoaderButton block bsSize="lg" text="Change Password" />
      </LinkContainer>
    </div>
  )
}