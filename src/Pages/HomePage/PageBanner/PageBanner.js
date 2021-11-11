import React from 'react';
import './PageBanner.css'
const PageBanner = (props) => {
    return (
        <div className='pageBanner d-flex align-items-center justify-content-center'>
            <h2 className="display-1 logo text-center text-white fw-bold ">{props.text}</h2>
        </div>
    );
};

export default PageBanner;