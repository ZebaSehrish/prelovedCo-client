import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {
    const [deletingUser, setDeletingUser] = useState(null);

    const closeModal = () => {
        setDeletingUser(null);
    }

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?role=seller`)
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteUser = user => {
        fetch(`http://localhost:5000/users/${user._id}`, {
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

    const handleVerify = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Verified successfully');
                    refetch();
                }
            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h3 className="text-3xl mb-5">All Sellers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        (user?.verified === 'yes' &&
                                            <>
                                                <button className='btn btn-xs btn-success'>verified</button>
                                            </>)
                                        ||
                                        <button
                                            onClick={() => handleVerify(user._id)}
                                            className='btn btn-xs btn-primary'>unverified</button>
                                    }
                                    <label onClick={() => setDeletingUser(user)
                                    } htmlFor="confirmation-modal" className="btn btn-xs btn-error ml-4">Delete</label></td>
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
        </div >
    );
};

export default AllSellers;