import React from 'react';
import Banner from '../Banner/Banner';
import GetUpdate from '../GetUpdate/GetUpdate';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Products></Products>
            <GetUpdate></GetUpdate>
        </>
    );
};

export default Home;