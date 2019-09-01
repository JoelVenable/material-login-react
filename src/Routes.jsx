import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { Login } from "./components/AuthPages/Login";
import { SignUp } from "./components/AuthPages/SignUp";
import { RecoverPasswordManager } from "./components/AuthPages/RecoverPasswordManager";
import { SettingsPage } from "./components/SettingsPage";
import { AuthenticatedRoute } from "./AuthenticatedRoute";
import { NewNote } from "./components/NewNote";
import { ChangePasswordForm } from "./components/AuthPages/ChangePasswordForm";

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/recover" exact component={RecoverPasswordManager} />
    <AuthenticatedRoute path="/notes/add" exact component={NewNote} />
    <AuthenticatedRoute path="/settings" exact component={SettingsPage} />
    <AuthenticatedRoute path="/settings/password" exact component={ChangePasswordForm} />
    <Route component={NotFound} />
  </Switch>
);
