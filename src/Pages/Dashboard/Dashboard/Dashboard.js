import React from 'react';
import './Dashboard.css';
import { Link, Outlet } from 'react-router-dom';
import Title from '../../Shared/Title/Title';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <Title title="Dashboard" />
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-gradient-to-t from-[#4099ff] to-[#afdffc]">
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-white lg:bg-transparent text-base-content">
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    <li><Link to='/dashboard/my-orders'>My Orders</Link></li>
                    <li><Link to='/dashboard/add-review'>Add A Review</Link></li>
                    <li><Link to='/dashboard/my-reviews'>My Reviews</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;