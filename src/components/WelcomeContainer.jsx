import React from 'react';
import { Container } from '@material-ui/core';
import { WelcomeHeader } from './WelcomeHeader';

const style = {}

export const WelcomeContainer = ({ children }) => {


  return (
    <div style={style}>
      <div>
        <WelcomeHeader />
        <Container maxWidth="xs" style={{ marginTop: '2rem' }}>
          {children}
        </Container>

      </div>
    </div>
  )
}