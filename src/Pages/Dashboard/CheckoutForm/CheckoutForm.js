import React, { useState, useEffect } from 'react';
import './CheckoutForm.css';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';

const CheckoutForm = ({ orders }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState('');
    const [success, setSuccess] = useState(false);
    const [transectionId, setTransectionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const {
        _id,
        name,
        email,
        product_price
    } = orders

    useEffect(() => {
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ product_price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [product_price])

    const handleSubmit = async event => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setPaymentError(error?.message);
            setSuccess(false)
        }
        else {
            setPaymentError('');
        }

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setPaymentError(intentError?.message);
        }
        else {
            setPaymentError('');
            setTransectionId(paymentIntent.id);
            setSuccess(true);
            toast.success('Your order is completed!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            const paymentInfo = {
                orders: _id,
                transectionId: paymentIntent.id
            }

            fetch(`http://localhost:5000/orders/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(data => { })
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {
                    success &&
                    <label className='label justify-center font-semibold'>Order Transection Id:
                        <span className='label-text-alt text-green-500 font-bold ml-1'>{transectionId}</span>
                    </label>
                }
                <button type="submit" className='btn btn-outline btn-sm btn-success w-full rounded-full mt-[62px]' disabled={!stripe || !clientSecret || success}>
                    Place Order
                </button>
            </form>
            {
                paymentError &&
                <label className='label justify-center pb-0'>
                    <span className='label-text-alt text-red-500 font-bold'>{paymentError}</span>
                </label>
            }
        </div>
    );
};

export default CheckoutForm;