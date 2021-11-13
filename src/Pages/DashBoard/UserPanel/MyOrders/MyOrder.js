import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import UserSideNav from '../UserSideNav/UserSideNav';
import MySingleOrder from './MySingleOrder';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    //load my orders
    useEffect(() => {
      fetch(`http://localhost:5000/userOrders/${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, []);
    //delete my orders & update state
    const handleDelete = (deleteId) => {
      console.log(deleteId);
      fetch(`http://localhost:5000/orders/${deleteId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Are you sure to delete order");
          console.log(data);
          const remainingOrders = orders.filter(
            (order) => order._id !== deleteId
          );
          setOrders(remainingOrders);
        });
    };
    return (
      <Row className="w-100 g-0">
        <Col md="2" style={{ backgroundColor: "#212529" }}>
          <UserSideNav></UserSideNav>
        </Col>
        <Col>
          <div className="admin-bg text-center">
            <Container>
              <div className="py-5">
                <Table striped bordered hover responsive="lg" variant='light'>
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
                      <MySingleOrder
                        order={order}
                        key={order._id}
                        delete={() => handleDelete(order._id)}
                      ></MySingleOrder>
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

export default MyOrder;