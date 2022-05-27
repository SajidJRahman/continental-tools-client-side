import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SpinnerSecondary from '../../Shared/SpinnerSecondary/SpinnerSecondary';
import './AddProduct.css';
import Title from '../../Shared/Title/Title';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const [productButton, setProductButton] = useState(false);
    const [errorPrice, setErrorPrice] = useState('');
    const [errorStock, setErrorStock] = useState('');
    const [errorMinimum, setErrorMinimum] = useState('');
    const [showSpinner, setShowSpinner] = useState();

    const {
        register,
        handleSubmit,
        reset,
    } = useForm();

    const handlePrice = event => {
        if (event.target.value < 0) {
            setProductButton(true);
            setErrorPrice('Price cannot be less than 0');
        };

        if (event.target.value >= 0) {
            setProductButton(false);
            setErrorPrice('');
        };
    }

    const handleStockQuantity = event => {
        if (event.target.value < 0) {
            setProductButton(true);
            setErrorStock('Stock cannot be less than 0');
        };

        if (event.target.value >= 0) {
            setProductButton(false);
            setErrorStock('');
        };
    }

    const handleMinimumQuantity = event => {
        if (event.target.value < 1) {
            setProductButton(true);
            setErrorMinimum('Minimum quantity cannot be less than 1');
        };

        if (event.target.value >= 1) {
            setProductButton(false);
            setErrorMinimum('');
        };
    }

    const onSubmit = data => {
        setShowSpinner(<SpinnerSecondary />);
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Product added successfully!', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setShowSpinner();
                reset({
                    image: '',
                    name: '',
                    price: '',
                    quantity: '',
                    minimum_quantity: '',
                    description: ''
                });
            });
    }

    return (
        <div className='px-5 lg:px-10 pt-10 pb-5 lg:pb-12'>
            <Title title="Add Product" />
            <h1 className='text-4xl font-bold text-center mb-2'>Add a Product</h1>
            <p className='text-center mb-12 font-semibold'>Add a new product to store</p>

            <div className="card lg:card-side bg-base-100 shadow-xl p-10">
                <div className="form-control">
                    <textarea className="textarea textarea-bordered w-full lg:w-96 h-full lg:h-full text-center py-36" {...register('image', { required: true })} placeholder="Paste product image link" defaultValue='https://cdn.lorem.space/images/face/.cache/500x0/jake-fagan-Y7C7F26fzZM-unsplash.jpg'></textarea>
                </div>
                <div className="card-body py-0 px-0 lg:pl-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" {...register('name', { required: true })} placeholder="Product Name" className="input input-bordered" name="name" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <input type="number" {...register('price', { required: true })} onChange={handlePrice} placeholder="Product Price" className="input input-bordered" />
                        <label className='label pb-0 justify-center'>
                            <span className='label-text-alt text-red-500'>{errorPrice}</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Total Product In Stock</span>
                        </label>
                        <input type="number" {...register('quantity', { required: true })} onChange={handleStockQuantity} placeholder="Product In Stock" className="input input-bordered" />
                        <label className='label pb-0 justify-center'>
                            <span className='label-text-alt text-red-500'>{errorStock}</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Minimum Order Quantity</span>
                        </label>
                        <input type="number" {...register('minimum_quantity', { required: true })} onChange={handleMinimumQuantity} placeholder="Minimum Quantity" className="input input-bordered" />
                        <label className='label pb-0 justify-center'>
                            <span className='label-text-alt text-red-500'>{errorMinimum}</span>
                        </label>
                    </div>
                    <input type="hidden" {...register('email')} value={user?.email} name="email" placeholder="email" className="input input-bordered" />
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-18" {...register('description', { required: true })} placeholder="message"></textarea>
                    </div>
                    <div className="form-control mt-3">
                        {
                            showSpinner ?
                                <div >
                                    {showSpinner}
                                </div>
                                :
                                <button onClick={handleSubmit(onSubmit)} disabled={productButton} className="btn btn-primary">Add Product</button>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddProduct;