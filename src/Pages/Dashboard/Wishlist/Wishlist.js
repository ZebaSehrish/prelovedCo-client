import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Wishlist = () => {

    const { user } = useContext(AuthContext);

    const url = `https://preloved-co-server.vercel.app/wishlists?email=${user?.email}`;

    const { data: wishlists = [] } = useQuery({
        queryKey: ['wishlists', user?.email],
        queryFn: async () => {
            const res = await fetch(url,
                {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
            const data = await res.json();
            return data;
        }
    })

    return (

        <div>
            {
                wishlists.length !== 0 ?
                    < div className='mt-20' >
                        <h3 className="text-4xl text-center mb-5" style={{ 'fontFamily': 'serif' }}>My Orders</h3>
                        <div className="overflow-x-auto flex justify-center align-center">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className='bg-secondary'></th>
                                        <th className='bg-secondary'>Name</th>
                                        <th className='bg-secondary'>Item</th>
                                        <th className='bg-secondary'>Price</th>
                                        <th className='bg-secondary'>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        wishlists &&
                                        wishlists?.map((wishlist, i) => <tr key={wishlist._id}>
                                            <th className='bg-primary'>{i + 1}</th>
                                            <td className='bg-primary'><img className='w-20 squared' src={wishlist.img} alt="" /></td>
                                            <td className='bg-primary'>{wishlist.bag}</td>
                                            <td className='bg-primary'>$ {wishlist.price}</td>
                                            <td className='bg-primary'>
                                                <Link to={`/category/${wishlist.category}`}><button className='btn btn-xs btn-outline'>Buy Now</button></Link>
                                            </td>

                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div >

                    :
                    <div className='flex justify-center items-center'>
                        <h3 className="text-2xl lg:text-4xl text-secondary font-semibold m-20" style={{ 'fontFamily': 'serif' }}>You have no products in wishlist</h3>
                    </div>
            }
        </div>
    );
};

export default Wishlist;