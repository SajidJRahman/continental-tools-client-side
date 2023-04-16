import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';
import './MyOrders.css';
import ActionModal from '../ActionModal/ActionModal';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Title from '../../Shared/Title/Title';
import { signOut } from 'firebase/auth';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [orderAction, setOrderAction] = useState(null);
    const currentUser = user.email;

    const { isLoading, error, data: orders, refetch } = useQuery('orders', () =>
        fetch(`https://continental-tools.herokuapp.com/my-orders?email=${currentUser}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
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

    return (
        <div className='px-5 lg:px-10 pt-10 pb-5 lg:pb-10'>
            <Title title="My Orders" />
            <h1 className='text-4xl font-bold text-center mb-2'>My Orders</h1>
            <p className='text-center mb-12 font-semibold'>
                {
                    orders?.length === 0 ? "You haven't placed any orders yet" : 'These are the orders you placed'
                }
            </p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Status</th>
                            <th>Transection Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) =>
                                <tr key={order?._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-12 mask mask-squircle">
                                                <img src={order?.product_image} alt='' />
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className='font-semibold'>{order?.product_name}</span></td>
                                    <td><span className='font-semibold'>{order?.quantity}</span></td>
                                    <td><span className='font-bold'>{order?.product_price}</span><span className='font-semibold'>/piece</span></td>
                                    <td>
                                        {(
                                            order?.product_price && !order?.paid) &&
                                            <Link to={`/dashboard/payment/${order?._id}`}>
                                                <button className="btn btn-outline btn-sm btn-info rounded-full mr-3">Pay Now</button>
                                            </Link>
                                        }
                                        {(
                                            !order?.transectionId &&
                                            <label onClick={() => setOrderAction(order)} htmlFor="action-modal" className="btn btn-outline btn-sm btn-error rounded-full">Cancel Order</label>
                                        )}
                                    </td>
                                    <td><span className='font-bold text-info'>
                                        {(order?.paid && !order?.shipped) &&
                                            <div className="badge text-white btn-sm font-bold">Panding</div>
                                        }
                                        {(order?.product_price && !order?.paid) &&
                                            <div className="badge badge-error text-white btn-sm font-bold">Unpaid</div>
                                        }
                                        {
                                            order?.shipped &&
                                            <div className="badge badge-accent text-white btn-sm font-bold">Shipped</div>
                                        }
                                    </span></td>
                                    <td>
                                        {order?.transectionId &&
                                            <span className='font-bold text-info'>{order?.transectionId}</span>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {orderAction &&
                <ActionModal
                    orderAction={orderAction}
                    setOrderAction={setOrderAction}
                    refetch={refetch}
                />
            }
        </div >
    );
};

export default MyOrders;