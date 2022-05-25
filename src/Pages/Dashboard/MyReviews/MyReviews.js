import React from 'react';
import './MyReviews.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';
import { useQuery } from 'react-query';

const MyReviews = () => {
    const [user] = useAuthState(auth);

    const currentUser = user.email;

    const { isLoading, error, data: reviews } = useQuery('', () =>
        fetch(`http://localhost:5000/my-reviews?email=${currentUser}`)
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
            <h1 className='text-4xl font-bold text-center mb-2'>My Reviews</h1>
            <p className='text-center mb-16'>
                {
                    reviews.length === 0 ? "You haven't added any reviws yet" : 'These are the reviews added by you'
                }
            </p>
            <div className='px-10 lg:px-14 md:px-14 grid gap-8 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                {
                    reviews.map(review =>
                        <div key={review._id} className="rounded-2xl flex items-center bg-base-100 shadow-xl">
                            <div className='px-5 border-r'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={review.image} alt='' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card-body pl-4">
                                    <h2 className="card-title">{review.name}</h2>
                                    <div className="badge">{review.title}</div>
                                    <p className='mb-5'>You rated <span className='text-orange-300 font-bold text-[30px]'>{review.stars}</span><span className='text-[20px]'>/</span><span className='font-bold text-[20px]'>5</span></p>
                                    <p>{review.description}</p>

                                    <div className="card-actions justify-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-[#fa4764] h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyReviews;