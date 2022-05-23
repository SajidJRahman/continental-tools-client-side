import React from 'react';
import './AddReview.css';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner/Spinner';
import { toast } from 'react-toastify';

const AddReview = () => {
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
                reset({
                    image: '',
                    name: '',
                    title: '',
                    stars: '',
                    description: ''
                });
            })
    }

    return (
        <div>
            <div className="card card-compact mx-auto w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="form-control">
                        <textarea className="textarea textarea-bordered h-32" {...register('image', { required: true })} placeholder="Paste your image link"></textarea>
                        <label className="label mx-auto">
                            <span className="label-text-alt">Your Image Link</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register('name', { required: true })} placeholder="name" className="input input-bordered" />
                    </div>
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
                        <input type="number" min="1" max="5" {...register('stars', { required: true })} placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-16" {...register('description', { required: true })} placeholder="message"></textarea>
                    </div>
                    <div className="form-control">
                        <button onClick={handleSubmit(onSubmit)} className="btn btn-primary">Add Review</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddReview;