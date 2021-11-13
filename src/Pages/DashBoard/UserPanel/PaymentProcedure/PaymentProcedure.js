import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UserSideNav from '../UserSideNav/UserSideNav';

const PaymentProcedure = () => {
    return (
      <Row className="w-100 g-0">
        <Col md="2" style={{ backgroundColor: "#212529" }}>
          <UserSideNav></UserSideNav>
        </Col>
        <Col>
          <div className="admin-bg text-center">
           
            <h1 className="text-center text-warning  py-5">Payment System under construction </h1>
            <NavLink to='/'>
                <button className='btn btn-primary'> Back to homepage</button>
            </NavLink>
        </div>
        </Col>
      </Row>
    );
};

export default PaymentProcedure;