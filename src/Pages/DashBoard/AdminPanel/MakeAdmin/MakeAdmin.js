import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import SideNav from "../SideNav";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
              /> <br />
              <input
                type="submit"
                readOnly
                value="Create Admin"
                className="px-5 py-2 fw-bold btn btn-primary "
              />
            </form>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MakeAdmin;
