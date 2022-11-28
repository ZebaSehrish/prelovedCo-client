import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllCustomers = () => {
    const [deletingUser, setDeletingUser] = useState(null);

    const closeModal = () => {
        setDeletingUser(null);
    }

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://preloved-co-server.vercel.app/users?role=customer`)
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteUser = user => {
        fetch(`https://preloved-co-server.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${user.name} deleted successfully`)
                }
            })
    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            {
                users.length > 0 ?
                    <div className='mt-20'>
                        <h3 className="text-4xl text-center text-gray-500 mb-5" style={{ 'fontFamily': 'serif' }}>All Customers</h3>
                        <div className="overflow-x-auto flex justify-center align-center">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className='bg-secondary'></th>
                                        <th className='bg-secondary'>Name</th>
                                        <th className='bg-secondary'>Email</th>
                                        <th className='bg-secondary'>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) => <tr key={user._id}>
                                            <th className='bg-primary'>{i + 1}</th>
                                            <td className='bg-primary'>{user.name}</td>
                                            <td className='bg-primary'>{user.email}</td>
                                            <td className='bg-primary'> <label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        {
                            deletingUser && <ConfirmationModal
                                title={`Are you sure you want to delete?`}
                                message={`If you delete ${deletingUser.name}. It cannot be undone!!`}
                                successAction={handleDeleteUser}
                                successButtonName='Delete'
                                modalData={deletingUser}
                                closeModal={closeModal}
                            ></ConfirmationModal>
                        }
                    </div>
                    :
                    <div className='flex justify-center items-center'>
                        <h3 className="text-2xl lg:text-4xl text-secondary font-semibold m-20" style={{ 'fontFamily': 'serif' }}>No Customer to Show</h3>
                    </div>
            }
        </div>
    );
};

export default AllCustomers;