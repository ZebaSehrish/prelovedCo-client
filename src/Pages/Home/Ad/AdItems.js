import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { MdReport } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AdItems = ({ adItem }) => {
    const { category, img, title, description, advertisement } = adItem;
    return (
        <div>
            {
                advertisement === true &&
                <div className=''>
                    <div className="card bg-gray-200 sm:mx-20 lg:mx-40 rounded-sm shadow-xl ">
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <div className='m-5'>
                                <img className='' src={img} alt="" />
                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <CiHeart size={30} />
                                        <MdReport size={30} />
                                    </div>
                                    <div>
                                        <Link to={`/category/${category}`}><button className='btn btn-outline btn-xs rounded-sm'>Explore</button></Link>

                                    </div>
                                </div>
                            </div>
                            <div className="card-body sm:w-[300px] md:w-[500px] lg:w-[550px] pe-5 ">
                                <h2 className="font-lg bold text-3xl font-serif">{title}</h2>
                                <p className='font-mono'>{description}</p>
                            </div>
                        </div>

                    </div>

                </div>

            }

        </div >
    );
};

export default AdItems;