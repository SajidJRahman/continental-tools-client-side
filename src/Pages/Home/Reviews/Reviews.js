import React from 'react';
import './Reviews.css';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner/Spinner';

const Reviews = () => {
    const { isLoading, error, data: reviews } = useQuery('', () =>
        fetch('http://localhost:5000/reviews')
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
        <div className='py-16'>
            <h1 className='text-4xl font-bold text-center mb-2'>Happy Customers Said</h1>
            <p className='text-center mb-16'>Customer's satisfaction is our main priority & always on top,<br />so we try our best to improve our services & user experience at all times.</p>
            <div className='px-10 lg:px-14 md:px-14 grid gap-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
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
                                    <p className='mb-5'>Rated us <span className='text-orange-300 font-bold text-[30px]'>{review.stars}</span><span className='text-[20px]'>/</span><span className='font-bold text-[20px]'>5</span></p>
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

export default Reviews;