import React, { useState } from 'react';
import './Purchase.css';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner/Spinner';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const Purchase = () => {
    const [quantityNumbers, setQuantityNumbers] = useState();
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [buttonPlusDisabled, setButtonPlusDisabled] = useState(false);
    const [buttonMinusDisabled, setButtonMinusDisabled] = useState(false);
    const [errorQuantity, setErrorQuantity] = useState('');

    const [user] = useAuthState(auth);
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();

    const { isLoading, error, data: products } = useQuery('', () =>
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json()
            )
    )

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        alert(error);
    }

    const {
        _id,
        name,
        image,
        price,
        description,
        quantity,
        minimum_quantity
    } = products;

    const onSubmit = data => {
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Order placed successfully!', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                reset({
                    quantity: '',
                    phone: '',
                    address: '',
                    city: '',
                    zip: '',
                    country: ''
                });
            })
    }

    const handleQuantity = event => {
        setQuantityNumbers(event.target.value);

        if (event.target.value === '') {
            setButtonDisabled(true);
            setErrorQuantity('Please add order quantity!');
            return
        }

        if (event.target.value < minimum_quantity) {
            setButtonMinusDisabled(true);
            setButtonDisabled(true);
            setErrorQuantity(`You cannot order beyond minimum ${minimum_quantity} pieces`);
            return
        }

        if (event.target.value >= minimum_quantity) {
            setButtonDisabled(false);
            setButtonMinusDisabled(false);
            setErrorQuantity('');
        }

        if (event.target.value > quantity) {
            setButtonDisabled(true);
            setButtonPlusDisabled(true);
            setErrorQuantity(`You cannot order more than maximum ${quantity} pieces`);
            return
        }

        if (event.target.value <= quantity) {
            setButtonDisabled(false);
            setButtonPlusDisabled(false);
            setErrorQuantity('');
        }

    }

    const plus = () => {
        setQuantityNumbers(quantityNumbers + 1)
    }

    const minus = () => {
        setQuantityNumbers(quantityNumbers - 1)
    }

    return (
        <div className="hero bg-base-200 font-poppins">
            <div className="hero-content p-0 gap-0 m-10 shadow-2xl rounded-[1rem] flex-col lg:flex-row">
                <div className='h-full w-full'>
                    <div className="card card-compact border-r-0 lg:border-r py-5 mx-auto w-full h-[544px] rounded-tl-[1rem] lg:rounded-tl-[1rem] rounded-tr-[1rem] lg:rounded-tr-none rounded-bl-none lg:rounded-bl-[1rem] rounded-br-none bg-base-100">
                        <figure><img className='rounded-[1rem]' src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{name}</h2>
                            <p>{description}</p>
                            <p>Available in stock: <b>{quantity}</b> pieces</p>
                            <p>Minimum order quantity: <b>{minimum_quantity}</b> pieces</p>
                            <input type="hidden" {...register('product_name')} name="product_name" value={name} />
                            <input type="hidden" {...register('product_image')} name="product_image" value={image} />
                            <input type="hidden" {...register('product_price')} name="product_price" value={price} />
                            <input type="hidden" {...register('product_id')} name="product_id" value={_id} />
                            <h2 className="text-lg">Price: €<span className='text-2xl font-bold'>{price}</span>/item</h2>
                            <div className="text-center flex items-center">
                                <button onClick={minus} disabled={buttonMinusDisabled} className="btn btn-primary rounded-r-none">-</button>
                                <input
                                    {...register('quantity', { required: true })}
                                    onChange={handleQuantity}
                                    type="number"
                                    className="w-full font-bold input input-bordered rounded-none text-center" min='1' value={quantityNumbers}
                                    placeholder='Enter Your Quantity' />
                                <button onClick={plus} disabled={buttonPlusDisabled} className="btn btn-primary rounded-l-none">+</button>
                            </div>
                            <label className='label pb-0'>
                                <span className='label-text-alt text-red-500'>{errorQuantity}</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="card w-full rounded-tl-none lg:rounded-tl-none rounded-tr-none lg:rounded-tr-[1rem] rounded-bl-[1rem] lg:rounded-bl-none rounded-br-[1rem] bg-base-100">
                    <div className="card-body">
                        <h1 className='text-2xl font-semibold text-center'>Enter your details</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" {...register('name', { required: true })} value={user.displayName} placeholder="Name" className="input input-bordered" readOnly />
                        </div>
                        <div className="block lg:flex justify-between">
                            <div className=' lg:mr-2'>
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} value={user.email} placeholder="Email" className="w-full lg:w-[280px] input input-bordered" readOnly />
                            </div>
                            <div className='lg:ml-2'>
                                <label className="label">
                                    <span className="label-text font-bold">Phone</span>
                                    <span className="label-text-alt font-bold text-gray-400">Optional</span>
                                </label>
                                <input type="tel" {...register('phone')} placeholder="Phone" className="w-full lg:w-[280px] input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Address</span>
                            </label>
                            <input type="text" {...register('address', { required: true })} placeholder="Address" className="input input-bordered" />
                        </div>
                        <div className="block lg:flex justify-between">
                            <div className=' lg:mr-2'>
                                <label className="label">
                                    <span className="label-text font-bold">City</span>
                                </label>
                                <input type="text" {...register('city', { required: true })} placeholder="City" className="w-full input input-bordered" />
                            </div>
                            <div className=' lg:mr-2'>
                                <label className="label">
                                    <span className="label-text font-bold">Zip Code</span>
                                </label>
                                <input type="number" {...register('zip', { required: true })} placeholder="Zip Code" className="w-full input input-bordered" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-bold">Country</span>
                                </label>
                                <input type="text" {...register('country', { required: true })} placeholder="Country" className="w-full input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleSubmit(onSubmit)} disabled={buttonDisabled} className="btn btn-primary">Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Purchase;