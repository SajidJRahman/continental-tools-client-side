import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';
import './MyOrders.css';
import { toast } from 'react-toastify';
import ActionModal from '../ActionModal/ActionModal';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orderAction, setOrderAction] = useState(null);
    const currentUser = user.email;

    const { isLoading, error, data: orders, refetch } = useQuery('orders', () =>
        fetch(`http://localhost:5000/orders?email=${currentUser}`)
            .then(res => res.json())
    )
    refetch();

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        alert(error);
    }

    return (
        <div className='pt-5'>
            <h1 className='text-4xl font-bold text-center mb-2'>My Orders</h1>
            <p className='text-center mb-16'>
                {
                    orders.length === 0 ? "You haven't placed any orders yet" : 'These are the orders you placed'
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-12 mask mask-squircle">
                                                <img src={order.product_image} alt='' />
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className='font-semibold'>{order.product_name}</span></td>
                                    <td><span className='font-semibold'>{order.quantity}</span></td>
                                    <td><span className='font-bold'>{order.product_price}</span><span className='font-semibold'>/piece</span></td>
                                    <td>
                                        <label onClick={() => setOrderAction(order)} htmlFor="action-modal" className="btn btn-outline btn-sm btn-error rounded-full">Cancel Order</label>
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
        </div>
    );
};

export default MyOrders;