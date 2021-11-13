import React from 'react';
import { Spinner } from 'react-bootstrap';

const MySingleOrder = (props) => {
    const { email, name, productId, condition } = props.order;
    return email ? (
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{productId}</td>
        <td className="fs-3 fw-bold text-primary">{condition}</td>
        <td>
          <button className="btn btn-danger" onClick={props.delete}>
            <i className="fas fa-trash-alt mx-2"></i>
            Cancel Order
          </button>
        </td>
      </tr>
    ) : (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status "></Spinner>
      </div>
    );
};

export default MySingleOrder;