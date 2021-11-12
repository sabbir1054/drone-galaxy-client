import React from 'react';
import { NavLink } from 'react-router-dom';

const Payment = () => {
    return (
        <div className='text-center' style={{height:"80vh"}}>
            <h1 className="text-center text-danger mt-5 py-5">Payment System under construction </h1>
            <NavLink to='/'>
                <button className='btn btn-primary'> Back to homepage</button>
            </NavLink>
        </div>
    );
};

export default Payment;