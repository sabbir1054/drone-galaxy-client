import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";

const Comment = (props) => {
  const { name, rating, Comments } = props.comment;
  return (
    <Col>
      <Card varient="light">
        <Card.Header>
          <h5 className="text-primary">
            <i className="fas fa-user me-3"></i>
            {name}
          </h5>{" "}
        </Card.Header>
        <Card.Body>
          <Card.Title> </Card.Title>
          <Card.Text>
            <i className="fas fa-quote-left"></i>
            <br />
            {Comments}
            <p className="text-end">
              <i className="fas fa-quote-right"></i>
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <p className="card-text">
            Rating:{" "}
            <Rating
              emptySymbol="fa fa-star-o fa"
              fullSymbol="fa fa-star fa"
              initialRating={rating}
              fractions={10}
              readonly
              style={{ color: "goldenrod" }}
            />
          </p>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Comment;
