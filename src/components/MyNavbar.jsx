import React, { useContext } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { AuthContext } from "../AuthContext";

export const MyNavbar = () => {
  const { status: { isAuthenticated }, actions: { logout } } = useContext(AuthContext);

  return (
    <Navbar fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Scratch</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          {isAuthenticated ? (
            <>
              <LinkContainer to="/settings">
                <NavItem>Settings</NavItem>
              </LinkContainer>
              <NavItem onClick={logout}>Logout</NavItem>
            </>
          ) : (
              <>
                <LinkContainer to="/signup">
                  <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
              </>
            )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
