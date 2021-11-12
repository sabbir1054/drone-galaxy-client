import React from 'react';
import { NavLink } from 'react-router-dom';
import PageBanner from '../HomePage/PageBanner/PageBanner';

const NoMatch = () => {
    return (
      <div className="text-center mb-5">
        <PageBanner text="Opps! Page Not Found"></PageBanner>
        <div className=" bg-light py-5">
          <h1 className="text-center text-dark py-5 fw-bolder display-1 ">404 </h1>
          <NavLink to="/home">
            <button className="btn btn-warning">Back To HomePage</button>
          </NavLink>
        </div>
      </div>
    );
};

export default NoMatch;