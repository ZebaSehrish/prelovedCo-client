import React from 'react';
import img1 from '../../../assets/home-images/carousel-1.webp';
import img2 from '../../../assets/home-images/img2.jpg';
import img3 from '../../../assets/home-images/img3.jpg';
import img4 from '../../../assets/home-images/img-4.webp';


const HomeBanner = () => {
    return (
        <div className='m-20'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("${img4}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Shop Now</h1>
                        <p className="mb-5 text-2xl font-medium ">Award-winning, sustainable boutique of non branded & designer preloved bags.</p>
                    </div>
                </div>
                {/* <div style={{ marginTop: "700px" }} className='flex w-56 justify-center'>
                <img className='w-full ' src={img1} />
                <img className='w-full ' src={img2} />
                <img className='w-full ' src={img3} />
                <img className='w-full ' src={img4} />
            </div> */}

            </div >
        </div>
    );
};

export default HomeBanner;