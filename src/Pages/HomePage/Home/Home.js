import React from 'react';
import Banner from '../Banner/Banner';
import Comments from '../Comments/Comments';
import GetUpdate from '../GetUpdate/GetUpdate';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Products></Products>
            <GetUpdate></GetUpdate>
            <Comments></Comments>
        </>
    );
};

export default Home;