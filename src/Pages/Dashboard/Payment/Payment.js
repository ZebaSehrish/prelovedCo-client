import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
// import { useNavigation } from 'react-day-picker';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { bag, price, } = booking;
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div className='m-10'>
            <div className='flex justify-center items-center'>
                <div className='mt-20 lg:ml-20'>
                    <h3 className="text-2xl text-secondary uppercase font-semibold">Payment for {bag}</h3>
                    <p className="text-xl">Please pay <strong>${price}</strong> for the bag you added to the cart. Happy Shopping!</p>
                    <div className='w-96 my-12'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                booking={booking}
                            />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;