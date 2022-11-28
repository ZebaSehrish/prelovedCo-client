import React, { useContext } from 'react';
import { BsPinMap } from 'react-icons/bs';
import { BiHeart } from 'react-icons/bi';
import { BsExclamation } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import usePayment from '../../hooks/usePayment';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';


const CategoryDetail = ({ categoryDetail, setBookItem }) => {
    const [isPaid] = usePayment(CategoryDetail._id);
    const { user } = useContext(AuthContext);
    const { _id, title, img, category, original_price, resell_price, year, date, location, seller, verified } = categoryDetail;
    const navigate = useNavigate();

    const handleWishlist = _id => {
        const wishlist = {
            img,
            bag: title,
            category,
            product_id: _id,
            price: resell_price,
            email: user?.email
        }
        fetch('https://preloved-co-server.vercel.app/wishlists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(wishlist)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(`Added to wishlist`);
                navigate('/dashboard/myOrders')
            })
    }

    return (
        <div>
            {
                !isPaid &&
                <div className="">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={img} className="lg:w-1/3 shadow-2xl" alt='' />
                        <div className='lg:w-1/2'>
                            <div className="bg-base-100 shadow-xl">
                                <div className="card-body font-mono text-gray-600">
                                    <h2 className=" text-3xl font-bold">{title}</h2>
                                    <p>Original Price:${original_price} </p>
                                    <p>Resell Price:${resell_price}</p>
                                    <p>Year of Purchase: {year}</p>
                                    <div className='flex '>
                                        <BsPinMap />
                                        <p className='ml-2'>  {location}</p>
                                    </div>

                                    <ul> <p>Posted on: {date}</p></ul>

                                </div>
                            </div>
                            <div className='flex justify-end items-center font-mono m-3'>
                                <p className='mr-2'>by {seller}</p>
                                <p className='text-blue-500'>
                                    {
                                        verified === 'yes' &&
                                        <GoVerified />
                                    }
                                </p>
                            </div>

                            <div className="card-actions w-full mb-3">
                                <label htmlFor='booking-modal' className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white uppercase w-full'
                                    onClick={() => setBookItem(categoryDetail)} >Book Now</label>
                                <button onClick={() => handleWishlist(_id)} className="btn btn-outline text-primary w-full"> <BiHeart />Add to your wishlist</button>
                                <button className="btn btn-outline text-primary w-full"><BsExclamation />Report this Listing</button>
                            </div>
                        </div>
                    </div>
                    <div className='divider'></div>


                </div>
            }
        </div>
    );
};

export default CategoryDetail;