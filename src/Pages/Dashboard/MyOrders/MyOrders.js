import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            //{
            //     headers: {
            //         authorization: `bearer ${localStorage.getItem('accessToken')}`
            //     }
            // });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className="text-3xl mb-5">My Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td><img className='w-20 squared' src={booking.img} alt="" /></td>
                                <td>{booking.bag}</td>
                                <td>BDT. {booking.price}</td>
                                <td><button className='btn-sm'>pending</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;