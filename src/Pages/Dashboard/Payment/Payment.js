import React from 'react';
import './Payment.css';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner/Spinner';
import { toast } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements
} from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3OOHEz8TYrJKr8yV73VGImQw60YtzSfD859UEzgLPMnDya0gNOKY7XyqGe67iHqHrjUaj0825jUyJwoFHNEN8w00jyCPR6oo');

const Payment = () => {
    const { id } = useParams();

    const { isLoading, error, data: orders, refetch } = useQuery(['orders', id], () =>
        fetch(`http://localhost:5000/orders/${id}`)
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

    return (
        <div className='px-5 lg:px-10 pt-10 pb-5 lg:pb-12'>
            <h1 className='text-4xl font-bold text-center mb-2'>Payment</h1>
            <p className='text-center mb-12 font-semibold'>Complete your order for {orders.product_name}</p>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-[400px]' src={orders.product_image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-lg lg:text-2xl">Complete your order <span className='text-info'>{orders.name}</span></h2>
                    <div className='mt-3'>
                        <p>Item: <span className="text-xl font-semibold">{orders.product_name}</span></p>
                        <p className='my-1'>Price: <span className='font-semibold'>{orders.product_price}</span>/piece</p>
                        <p className='my-1'>Quantity: <span className='font-semibold'>{orders.quantity}</span></p>
                        <p className='my-1'>Shipping Address: <span className='font-semibold'>{orders.address}, {orders.city}, {orders.country}, {orders.zip}</span></p>
                        <p className='my-1'>Contact Info: <span className='font-semibold'>{orders.email}</span></p>
                    </div>
                    <div className="card border shadow-xl bg-base-100">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm orders={orders} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;