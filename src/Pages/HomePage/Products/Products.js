import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("https://radiant-savannah-67340.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
        <div className="bg-light">
            <h3 className="text-dark pt-4  display-6 fw-normal text-center">Our Drones Collection</h3>
        {products.length ? (
          <div className="py-5  bg-light">
            <Container>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.slice(0, 6).map((product) => (
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
        <div className="text-center mb-4">
          <NavLink to="/explore">
            <button className="btn btn-primary px-5 py-2">
              Explore More Drones
            </button>
          </NavLink>
        </div>
      </div>
    );
};

export default Products;