import React from 'react';
import { Container, Nav, Navbar,  } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const SideNav = () => {
    const { logOut } = useAuth();
      
    return (
      <>
        <NavLink to="/" className="text-decoration-none fw-normal  text-white">
          <img
            src="https://i.ibb.co/J5kQ0WD/Logo-2.png"
            width="45"
            className="mx-2"
            alt=""
          />
          Drone Galaxy
        </NavLink>
        <h3 className="text-center text-warning pt-2 pb-2 my-4 px-2 fw-normal">
          Admin Panel
        </h3>
        <Navbar bg="dark" variant="dark" expand="md">
          <Container className="d-flex flex-column">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto d-flex flex-column align-items-center">
                <NavLink
                  to="/dashboard/makeAdmin"
                  className="text-decoration-none fw-normal my-3 text-light border-bottom"
                >
                  Make Admin
                </NavLink>
                <NavLink
                  to="/dashboard/manageAllOrders"
                  className="text-decoration-none fw-normal my-3 text-light border-bottom"
                >
                  Manage All Orders
                </NavLink>
                <NavLink
                  to="/dashboard/addProduct"
                  className="text-decoration-none fw-normal my-3 text-light border-bottom"
                >
                  Add Product
                </NavLink>
                <NavLink
                  to="/dashboard/manageAllProducts"
                  className="text-decoration-none fw-normal my-3 text-light border-bottom"
                >
                  Manage All Products
                </NavLink>
                <NavLink to="/home">
                  <button className="btn btn-primary my-3">Back To HomePage</button>
                </NavLink>
                <NavLink to="/">
                  <button className="btn btn-warning mx-1" onClick={logOut}>
                    <i className="fas fa-sign-in-alt"></i> Log Out
                  </button>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default SideNav;