import React from 'react';
import './Products.css';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const Products = () => {
    const navigate = useNavigate();
    const navigateToPurchase = _id => {
        navigate(`/purchase/${_id}`)
    }

    const { isLoading, error, data: products } = useQuery('products', () =>
        fetch('https://continental-tools.herokuapp.com/products')
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
        <div className='pt-16 pb-5 lg:pb-16 font-poppins' id='products'>
            <h1 className='text-3xl lg:text-4xl font-bold text-center mb-2'>Products</h1>
            <p className='text-center mb-16 px-5'>Choose from some of the best selling products on market!<br />Good in price, great in quality.</p>
            <div className='px-5 lg:px-14 md:px-14 grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                {
                    products?.map(product =>
                        <div key={product?._id} >
                            <div style={{ boxShadow: '0 0 0, 0 0 10px #e2e2e2' }} className="card w-full h-full bg-base-100 mx-auto">
                                <div className="card lg:card-side bg-base-100 shadow-xl w-full h-full">
                                    <figure><img className='rounded-lg' src={product?.image} alt="" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{product?.name}</h2>
                                        <p>{product?.description}</p>
                                        <p>Available in stock: {product?.quantity}</p>
                                        <p>Minimum purchase limit: {product?.minimum_quantity}</p>
                                        <h2 className="card-title">Price: €{product?.price}/piece</h2>
                                        <div className="card-actions">
                                            <button onClick={() => navigateToPurchase(product?._id)} className="w-full lg:w-80 md:w-80 btn btn-primary rounded-full">Purchase Now</button>
                                        </div>
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

export default Products;