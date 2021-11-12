import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
      <div>
        <div className="bg-dark">
          <Container className="pt-3">
            <Row>
              <Col md="6">
                <h3 className="display-5 fw-normal logo text-warning">
                  Drone Galaxy
                </h3>
                <p className="text-light pe-5 ">
                  Creativity is at the heart of every dream. Every idea, every
                  groundbreaking leap that changes our world starts with the
                  vision of talented creators. At Drone Galaxy, we give these creators
                  the tools they need to bring their ideas to life.
                </p>
              </Col>
              <Col md="3 ">
                <h3 className=" fw-normal logo text-light text-center">
                  Follow Us On
                </h3>

                <Row className="d-flex justify-content-center flex-column align-items-center text-center">
                  <Col md="3" className="my-2">
                    <a
                      href="https://www.linkedin.com/in/md-sabbir-hossain-1054/"
                      target="blank"
                      className="text-decoration-none fw-normal text-light"
                    >
                      <i className="mx-4 fab fa-linkedin fs-3"></i>
                    </a>
                  </Col>
                  <Col md="3" className="my-2">
                    <a
                      href="https://www.instagram.com/_muhammad_sabbir_hossain/"
                      target="blank"
                      className="text-decoration-none fw-normal text-light"
                    >
                      <i className="mx-4 fab fa-instagram-square fs-3"></i>
                    </a>
                  </Col>
                  <Col md="3" className="my-2">
                    <a
                      href="https://www.facebook.com/sabbir1054"
                      className="text-decoration-none fw-normal text-light"
                      target="blank"
                    >
                      <i className="mx-4 fab fa-facebook fs-3"></i>
                    </a>
                  </Col>
                  <Col md="3" className="my-2">
                    <a
                      href="https://twitter.com/Muhamma95959532"
                      target="blank"
                      className="text-decoration-none fw-normal text-light"
                    >
                      <i className="mx-4 fab fa-twitter fs-3"></i>
                    </a>
                  </Col>
                </Row>
              </Col>
              <Col md="3" className="text-center">
                <h3 className=" fw-normal logo text-light text-center">
                  Important Link
                </h3>
                <ul>
                  <li>
                    <NavLink to="/home" className=" fw-normal mx-3 text-light">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/explore"
                      className=" fw-normal mx-3 text-light"
                    >
                      Explore Our Galaxy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className=" fw-normal mx-3 text-light">
                      Login
                    </NavLink>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <footer className="py-2 " style={{backgroundColor:"black"}}>
          <p className="text-center text-white">
            All right reserved by Drone Galaxy © 2021-2025
          </p>
        </footer>
      </div>
    );
};

export default Footer;