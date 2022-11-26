import React from 'react';
import img from '../../../assets/home-images/img.webp';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const HomeFAQ = () => {
    return (
        <div className=' bg-gray-700 text-gray-700 pb-10'>
            <div className="text-center text-white text-3xl font-bold" style={{ 'font-family': 'cursive' }}>
                <p>__</p>
                <h2 className='m-3'>Sell to us</h2>
            </div>
            <div className=''>
                <div className="card bg-primary sm:mx-20 lg:mx-40 rounded-sm shadow-xl ">
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div className="card-body sm:w-[300px] md:w-[500px] lg:w-[550px] ">
                            <h2 className="font-lg bold text-3xl font-serif">Looking for a great reason to clean out your wardrobe & not feel guilty buying new bags?</h2>
                            <p className='font-mono'>Selling your bags gives you that extra incentive to finally clean out your wardrobe, which you may otherwise keep putting off.</p>
                            <p className='font-thin'>Our customers either don't have time to sell their clothes online, or have tried a few times without success, and just want a fast and fuss-free solution for quality bags that they simply don't use anymore.</p>
                            <div className='mt-5'>
                                <p className='uppercase text-2xl font-serif'>Sell now</p>
                                <div className="card-actions ">
                                    <Link to='/login'><button className=" flex justify-center items-center text-white text-xl font-bold ">Let's Go <IoIosArrowForward /> <IoIosArrowForward size={20} /></button></Link>
                                </div>

                            </div>
                        </div>
                        <div className='m-10'>
                            <img className='' src={img} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeFAQ;