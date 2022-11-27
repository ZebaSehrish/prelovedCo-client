import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs'
import { GiShoulderBag } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Category = ({ perCategory }) => {
    const { title, description, category } = perCategory;
    return (
        <div className="card card-compact bg-rose-100 shadow-lg rounded-sm text-center text-rose-500">
            <div className="m-5">
                <div className='flex justify-center items-center'>
                    <GiShoulderBag />
                    <h2 className=" text-3xl font-md" style={{ 'fontFamily': 'serif' }}>{title}</h2>
                </div>
                <p className='font-mono'>{description}</p>
                <div className="card-actions justify-center ">
                    <Link to={`/category/${category}`} ><button className="btn btn-link flex items-center text-gray-400 text-xl font-bold ">Check Out now<BsArrowRightCircle className='ml-2' /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;