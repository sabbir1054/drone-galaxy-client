import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AdminPanel.css'
import SideNav from './SideNav';
const AdminPanel = () => {
    return (
      
        <Row className='w-100 g-0' >
          <Col md="2" style={{ backgroundColor: "#212529" }}>
            <SideNav></SideNav>
          </Col>
          <Col>
            <div className="admin-bg">
              
            </div>
          </Col>
        </Row>
    
    );
};

export default AdminPanel;