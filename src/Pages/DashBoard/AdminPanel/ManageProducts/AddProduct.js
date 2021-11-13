import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';
import SideNav from '../SideNav';

const AddProduct = () => {

    const {
        register,
        handleSubmit,
        reset,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      axios
        .post("https://radiant-savannah-67340.herokuapp.com/products", data)
        .then((res) => {
          alert("Your Product Added");
          reset();
        });
    };
    return (
      <Row className="w-100 g-0">
        <Col md="2" style={{ backgroundColor: "#212529" }}>
          <SideNav></SideNav>
        </Col>
        <Col>
          <div className="admin-bg">
            <h1 className="text-center text-light py-3">Add More Products</h1>
            <Container>
              <div>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column justify-content-center align-items-center'>
                  <input
                    className="w-75 my-3 py-2"
                    placeholder="Enter Your Product Name"
                    {...register("name")}
                  />{" "}
                  <br />
                  <input
                    className="w-75 my-3 py-2"
                    placeholder="Enter Your Product Description"
                    {...register("describe")}
                  />{" "}
                  <br />
                  <input
                    className="w-75 my-3 py-2"
                    placeholder="Enter Your Product Image Link"
                    {...register("imgUrl")}
                  />{" "}
                  <br />
                  <input
                    type="number"
                    className="w-75 my-3 py-2"
                    placeholder="Enter Your Product ratings"
                    {...register("rating", { max: 5 })}
                  />{" "}
                  <br />
                  <input
                    type="number"
                    className="w-75 my-3 py-2"
                    placeholder="Enter Your Product Price"
                    {...register("price")}
                  />{" "}
                  <br />
                  <input
                    type="submit"
                    value="Add Your Product"
                    className="btn btn-warning py-2 px-4 mb-3 fw-bold"
                  />
                </form>
              </div>
            </Container>
          </div>
        </Col>
      </Row>
    );
};

export default AddProduct;