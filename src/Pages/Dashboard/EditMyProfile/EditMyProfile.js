import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Title from '../../Shared/Title/Title';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SpinnerSecondary from '../../Shared/SpinnerSecondary/SpinnerSecondary';
import Spinner from '../../Shared/Spinner/Spinner';
import { useQuery } from 'react-query';

const EditMyProfile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [showSpinner, setShowSpinner] = useState();

    const {
        register,
        handleSubmit,
    } = useForm();

    const { isLoading, error, data: profile, refetch } = useQuery('profile', () =>
        fetch(`http://localhost:5000/my-profile/${user.email}`)
            .then(res => res.json()
            )
    )

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

    const profileInfo = profile[0];

    const onSubmit = data => {
        setShowSpinner(<SpinnerSecondary />);
        fetch(`http://localhost:5000/my-profile/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.info("Updated Profile", {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setShowSpinner();
                refetch()
            })
        navigate('/dashboard/profile');
    }

    return (
        <div className='px-5 lg:px-10 pt-10 pb-5 lg:pb-10'>
            <Title title="Edit Profile" />
            <h1 className='text-4xl font-bold text-center mb-2'>Edit Profile</h1>
            <p className='text-center mb-12 font-semibold'>Edit your profile with ease {user?.displayName}</p>
            <div className="card w-full lg:w-[450px] mx-auto bg-base-100 shadow-xl">
                <div className="avatar">
                    <div className="w-40 mt-10 mx-auto rounded-full ring ring-[#4099ff] ring-offset-base-100 ring-offset-2">
                        <img className=' rounded-full shadow-xl' src={user?.photoURL} alt="" />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title justify-center font-bold text-2xl">{user?.displayName}</h2>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Type here" value={user.email} disabled className="input input-bordered w-full" />
                    </div>
                    <input type="hidden" {...register('email')} name="email" value={user.email} />
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="number" {...register('phone')} defaultValue={profileInfo?.phone} placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" {...register('address')} defaultValue={profileInfo?.address} placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input type="text" {...register('education')} defaultValue={profileInfo?.education} placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">LinkedIn Profile Link</span>
                        </label>
                        <input type="text" {...register('linkedin')} defaultValue={profileInfo?.linkedin} placeholder="Include https://www" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">GitHub Profile Link</span>
                        </label>
                        <input type="text" {...register('github')} defaultValue={profileInfo?.github} placeholder="Include https://www" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Facebook Profile Link</span>
                        </label>
                        <input type="text" {...register('facebook')} defaultValue={profileInfo?.facebook} placeholder="Include https://www" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Twitter Profile Link</span>
                        </label>
                        <input type="text" {...register('twitter')} defaultValue={profileInfo?.twitter} placeholder="Include https://www" className="input input-bordered w-full" />
                    </div>
                    <div>
                        {
                            showSpinner ?
                                <div >
                                    {showSpinner}
                                </div>
                                :
                                <div className='flex justify-between gap-1'>
                                    <div className='w-full'>
                                        <button onClick={handleSubmit(onSubmit)} className='btn mt-5 w-full'>Save Changes</button>
                                    </div>
                                    <Link to='/dashboard/profile' className='w-full'>
                                        <button className='btn mt-5 w-full'>Cancel</button>
                                    </Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default EditMyProfile;