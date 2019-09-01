import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthContext';


export const AuthenticatedRoute = (props) => {
  const { status: { isAuthenticated, authResolving } } = useContext(AuthContext);

  if (authResolving) return (
    <>
    </>
  );
  return isAuthenticated ? (
    <Route {...props} />
  ) : <Redirect to="/login" />
};

// TODO:  Capture desired endpoint and redirect on login.
