import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookModal = ({ bookItem, setBookItem }) => {
    const { _id, img, title, resell_price } = bookItem;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const cname = form.cname.value;
        const number = form.number.value;
        const email = form.email.value;
        const location = form.location.value;
        const booking = {
            img,
            bag: title,
            product_id: _id,
            price: resell_price,
            customer: cname,
            email,
            number,
            location: location
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookItem(null);
                    toast.success('Booking confirmed');
                    //refetch();
                }
                else {
                    toast.error(data.message);
                }
            })

    }

    const handleExit = () => {
        setBookItem(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label onClick={handleExit} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center">{title}</h3>
                    <form onSubmit={handleBooking} className='grid gap-3'>

                        <input name='' type="text" defaultValue={resell_price} disabled className="input input-sm input-bordered w-full " />

                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-sm input-bordered w-full " />

                        <input name='cname' type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input input-sm input-bordered w-full" />
                        <input name='number' type="number" placeholder="Phone Number" className="input input-sm input-bordered w-full " />
                        <input name='location' type="text" placeholder='Preferred Location' className="input input-sm input-bordered w-full" />

                        <input className='btn btn-accent w-full' type="submit" value="Confirm Order" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookModal;