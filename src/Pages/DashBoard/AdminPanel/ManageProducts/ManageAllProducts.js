import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import SideNav from '../SideNav';
import ManageProducts from './ManageProducts';

const ManageAllProducts = () => {
    
    const [products, setProducts] = useState([]);
 
    //load orders
    useEffect(() => {
      fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    //delete orders & update state
    const handleDelete = (deleteId) => {
      console.log(deleteId);
      fetch(`http://localhost:5000/products/${deleteId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Are you sure to delete product");
          const remainingProducts = products.filter(
            (product) => product._id !== deleteId
          );
          setProducts(remainingProducts);
        });
    };
    return (
      <Row className="w-100 g-0">
        <Col md="2" style={{ backgroundColor: "#212529" }}>
          <SideNav></SideNav>
        </Col>
        <Col>
          <div className="admin-bg">
            <h1 className="text-center text-light py-3">
              Manage Your Products
            </h1>
                    <Container>
                        <h3 className="text-center text-warning">Total Products:{products.length }</h3>
              <div className="py-5">
                <Table striped bordered hover responsive="lg" variant="dark">
                  <thead>
                    <tr>
                      <th>Product Id</th>
                      <th>Products Name</th>
                      <th>Price</th>
                      <th>Manage Order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <ManageProducts
                        product={product}
                        key={product._id}
                        delete={() => handleDelete(product._id)}
                      ></ManageProducts>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Container>
          </div>
        </Col>
      </Row>
    );
};

export default ManageAllProducts;