import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs'
import { GiShoulderBag } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { category_id, title, description } = category;
    return (
        <div className="card bg-primary shadow-xl text-center text-rose-500">
            <div className="m-10">
                <div className='flex justify-center items-center'>
                    <GiShoulderBag />
                    <h2 className=" text-3xl font-bold">{title}</h2>
                </div>
                <p className='font-mono'>{description}</p>
                <div className="card-actions justify-center ">
                    <Link to={`category/${category_id}`}><button className="btn btn-link flex items-center text-white text-xl font-bold ">Check Out now<BsArrowRightCircle className='ml-2' /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;