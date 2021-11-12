import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import PageBanner from "../HomePage/PageBanner/PageBanner";

const Register = () => {
  const history = useHistory();
  const { registerNewUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
    registerNewUser(data.name, data.email, data.password);
    reset();
    history.push("/");
  };
  return (
    <div>
      <PageBanner text="Register Here"></PageBanner>
      <Container className=" mt-5 d-flex justify-content-center text-center py-5">
        <div className="w-75">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Enter Your name"
              {...register("name")}
              className="w-75 py-2"
            />
            <br /> <br />
            <input
              placeholder="Enter Your Email"
              {...register("email")}
              className="w-75 py-2"
            />
            <br /> <br />
            <input
              placeholder="Enter Your Password"
              type="password"
              {...register("password", { required: true })}
              className="w-75 py-2"
            />
            <br /> <br />
            <input
              type="submit"
              readOnly
              value="Register"
              className="w-50 py-2 btn btn-warning "
            />
          </form>

          <br />
          <Link to="/login">Already Member?Login here</Link>
        </div>
      </Container>
    </div>
  );
};

export default Register;
