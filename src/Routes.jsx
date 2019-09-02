import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { Login } from "./AuthPages/Login";
import { SignUp } from "./AuthPages/SignUp";
import { RecoverPasswordManager } from "./AuthPages/RecoverPasswordManager";
import { SettingsPage } from "./components/SettingsPage";
import { AuthenticatedRoute } from "./AuthenticatedRoute";
import { ChangePasswordForm } from "./components/AuthPages/ChangePasswordForm";

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/recover" exact component={RecoverPasswordManager} />
    <AuthenticatedRoute path="/settings" exact component={SettingsPage} />
    <AuthenticatedRoute path="/settings/password" exact component={ChangePasswordForm} />
    <Route component={NotFound} />
  </Switch>
);
