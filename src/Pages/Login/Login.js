import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import PageBanner from "../HomePage/PageBanner/PageBanner";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const { loginWithEmailPassword, user, setUser, setError, setIsLoading } =
    useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginWithEmailPassword(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        setError("");
        
          history.push(redirect_uri);
        
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  
  return (
    <div>
      <PageBanner text="Login here"></PageBanner>
      <Container className=" mt-5 d-flex justify-content-center text-center py-5">
        <div className="w-75">
          <form onSubmit={handleSubmit(onSubmit)}>
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
              value="Submit"
              className="w-50 py-2 btn btn-warning "
            />
          </form>

          <br />
          <Link to="/register">New Member? register here</Link>
        </div>
      </Container>
    </div>
  );
};

export default Login;
