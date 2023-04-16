import React, { useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import './ManageProducts.css';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import ActionProductsModal from '../ActionProductsModal/ActionProductsModal';
import Title from '../../Shared/Title/Title';

const ManageProducts = () => {
    const [productAction, setProductAction] = useState(null);

    const { isLoading, error, data: products, refetch } = useQuery('manage-products', () =>
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
            <Title title="Manage Products" />
            <h1 className='text-3xl lg:text-4xl font-bold text-center mb-2'>Manage Products</h1>
            <p className='text-center mb-16 px-5'>There are currently {products.length} product on store</p>
            <div className='px-5 lg:px-14 md:px-14 grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                {
                    products?.map(product =>
                        <div key={product?._id} >
                            <div style={{ boxShadow: '0 0 0, 0 0 10px #e2e2e2' }} className="card w-full h-full bg-base-100 mx-auto">
                                <div className="card bg-base-100 shadow-xl w-full h-full">
                                    <figure><img className='rounded-lg' src={product?.image} alt="" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{product?.name}</h2>
                                        <p>{product?.description}</p>
                                        <p>Available in stock: <span className='font-semibold'>{product?.quantity}</span></p>
                                        <p>Minimum purchase limit: <span className='font-semibold'>{product?.minimum_quantity}</span></p>
                                        <h2 className="card-title">Price: €{product?.price}/piece</h2>
                                        <div className="card-actions w-full">
                                            <label onClick={() => setProductAction(product)} htmlFor="action-product-modal" className="w-full btn btn-error text-white rounded-full">Delete Product</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            {productAction &&
                <ActionProductsModal
                    productAction={productAction}
                    setProductAction={setProductAction}
                    refetch={refetch}
                />
            }
        </div>
    );
};

export default ManageProducts;