import React from 'react';
import { toast } from 'react-toastify';
import './ActionModal.css';

const ActionModal = ({ orderAction, setOrderAction, refetch }) => {
    const {
        _id,
        product_name,
    } = orderAction;

    const handleDelete = () => {
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${product_name} is deleted successfully!`, {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setOrderAction(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="action-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center text-red-500">Confirm Cancel</h3>
                    <p className="py-4 text-center">This cannot be undone, are you sure you want to cancel the order for  <span className='font-bold'>{product_name}</span> ?</p>
                    <div className="modal-action justify-center">
                        <button onClick={() => handleDelete()} className="btn btn-sm btn-error text-white font-bold rounded-full">Cancel Order</button>
                        <label htmlFor="action-modal" className="btn btn-sm rounded-full px-12">Close</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ActionModal;