import React from 'react';
import { toast } from 'react-toastify';
import './ActionProductsModal.css';

const ActionProductsModal = ({ productAction, setProductAction, refetch }) => {

    const handleDelete = () => {
        fetch(`https://continental-tools.herokuapp.com/products/${productAction?._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${productAction?.name} is deleted successfully!`, {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setProductAction(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="action-product-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center text-red-500">Confirm Delete</h3>
                    <figure className='pt-4'>
                        <img className='rounded-lg w-[30%] mx-auto' src={productAction?.image} alt="" />
                    </figure>
                    <p className="py-4 text-center">This cannot be undone, are you sure you want to delete <span className='font-bold'>{productAction?.name}</span> ?</p>
                    <div className="modal-action justify-center">
                        <button onClick={() => handleDelete()} className="btn btn-sm btn-error px-12 text-white font-bold rounded-full">Delete</button>
                        <label htmlFor="action-product-modal" className="btn btn-sm rounded-full px-12">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActionProductsModal;