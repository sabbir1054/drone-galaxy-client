import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./GetUpdate.css";
const GetUpdate = () => {
  return (
    <div className="get-bg  mb-2">
      <h1 className="display-4 fw-normal text-light text-center mb-4">
        Get the Latest News and Updates
      </h1>
      <div>
        <Container className=" w-75">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <br />
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Topics of your news letter"
              />
            </Form.Group>
            <br />
            <div className='text-center'>
              {" "}
              <button className="btn btn-primary px-5" type="submit">
                Send
              </button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default GetUpdate;
