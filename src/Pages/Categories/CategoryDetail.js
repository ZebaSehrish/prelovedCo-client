import React from 'react';
import { Link } from 'react-router-dom';
import { BsPinMap } from 'react-icons/bs';
import { BiHeart } from 'react-icons/bi';
import { BsExclamation } from 'react-icons/bs';

const CategoryDetail = ({ categoryDetail, setBookItem }) => {
    const { title, img, original_price, resell_price, year, date, location, seller, verified, status } = categoryDetail;
    return (
        <div className="">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="w-1/3 shadow-2xl" alt='' />
                <div className='w-1/2'>
                    <div className="bg-base-100 shadow-xl">
                        <div className="card-body font-mono text-gray-600">
                            <h2 className=" text-3xl font-bold">{title}</h2>
                            <p>Original Price:BDT.{original_price} </p>
                            <p>Resell Price:BDT.{resell_price}</p>
                            <p>Year of Purchase: {year}</p>
                            <div className='flex '>
                                <BsPinMap />
                                <p className='ml-2'>  {location}</p>
                            </div>

                            <ul> <p>Posted on: {date}</p></ul>

                        </div>
                    </div>
                    <div className='flex justify-end font-mono'>
                        <p className='mr-2'>by {seller}</p>
                        <p>{verified}</p>
                    </div>

                    <div className="card-actions w-full mb-3">
                        {
                            !status ?
                                <label htmlFor='booking-modal' className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white uppercase w-full'
                                    onClick={() => setBookItem(categoryDetail)} >Book Now</label>
                                :
                                <label className='btn btn-primary bg-gradient-to-r from-primary to-secondary btn-disabled text-white uppercase w-full'
                                >Booked</label>
                        }
                        <button className="btn btn-outline text-primary w-full"> <BiHeart />Add to your wishlist</button>
                        <button className="btn btn-outline text-primary w-full"><BsExclamation />Report this Listing</button>
                    </div>
                </div>
            </div>
            <div className='divider'></div>

        </div>
    );
};

export default CategoryDetail;