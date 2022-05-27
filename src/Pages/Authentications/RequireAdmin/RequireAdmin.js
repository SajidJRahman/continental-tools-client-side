import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';
import useAdmin from '../../../hooks/useAdmin';
import { signOut } from 'firebase/auth';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [admin, isLoading] = useAdmin(user);

    if (loading || isLoading) {
        return <Spinner />;
    }
    if (!user || !admin) {
        signOut(auth);
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;