import React from 'react';
import './Dashboard.css';
import { Link, Outlet } from 'react-router-dom';
import Title from '../../Shared/Title/Title';
import useAdmin from '../../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile font-poppins">
            <Title title="Dashboard" />
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-gradient-to-t from-[#4099ff] to-[#afdffc]">
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-white lg:bg-transparent text-base-content">
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    {
                        !admin &&
                        <>
                            <li><Link to='/dashboard/my-orders'>My Orders</Link></li>
                            <li><Link to='/dashboard/add-review'>Add A Review</Link></li>
                            <li><Link to='/dashboard/my-reviews'>My Reviews</Link></li>
                        </>
                    }
                    {
                        admin &&
                        <>
                            <li><Link to='/dashboard/manage-users'>Manage Users</Link></li>
                            <li><Link to='/dashboard/manage-orders'>Manage Orders</Link></li>
                            <li><Link to='/dashboard/manage-products'>Manage Products</Link></li>
                            <li><Link to='/dashboard/add-product'>Add Product</Link></li>
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;