import React, { useState } from 'react';
import './ManageAllOrders.css';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner/Spinner';
import { toast } from 'react-toastify';
import ActionModal from '../ActionModal/ActionModal';
import Title from '../../Shared/Title/Title';

const ManageAllOrders = () => {
    const [orderAction, setOrderAction] = useState(null);

    const { isLoading, error, data: orders, refetch } = useQuery('orders', () =>
        fetch(`https://continental-tools.herokuapp.com/orders`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
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

    const handleShipped = _id => {
        fetch(`https://continental-tools.herokuapp.com/manage-order/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Item marked as shipped.', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })
    }

    return (
        <div className='px-5 lg:px-10 pt-10 pb-5 lg:pb-10'>
            <Title title="Manage All Orders" />
            <h1 className='text-4xl font-bold text-center mb-2'>Manage All Orders</h1>
            <p className='text-center mb-12 font-semibold'>
                {
                    orders?.length === 0 ? "There are no orders yet" : 'These are all the orders that clients placed'
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
                                            (!order?.shipped && order?.paid) &&
                                            <div>
                                                <label onClick={() => handleShipped(order?._id)} className="btn btn-outline btn-sm btn-info rounded-full">Shipped</label>
                                            </div>
                                        )}
                                        {
                                            !order?.paid &&
                                            <label onClick={() => setOrderAction(order)} htmlFor="action-modal" className="btn btn-outline btn-sm btn-error rounded-full">Cancel Order</label>
                                        }
                                    </td>
                                    <td><span className='font-bold text-info'>
                                        {
                                            (!order?.shipped && order?.paid) &&
                                            <div className="badge text-white btn-sm font-bold">Panding</div>
                                        }
                                        {
                                            !order?.paid &&
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

export default ManageAllOrders;