import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
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
                bookings.length !== 0 ?
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
                                        <th className='bg-secondary'>Payment Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bookings &&
                                        bookings?.map((booking, i) => <tr key={booking._id}>
                                            <th className='bg-primary'>{i + 1}</th>
                                            <td className='bg-primary'><img className='w-20 squared' src={booking.img} alt="" /></td>
                                            <td className='bg-primary'>{booking.bag}</td>
                                            <td className='bg-primary'>$ {booking.price}</td>
                                            <td className='bg-primary'>
                                                {
                                                    booking.price && !booking.paid && <Link
                                                        to={`/dashboard/payment/${booking._id}`}
                                                    >
                                                        <button
                                                            className='btn btn-info btn-xs'
                                                        >Pay</button>
                                                    </Link>
                                                }
                                                {
                                                    booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                                }
                                            </td>

                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div >

                    :
                    <div className='flex justify-center items-center'>
                        <h3 className="text-2xl lg:text-4xl text-secondary font-semibold m-20" style={{ 'fontFamily': 'serif' }}>You have no Order to Show</h3>
                    </div>
            }
        </div>
    );
};

export default MyOrders;