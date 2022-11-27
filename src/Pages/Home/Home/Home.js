import React from 'react';
import Categories from '../../Categories/Categories';
import Ad from '../Ad/Ad';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeFAQ from '../HomeFAQ/HomeFAQ';


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Categories></Categories>
            <Ad></Ad>
            <HomeFAQ></HomeFAQ>
        </div>
    );
};

export default Home;