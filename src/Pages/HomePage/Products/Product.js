import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { imgUrl, name, price, describe, _id } = props.product;
  return (
    <div className="col">
      <div className="card">
        <img src={imgUrl} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{describe}</p>
          <p className="fs-3 text-center text-primary fw-bold">
            Price:${price}
          </p>
          <div className="text-center">
            <Link to={`/placeOrder/${_id}`}>
              <button className="btn btn-warning px-5">
                <i className="mx-2 fas fa-shopping-cart"></i>Buy now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
