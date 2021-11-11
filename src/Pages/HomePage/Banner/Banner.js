import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
      <div className=" banner-bg">
        <Container className='py-5'>
          <Row className=" py-5">
            <Col md="7">
              <h1 className="display-2 fw-normal text-white py-5">
                Aerial Photo graphy and Video graphy
                        </h1>
                        <NavLink to='/explore'>
                            <button className='btn btn-warning fw-bold text-dark py-3 px-4'> Click Here For Explore Our Galaxy </button>
                        </NavLink>
            </Col>
            <Col md="5"></Col>
          </Row>
        </Container>
      </div>
    );
};

export default Banner;