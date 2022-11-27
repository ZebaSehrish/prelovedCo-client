import React, { useEffect, useState } from 'react';
import AdItems from './AdItems';

const Ad = () => {
    const [ad, setAd] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/categoryDetails`)
            .then(res => res.json())
            .then(data => setAd(data))
    }, [])

    return (
        <div className=' text-gray-700 pb-10 m-5 lg:m-20'>
            <div className="text-center text-3xl font-bold" style={{ 'font-family': 'cursive' }}>
                <p>__</p>
            </div>
            <div>
                <div className='grid gap-3 grid-cols-1'>
                    {
                        ad.map(adItem => <AdItems
                            key={adItem._id}
                            adItem={adItem}
                        ></AdItems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Ad;