import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import PageBanner from "../HomePage/PageBanner/PageBanner";
import Product from "./Product";

const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <PageBanner text="Our Drones Galaxy"></PageBanner>
      {products.length ? (
        <div className="py-5 bg-light">
          <Container>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {products.map((product) => (
                <Product product={product} key={product._id}></Product>
              ))}
            </div>
          </Container>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status "></Spinner>
        </div>
      )}
    </>
  );
};

export default Explore;
