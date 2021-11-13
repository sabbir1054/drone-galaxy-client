import React from 'react';

const ManageAll = (props) => {
    const { email, name, productId, condition, _id } = props.order;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{productId}</td>
      <td className="fs-3 fw-bold text-warning">{condition}</td>
      <td>
        <button className="btn btn-success" onClick={props.update}>
          Approved
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={props.delete}>
          <i className="fas fa-trash-alt mx-2"></i>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default ManageAll;