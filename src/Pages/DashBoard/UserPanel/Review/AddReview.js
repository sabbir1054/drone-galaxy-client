import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';
import UserSideNav from '../UserSideNav/UserSideNav';

const AddReview = () => {
  const {user} = useAuth();
  //handle submit form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //post a order
  const onSubmit = (data) => {
    axios
      .post("https://radiant-savannah-67340.herokuapp.com/comments", data)
      .then((res) => {
        alert("Your FeedBack Added");
        reset();
      });
  };
  return (
    <Row className="w-100 g-0">
      <Col md="2" style={{ backgroundColor: "#212529" }}>
        <UserSideNav></UserSideNav>
      </Col>
      <Col>
        <div className="admin-bg text-center">
          <h1 className="text-center text-warning  py-5">Add You FeedBack </h1>
          <Container>
            <form onSubmit={handleSubmit(onSubmit)} className="text-dark">
              <input
                className="w-75 my-3 py-2 text-dark"
                readOnly
                defaultValue={user.displayName}
                {...register("name")}
              />{" "}
              <br />
              <input
                className="w-75 my-3 py-2"
                readOnly
                defaultValue={user.email}
                {...register("email")}
              />{" "}
              <br />
              <input
                className="w-75 my-3 py-2"
                placeholder='Rating Us'
                type='number'
                {...register("rating", {max:5})}
              />{" "}
              <br />
              <textarea
                className="w-75  my-3 py-2"
                placeholder="Write your FeedBack"
                {...register("Comments")}
              />{" "}
              <br />
              <input
                type="submit"
                value="Send Your Feedback"
                className="btn btn-warning py-2 px-4 mb-3"
              />
            </form>
          </Container>
        </div>
      </Col>
    </Row>
  );
};

export default AddReview;