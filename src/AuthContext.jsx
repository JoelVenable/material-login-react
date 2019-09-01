import React, { createContext, useState, useEffect } from "react";
import { Auth } from "aws-amplify";

export const AuthContext = createContext();

export const AuthProvider = ({ children, history }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authResolving, setAuthResolving] = useState(true);
  const [storedCredentials, setStoredCredentials] = useState(null);
  const [user, setUser] = useState(null);



  // useEffect does not accept an ASYNC function directly.
  useEffect(() => {
    (async () => {
      try {
        //  Gets the saved user information
        const userData = await Auth.currentSession();
        setUser(userData.idToken.payload.email);
        setIsAuthenticated(true);
        console.log("Made it to here...");
      }
      catch (e) {
        if (e !== "No current user") {
          console.log("Retrieval from session storage failed.  Error object follows: ", e);
          alert(e);
        }
      }
      setAuthResolving(false);
    })();
  }, []);



  const login = async (email, password) => {
    // returns the promise object.
    console.log("Login fired...");
    try {
      const loggedInUser = await Auth.signIn(email, password);
      console.log("Return from sign in: ", loggedInUser);
      setUser(loggedInUser);
      setIsAuthenticated(true);
    }
    catch (e) {
      console.log(e);
      alert(e.message);
    }
  }

  const signUp = async (newUser) => {
    setStoredCredentials(newUser);
    return await Auth.signUp(newUser)
  }

  const confirmSignUp = async code => {
    if (!storedCredentials) throw new Error("No credentials stored!");

    const { username, password } = storedCredentials;
    try {
      await Auth.confirmSignUp(username, code);
      await Auth.signIn(username, password);
      setStoredCredentials(null)
    }
    catch (e) {
      alert(e);
    }
  }


  //  These methods are just wrappers to keep all the AWS-Amplify 
  //  method calls in one place.
  const getPasswordRecoveryCode = async email => {
    return await Auth.forgotPassword(email);
  }

  const recoverPassword = async (email, code, password) => {
    return await Auth.forgotPasswordSubmit(email, code, password);
  }

  const changePassword = async (oldPassword, password) => {
    const currentUser = await Auth.currentAuthenticatedUser();
    return Auth.changePassword(
      currentUser,
      oldPassword,
      password
    );
  }


  const logout = async () => {
    await Auth.signOut();
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    status: { isAuthenticated, authResolving },
    actions: {
      login,
      signUp,
      logout,
      confirmSignUp,
      getPasswordRecoveryCode,
      recoverPassword,
      changePassword
    },
    getUser: Auth.currentAuthenticatedUser //method for the user to call
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

