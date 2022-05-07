import React from 'react';
import Banner from '../Banner/Banner';
import Extra from '../Extra/Extra';
import Items from '../Items/Items';
import Teams from '../Teams/Teams';

const Home = () => {
    return (
        <div className='bg'>
            <Banner></Banner>
            <Items></Items>
            <Extra></Extra>
            <Teams></Teams>
        </div>
    );
};

export default Home;