import React from 'react';
import './Dashboard.css';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    <li><Link to='/dashboard/add-review'>Add A Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;