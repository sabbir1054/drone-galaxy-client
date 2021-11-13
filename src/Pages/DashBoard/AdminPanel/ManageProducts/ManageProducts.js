import React from 'react';

const ManageProducts = (props) => {
      const {  name, price, _id  } = props.product;
    return (
      <tr>
        <td>{_id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>
          <button className="btn btn-danger" onClick={props.delete}>
            <i className="fas fa-trash-alt mx-2"></i>
            Delete
          </button>
        </td>
      </tr>
    );
};

export default ManageProducts;