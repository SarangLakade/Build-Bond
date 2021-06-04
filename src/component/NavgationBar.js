import { Container, Button, Box, Fab } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Person from "@material-ui/icons/Person";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
const activeLink = {
  fontWeight: "bold",
  color: "#51B700",
  textDecoration: "none",
  fontFamily: "Jost",
};

const inActiveLink = {
  textDecoration: "none",
  fontFamily: "Jost",
  color: "black",
  fontSize: 20,
  marginRight: 5,
};
function NavigationBar() {
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  // console.log(user);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
    window.location.reload(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ backgroundColor: "#E5F4D9" }}>
      <Container maxWidth="lg">
        <Navbar expand="lg">
          <Navbar.Brand>
            <NavLink
              style={{
                color: "#51B700",
                fontFamily: "Jost",
                fontWeight: "bold",
                fontSize: 35,
                textDecoration: "none",
              }}
              exact
              to="/"
            >
              Logo
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <NavLink
                  exact
                  style={inActiveLink}
                  activeStyle={activeLink}
                  to="/"
                >
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  style={inActiveLink}
                  activeStyle={activeLink}
                  to="/aboutus"
                >
                  About Us
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  style={inActiveLink}
                  activeStyle={activeLink}
                  to="/service"
                >
                  Service
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  style={inActiveLink}
                  activeStyle={activeLink}
                  to="/blog"
                >
                  Blogs
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  style={inActiveLink}
                  activeStyle={activeLink}
                  to="/gallery"
                >
                  Gallery
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  style={inActiveLink}
                  activeStyle={activeLink}
                  to="/contactus"
                >
                  Contact us
                </NavLink>
              </Nav.Link>
            </Nav>
            <Box display="inline">
              {user ? (
                <>
                  <Avatar
                    alt={user.result.name}
                    src={user.result.imageUrl}
                    onClick={handleClick}
                  />

                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem
                      onClick={() => {
                        history.push("/Profile");
                        handleClose();
                      }}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        history.push("/Appoinment");
                        handleClose();
                      }}
                    >
                      Book Appointment
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <GoogleLogout
                        clientId="610964004414-bmik2ojfuorgsr40oalrudj6n3ed3jni.apps.googleusercontent.com"
                        render={(renderProps) => (
                          <Button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                          >
                            Log Out
                          </Button>
                        )}
                        // buttonText="Logout"
                        onLogoutSuccess={logout}
                      ></GoogleLogout>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Button
                  size="large"
                  onClick={() => {
                    history.push("/login");
                  }}
                  variant="contained"
                  style={{ borderRadius: 50, color: "#fff", marginRight: 10 }}
                  color="primary"
                >
                  Log In
                </Button>
              )}
            </Box>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavigationBar;
