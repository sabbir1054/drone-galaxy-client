import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Comment from './Comment'
const Comments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://radiant-savannah-67340.herokuapp.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
    return (
      <div className="bg-light">
        <h1 className="display-4 text-center py-5 fw-normal">
          Our Customers Feedback
        </h1>
        {comments.length ? (
          <div className="py-5 bg-light">
            <Container>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {comments.map((comment) => (
                  <Comment comment={comment} key={comment._id}></Comment>
                ))}
              </div>
            </Container>
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="status "></Spinner>
          </div>
        )}
      </div>
    );
};

export default Comments;
