import React from 'react';
import { toast } from 'react-toastify';
import './ActionReviewsModal.css';

const ActionReviewsModal = ({ reviewAction, setReviewAction, refetch }) => {

    const handleDelete = () => {
        fetch(`https://continental-tools.herokuapp.com/reviews/${reviewAction?._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Your review is deleted successfully!`, {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setReviewAction(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="action-review-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center text-red-500">Confirm Delete</h3>
                    <p className="py-4 text-center">This cannot be undone, are you sure you want to delete your review?</p>
                    <div className="modal-action justify-center">
                        <button onClick={() => handleDelete()} className="btn btn-sm btn-error px-12 text-white font-bold rounded-full">Delete</button>
                        <label htmlFor="action-review-modal" className="btn btn-sm rounded-full px-12">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActionReviewsModal;