import React, { useState } from 'react';
import './AddReview.css';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const [reviewButton, setReviewButton] = useState(false);
    const [errorRating, setErrorRating] = useState('');
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Review added successfully!', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                navigate('/home')
                reset({
                    image: '',
                    title: '',
                    stars: '',
                    description: ''
                });
            })
    }

    const handleRating = event => {
        if (event.target.value > 5) {
            setReviewButton(true);
            setErrorRating('Ratings cannot be more than 5');
        }

        if (event.target.value <= 5) {
            setReviewButton(false);
            setErrorRating('');
        }

        if (event.target.value < 1) {
            setReviewButton(true);
            setErrorRating('Ratings cannot be less than 1');
        }
    }

    return (
        <div className='px-5 lg:px-10 pt-10 pb-5 lg:pb-12'>
            <h1 className='text-4xl font-bold text-center mb-2'>Add a Review</h1>
            <p className='text-center mb-12 font-semibold'>Help us improve our services by adding a review</p>

            <div className="card lg:card-side bg-base-100 shadow-xl p-10">
                <div className="form-control">
                    <textarea className="textarea textarea-bordered w-96 h-full text-center py-36" {...register('image', { required: true })} placeholder="Paste your image link" defaultValue='https://cdn.lorem.space/images/face/.cache/500x0/jake-fagan-Y7C7F26fzZM-unsplash.jpg'></textarea>
                </div>
                <div className="card-body py-0">
                    <input type="hidden" {...register('name', { required: true })} value={user.displayName} placeholder="name" className="input input-bordered" name="name" />
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" {...register('title', { required: true })} placeholder="eg: web developer" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" {...register('stars', { required: true })} onChange={handleRating} name="" defaultValue='5' id="" placeholder="only enter 1 - 5 numbers" className="input input-bordered" />
                        <label className='label pb-0 justify-center'>
                            <span className='label-text-alt text-red-500'>{errorRating}</span>
                        </label>
                    </div>
                    <input type="hidden" {...register('email')} value={user.email} name="email" placeholder="email" className="input input-bordered" />
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-18" {...register('description', { required: true })} placeholder="message"></textarea>
                    </div>
                    <div className="form-control mt-3">
                        <button onClick={handleSubmit(onSubmit)} disabled={reviewButton} className="btn btn-primary">Post Review</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddReview;