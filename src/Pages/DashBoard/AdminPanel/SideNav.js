import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavLink } from 'react-router-dom';
const SideNav = () => {
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        handleShow();
    },[])
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
                  to="/makeAdmin"
                  className="text-decoration-none fw-normal my-3 text-light border-bottom"
                >
                  Make Admin
                </NavLink>
                <NavLink
                  to="/manageAllOrders"
                  className="text-decoration-none fw-normal my-3 text-light border-bottom"
                >
                  Manage All Orders
                </NavLink>
                <NavLink
                  to="/addProduct"
                  className="text-decoration-none fw-normal my-3 text-light border-bottom"
                >
                  Add Product
                </NavLink>
                <NavLink
                  to="/manageAllProducts"
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