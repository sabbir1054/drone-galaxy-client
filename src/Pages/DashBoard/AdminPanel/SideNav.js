import React from 'react';
import { Container, Nav, Navbar,  } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
const SideNav = () => {
      
    return (
      <>
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
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default SideNav;