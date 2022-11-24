import React from 'react';
import { MdRadioButtonUnchecked } from 'react-icons/md';
import img1 from '../../../assets/home-images/carousel-1.webp';
import img2 from '../../../assets/home-images/img2.jpg';
import img3 from '../../../assets/home-images/img3.jpg';
import img4 from '../../../assets/home-images/img-4.webp';

const HomeSlider = () => {
    return (
        <div className='m-20'>
            <div className="carousel">
                <div id="item1" className="carousel-item w-full">
                    <img className='w-full ' src={img4} />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img className='w-full ' src={img1} />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img className='w-full ' src={img3} />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img className='w-full ' src={img2} />
                </div>
            </div>

            <div className=" flex justify-end w-full -mt-16">
                <a href="#item1" className="btn btn-ghost"><MdRadioButtonUnchecked /></a>
                <a href="#item2" className="btn btn-ghost"><MdRadioButtonUnchecked /></a>
                <a href="#item3" className="btn btn-ghost"><MdRadioButtonUnchecked /></a>
                <a href="#item4" className="btn btn-ghost"><MdRadioButtonUnchecked /></a>
            </div>
        </div>
    );
};

export default HomeSlider;