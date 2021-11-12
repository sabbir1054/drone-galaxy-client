import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import SideNav from '../SideNav';
import ManageAll from './ManageAll';

const ManageAllOrders = () => {
    // const [orders, setOrders] = useState([]);
    // useEffect(() => {
    //   fetch("http://localhost:5000/users")
    //     .then((res) => res.json())
    //     .then((data) => setOrders(data));
    // }, []);
    const [orders, setOrders] = useState([]);
    //update order condition
    const handleUpdate = (updateId) => {
      fetch(`http://localhost:5000/orders/${updateId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orders),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    };
    //load orders
    useEffect(() => {
      fetch("http://localhost:5000/orders")
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, [handleUpdate]);
    //delete orders & update state
    const handleDelete = (deleteId) => {
      console.log(deleteId);
      fetch(`http://localhost:5000/orders/${deleteId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Are you sure to delete order");
          const remainingOrders = orders.filter(
            (order) => order._id !== deleteId
          );
          setOrders(remainingOrders);
        });
    };
    return (
      <Row className="w-100 g-0">
        <Col md="2" style={{ backgroundColor: "#212529" }}>
          <SideNav></SideNav>
        </Col>
        <Col>
          <div className="admin-bg">
            <h1 className="text-center text-light py-3">Manage Your All Customers Order</h1>
            <Container>
              <div className="py-5">
                <Table striped bordered hover responsive="lg" variant="dark">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Product Id</th>
                      <th>Order Condition</th>
                      <th>Manage Order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <ManageAll
                        order={order}
                        key={order._id}
                        delete={() => handleDelete(order._id)}
                        update={() => handleUpdate(order._id)}
                      ></ManageAll>
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

export default ManageAllOrders;