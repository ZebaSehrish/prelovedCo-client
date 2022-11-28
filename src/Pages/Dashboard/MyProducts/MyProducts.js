import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';


const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }

    const url = `https://preloved-co-server.vercel.app/categoryDetails?email=${user?.email}`;

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
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

    const handleDeleteProduct = product => {
        fetch(`https://preloved-co-server.vercel.app/categoryDetails/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${product.title} deleted successfully`)
                }
            })
    }

    const handleAd = id => {
        fetch(`https://preloved-co-server.vercel.app/users/seller/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Advertised successfully');
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            {
                products.length > 0 ?
                    <div className='mt-20'>
                        <h3 className="text-4xl text-center mb-5" style={{ 'fontFamily': 'serif' }}>My Products</h3>
                        <div className="overflow-x-auto flex justify-center align-center ">
                            <table className="table ">
                                <thead >
                                    <tr>
                                        <th className='bg-secondary'></th>
                                        <th className='bg-secondary'></th>
                                        <th className='bg-secondary'>Product</th>
                                        <th className='bg-secondary'>Category</th>
                                        <th className='bg-secondary'>Price</th>
                                        <th className='bg-secondary'>Status</th>
                                        <th className='bg-secondary'>Advertisement</th>
                                        <th className='bg-secondary'>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-primary'>
                                    {
                                        products &&
                                        products?.map((product, i) => <tr className=''
                                            key={product._id}>
                                            <th className='bg-primary'>{i + 1}</th>
                                            <td className='bg-primary'><img className='w-20 squared' src={product.img} alt="" /></td>
                                            <td className='bg-primary'>{product.title}</td>
                                            <td className='bg-primary'>{product.category} Bags</td>
                                            <td className='bg-primary'>${product.resell_price}</td>
                                            <td className='bg-primary'>
                                                {

                                                    (product?.advertisement === true &&
                                                        <>
                                                            <button className='btn btn-xs btn-info'>activated</button>
                                                        </>)
                                                    ||
                                                    <button onClick={() => handleAd(product._id)} className='btn btn-xs'>activate</button>

                                                }
                                            </td>
                                            <td className='bg-primary'>

                                                <button className='btn btn-xs btn-success'>available</button>
                                            </td>
                                            <td className='bg-primary' s> <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        {
                            deletingProduct && <ConfirmationModal
                                title={`Are you sure you want to delete?`}
                                message={`If you delete ${deletingProduct.title}. It cannot be undone`}
                                successAction={handleDeleteProduct}
                                successButtonName='Delete'
                                modalData={deletingProduct}
                                closeModal={closeModal}
                            ></ConfirmationModal>
                        }
                    </div >
                    :
                    <div className='flex justify-center items-center'>
                        <h3 className="text-xl lg:text-4xl text-secondary font-semibold m-20" style={{ 'fontFamily': 'serif' }}>You have not added any products yet.</h3>
                    </div>
            }
        </div>
    );
};


export default MyProducts;