import React from 'react';
import './MyProfile.css';
import Title from '../../Shared/Title/Title';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const { isLoading, error, data: profile } = useQuery('profile', () =>
        fetch(`https://continental-tools.herokuapp.com/my-profile/${user.email}`)
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

    return (
        <div className='px-5 lg:px-10 pt-10 pb-5 lg:pb-10'>
            <Title title="My Profile" />
            <h1 className='text-4xl font-bold text-center mb-2'>My Profile</h1>
            <p className='text-center mb-12 font-semibold'>Welcome to your profile {user?.displayName}</p>
            <div className="card w-full lg:w-[450px] mx-auto bg-base-100 shadow-xl">
                <div className="avatar">
                    <div className="w-40 mt-10 mx-auto rounded-full ring ring-[#4099ff] ring-offset-base-100 ring-offset-2">
                        {
                            user?.photoURL ?
                                <img className='rounded-full shadow-xl' src={user?.photoURL} alt="" />
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded-full" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                </svg>
                        }
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title justify-center font-bold text-2xl">{user?.displayName}</h2>
                    <div className='flex justify-between items-center border-b pb-4 mt-10'>
                        <p className='font-semibold text-gray-400'>Email</p>
                        <p className='text-right font-semibold'>{user.email}</p>
                    </div>
                    <div className='flex justify-between items-center border-b pb-4 mt-2'>
                        <p className='font-semibold text-gray-400'>Phone</p>
                        {
                            profileInfo?.phone ?
                                <p className='text-right font-semibold'>{profileInfo?.phone}</p>
                                :
                                <p className='text-right text-sm'>Update info to see here</p>
                        }
                    </div>
                    <div className='flex justify-between items-center border-b pb-4 mt-2'>
                        <p className='font-semibold text-gray-400'>Address</p>
                        {
                            profileInfo?.address ?
                                <p className='text-right font-semibold'>{profileInfo?.address}</p>
                                :
                                <p className='text-right text-sm'>Update info to see here</p>
                        }
                    </div>
                    <div className='flex justify-between items-center border-b pb-4 mt-2'>
                        <p className='font-semibold text-gray-400'>Education</p>
                        {
                            profileInfo?.education ?
                                <p className='text-right font-semibold'>{profileInfo?.education}</p>
                                :
                                <p className='text-right text-sm'>Update info to see here</p>
                        }
                    </div>
                    <div className='flex justify-between items-center border-b pb-4 mt-2'>
                        <p className='font-semibold text-gray-400'>LinkedIn</p>
                        {
                            profileInfo?.linkedin ?
                                <p className='text-right font-semibold'>
                                    <a className="link hover" rel="noreferrer" target='_blank' href={profileInfo?.linkedin} >Visit LinkedIn</a>
                                </p>
                                :
                                <p className='text-right text-sm'>Update info to see here</p>
                        }
                    </div>
                    <div className='flex justify-between items-center border-b pb-4 mt-2'>
                        <p className='font-semibold text-gray-400'>GitHub</p>
                        {
                            profileInfo?.github ?
                                <p className='text-right font-semibold'>
                                    <a className="link hover" rel="noreferrer" target='_blank' href={profileInfo?.github} >Visit GitHub</a>
                                </p>
                                :
                                <p className='text-right text-sm'>Update info to see here</p>
                        }
                    </div>
                    <div className='flex justify-between items-center border-b pb-4 mt-2'>
                        <p className='font-semibold text-gray-400'>Facebook</p>
                        {
                            profileInfo?.facebook ?
                                <p className='text-right font-semibold'>
                                    <a className="link hover" rel="noreferrer" target='_blank' href={profileInfo?.facebook} >Visit Facebook</a>
                                </p>
                                :
                                <p className='text-right text-sm'>Update info to see here</p>
                        }
                    </div>
                    <div className='flex justify-between items-center border-b pb-4 mt-2'>
                        <p className='font-semibold text-gray-400'>Twitter</p>
                        {
                            profileInfo?.twitter ?
                                <p className='text-right font-semibold'>
                                    <a className="link hover" rel="noreferrer" target='_blank' href={profileInfo?.twitter} >Visit Twitter</a>
                                </p>
                                :
                                <p className='text-right text-sm'>Update info to see here</p>
                        }
                    </div>
                    <Link to='/dashboard/edit-profile' className='mx-auto '>
                        <button className='btn mt-10 px-5'>Edit Profile</button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default MyProfile;