import React from 'react';
import './Products.css';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import { useQuery } from 'react-query';

const Products = () => {
    const navigate = useNavigate();
    const navigateToPurchase = _id => {
        navigate(`purchase/${_id}`)
    }

    const { isLoading, error, data: products } = useQuery('repoData', () =>
        fetch('http://localhost:5000/products')
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
        <div className='py-16 font-poppins'>
            <h1 className='text-4xl font-bold text-center mb-2'>Products</h1>
            <p className='text-center mb-16'>Choose from some of the best selling products on market!<br />Good in price, great in quality.</p>
            <div className='px-10 lg:px-14 md:px-14 grid gap-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    products.map(product =>
                        <div key={product._id} >
                            <div style={{ boxShadow: '0 0 0, 0 0 10px #e2e2e2' }} className="card w-[100%]  h-[100%] bg-base-100 mx-auto">
                                <figure className="px-10 pt-10">
                                    <img src={product.image} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{product.name}</h2>
                                    <p>{product.description}</p>
                                    <p>Available in stock: {product.quantity}</p>
                                    <p>Minimum purchase limit: {product.minimum_quantity}</p>
                                    <h2 className="card-title">Price: €{product.price}/product</h2>
                                    <div className="card-actions">
                                        <button onClick={() => navigateToPurchase(product._id)} className="w-full lg:w-80 md:w-80 btn btn-primary rounded-full">Purchase Now</button>
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