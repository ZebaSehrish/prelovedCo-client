import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookModal = ({ bookItem }) => {
    //const { title, Resale_price } = bookItem;
    console.log(bookItem);
    const { user } = useContext(AuthContext);
    // const handleBooking = () => {

    // }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center"></h3>
                    <form className='grid gap-3'>
                        {/* <select name='slot' className="select select-bordered w-full">
                        </select> */}
                        <input name='' type="text" defaultValue='' disabled className="input input-bordered w-full" />
                        <input name='pname' type="text" defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered w-full" />
                        <input name='number' type="number" placeholder="Phone Number" className="input input-bordered w-full " />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full " />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookModal;