import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import SideNav from "../SideNav";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  //update order condition
  const handleUpdate = (emailId) => {
    fetch(`https://radiant-savannah-67340.herokuapp.com/users/${emailId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch("https://radiant-savannah-67340.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleUpdate(data.email);
    alert('Made A Admin done');
    reset();
  };

  return (
    <Row className="w-100 g-0">
      <Col md="2" style={{ backgroundColor: "#212529" }}>
        <SideNav></SideNav>
      </Col>
      <Col>
        <div className="admin-bg">
          <h1 className="text-center text-light py-3">Make a New Admin</h1>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="d-flex justify-content-center flex-column align-items-center mt-5"
            >
              <input
                placeholder="Enter Email For Make Admin"
                {...register("email")}
                className="w-50 py-2"
              />{" "}
              <br />
              <input
                type="submit"
                readOnly
                value="Create Admin"
                className="px-5 py-2 fw-bold btn btn-primary my-2"
              />
            </form>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MakeAdmin;
