import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const { userInfo } = userState;

  const logoutHandler = () => {
    dispatch(logoutAction());
  };
  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
        className="header-nav"
      >
        <Link to="/">
          <Navbar.Brand>ProShop</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {userInfo ? (
              <Link
                to="/dashboard"
                className="mr-3"
                style={{ marginTop: "10px" }}
              >
                <i className="fas fa-tachometer-alt pr-1"></i> Dashboard
              </Link>
            ) : null}
            <Link to="/cart" className="mr-3" style={{ marginTop: "10px" }}>
              <i className="fas fa-shopping-cart  pr-1"></i> Cart
            </Link>
            <Link to="/github" className="mr-3" style={{ marginTop: "10px" }}>
              <i className="fas fa-shopping-cart  pr-1"></i> Github
            </Link>

            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <Link to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </Link>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link to="/login" style={{ marginTop: "10px" }}>
                <i className="fas fa-user pr-1"></i>Sign In
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
