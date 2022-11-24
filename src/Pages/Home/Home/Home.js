import React from 'react';
import Ad from '../../Ad/Ad';
import Categories from '../../Categories/Categories';
import HomeBanner from '../HomeBanner/HomeBanner';


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Categories></Categories>
            <Ad></Ad>
        </div>
    );
};

export default Home;