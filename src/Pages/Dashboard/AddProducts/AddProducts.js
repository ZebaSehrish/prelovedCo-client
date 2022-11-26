import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handleAddProduct = data => {
        const img = data.img[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const product = {
                        title: data.name,
                        original_price: data.price,
                        resell_price: data.rprice,
                        // date,
                        year: data.year,
                        seller: user?.displayName,
                        email: user?.email,
                        verified: user?.verified,
                        phone: data.phone,
                        location: data.location,
                        category: data.category,
                        specialty: data.specialty,
                        img: imgData.data.url,
                        description: data.description,
                        condition: data.condition
                    }


                    //saving
                    fetch('http://localhost:5000/categoryDetails', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/myProducts');
                        })
                }
            })
    }

    return (
        <div className='flex justify-center items-center'>
            <div className=' p-7'>
                <h2 className="text-4xl text-center">Add a Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className='grid gap-2 grid-cols-2 mt-2'>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" {...register("name", { required: 'name is required' })} placeholder="name" className="input input-sm input-bordered w-full" />
                            {errors.name && <p className='text-red-400'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Phone</span></label>
                            <input type="phone" {...register("phone", { required: 'Phone Number is required' })} placeholder="Phone Number" className="input input-sm  input-bordered w-full" />
                            {errors.phone && <p className='text-red-400'>{errors.phone?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Original Price</span></label>
                            <input type="number" {...register("price", { required: 'Original price is required' })} placeholder="original price" className="input input-sm  input-bordered w-full" />
                            {errors.price && <p className='text-red-400'>{errors.price?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Resell Price</span></label>
                            <input type="number" {...register("rprice", { required: 'Resell price is required' })} placeholder="resell price" className="input input-sm  input-bordered w-full" />
                            {errors.rprice && <p className='text-red-400'>{errors.rprice?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Location</span></label>
                            <input type="text" {...register("location", { required: 'location is required' })} placeholder="location" className="input input-sm  input-bordered w-full" />
                            {errors.location && <p className='text-red-400'>{errors.location?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Description</span></label>
                            <input type="textarea" {...register("description", { required: 'description is required' })} placeholder="Description" className="input input-sm  input-bordered w-full" />
                            {errors.description && <p className='text-red-400'>{errors.description?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Year of Purchase</span></label>
                            <input type="text" {...register("year", { required: 'Purchase year is required' })} placeholder="year" className="input input-sm  input-bordered w-full" />
                            {errors.year && <p className='text-red-400'>{errors.year?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Condition</span></label>
                            <select
                                {...register('condition')}
                                placeholder='condition' className="select select-sm select-bordered w-full">
                                <option value="excellent">Excellent</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Category</span></label>
                            <select
                                {...register('category')}
                                placeholder='Category' className="select select-sm select-bordered w-full">
                                <option value="Shoulder">Shoulder Bags</option>
                                <option value="Tote">Tote Bags</option>
                                <option value="Backpacks">Backpacks</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Photo</span></label>
                            <input type="file" {...register("img", { required: 'Image is required' })}
                                className="input input-sm  input-bordered w-full" />
                            {errors.img && <p className='text-red-400'>{errors.img.message}</p>}
                        </div>
                    </div>
                    <input type="submit" value='Add' className='btn w-full mt-5 ' />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;