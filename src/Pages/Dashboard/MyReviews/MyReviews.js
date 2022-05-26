import React, { useState } from 'react';
import './MyReviews.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import ActionReviewsModal from '../ActionReviewsModal/ActionReviewsModal';

const MyReviews = () => {
    const [user] = useAuthState(auth);
    const currentUser = user.email;
    const [reviewAction, setReviewAction] = useState(null);

    const { isLoading, error, data: reviews, refetch } = useQuery('reviews', () =>
        fetch(`http://localhost:5000/my-reviews?email=${currentUser}`)
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

    return (
        <div className='pt-10 pb-5 lg:pb-10'>
            <h1 className='text-4xl font-bold text-center mb-2'>My Reviews</h1>
            <p className='text-center mb-12 font-semibold'>
                {
                    reviews.length === 0 ? "You haven't added any reviews yet" : 'These are the reviews added by you'
                }
            </p>
            <div className='px-5 lg:px-10 lg:px-14 md:px-14 grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
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
                                        <label onClick={() => setReviewAction(review)} htmlFor="action-review-modal" className="btn btn-outline btn-sm btn-error rounded-full">Delete Review</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            {reviewAction &&
                <ActionReviewsModal
                    reviewAction={reviewAction}
                    setReviewAction={setReviewAction}
                    refetch={refetch}
                />
            }
        </div>
    );
};

export default MyReviews;