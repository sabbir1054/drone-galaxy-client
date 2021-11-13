import React from 'react';
import { Col, Row } from 'react-bootstrap';
import UserSideNav from './UserSideNav/UserSideNav';

const UserPanel = () => {
    return (
      <Row className="w-100 g-0">
        <Col md="2" style={{ backgroundColor: "#212529" }}>
          <UserSideNav></UserSideNav>
        </Col>
        <Col>
          <div className="admin-bg">
            <div>
              <p className="d-flex justify-content-center align-items-center text-warning pt-5 fs-5">
                Choose your desired option from sidebar
              </p>
            </div>
          </div>
        </Col>
      </Row>
    );
};

export default UserPanel;