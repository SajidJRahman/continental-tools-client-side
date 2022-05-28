import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import { signOut } from 'firebase/auth';
import './ManageUsers.css';
import Title from '../../Shared/Title/Title';
import auth from '../../../firebase.init';
import ActionUserModal from '../ActionUserModal/ActionUserModal';

const ManageUsers = () => {
    const navigate = useNavigate();
    const [userAction, setUserAction] = useState(null);

    const { isLoading, error, data: users, refetch } = useQuery('users', () =>
        fetch('https://continental-tools.herokuapp.com/users', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    navigate('/login');
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            })
    )
    refetch();

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        toast.error(error, {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const handleAdmin = email => {
        fetch(`https://continental-tools.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Sorry, unable to perform your action!', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`${email} is now an admin`, {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
    }

    return (
        <div className='px-5 lg:px-10 pt-10 pb-5 lg:pb-10'>
            <Title title="Manage Users" />
            <h1 className='text-4xl font-bold text-center mb-2'>Manage Users</h1>
            <p className='text-center mb-12 font-semibold'>
                {
                    users?.length === 0 ? "These are no users to show" : `This is the list of ${users?.length} users`
                }
            </p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) =>
                                <tr key={user?._id}>
                                    <th>{index + 1}</th>
                                    <td><span className='font-semibold'>{user?.email}</span></td>
                                    <td>
                                        {
                                            user?.role !== 'admin' &&
                                            <button onClick={() => handleAdmin(user?.email)} className="btn btn-outline btn-sm btn-success rounded-full mr-3">Make Admin</button>
                                        }
                                        {
                                            user?.role === 'admin' ?
                                                <label onClick={() => setUserAction(user)} htmlFor="action-user-modal" className="btn btn-outline btn-sm btn-error rounded-full">Remove Admin</label>
                                                :
                                                <label onClick={() => setUserAction(user)} htmlFor="action-user-modal" className="btn btn-outline btn-sm btn-error rounded-full">Remove User</label>
                                        }
                                    </td>
                                    <td>
                                        {
                                            !user?.role &&
                                            <div className="badge text-white btn-sm font-bold">User</div>
                                        }
                                        {
                                            user?.role === 'admin' &&
                                            <div className="badge badge-info text-white btn-sm font-bold">Admin</div>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {userAction &&
                <ActionUserModal
                    userAction={userAction}
                    setUserAction={setUserAction}
                    refetch={refetch}
                />
            }
        </div >
    );
};

export default ManageUsers;