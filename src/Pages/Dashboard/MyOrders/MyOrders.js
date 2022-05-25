import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';
import './MyOrders.css';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const currentUser = user.email;

    const { isLoading, error, data: orders } = useQuery('orders', () =>
        fetch(`http://localhost:5000/orders?email=${currentUser}`)
            .then(res => res.json()
            )
    )

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
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order?.price}/products</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;