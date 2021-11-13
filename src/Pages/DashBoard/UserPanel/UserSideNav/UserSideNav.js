import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const UserSideNav = () => {
    return (
      <>
        <h3 className="text-center text-warning pt-2 pb-2 my-4 px-2 fw-normal">
          User Panel
        </h3>
        <Navbar bg="dark" variant="dark" expand="md">
          <Container className="d-flex flex-column">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto d-flex flex-column align-items-center">
                <NavLink
                  to="/dashboard/myOrders"
                  className="text-decoration-none fw-normal my-3 text-light border-bottom"
                >
                  My Orders
                </NavLink>
                <NavLink
                  to="/dashboard/feedback"
                  className="text-decoration-none fw-normal my-3 text-light border-bottom"
                >
                 Add a FeedBack
                </NavLink>
                <NavLink
                  to="/dashboard/payment"
                  className="text-decoration-none fw-normal my-3 text-light border-bottom"
                >
                  Payment Procedure
                </NavLink>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default UserSideNav;