import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <NavLink to="/" className="text-decoration-none fw-normal ">
            <Navbar.Brand>
              <img src="https://i.ibb.co/J5kQ0WD/Logo-2.png" width='45' className='mx-2' alt="" />
              Drone Galaxy
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink
                to="/home"
                className="text-decoration-none fw-normal mx-3 text-light"
              >
                Home
              </NavLink>
              <NavLink
                to="/home"
                className="text-decoration-none fw-normal mx-3 text-light"
              >
                Explore Our Galaxy
              </NavLink>

              {/* <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;