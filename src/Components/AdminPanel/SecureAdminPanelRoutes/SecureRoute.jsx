import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContextProvider/AuthContextProvider';
import { Navigate } from 'react-router';
import axios from 'axios';

const SecureRoute = ({ children, allowedRoles }) => {
    const { user, loading } = useContext(AuthContext);
    const [userRole, setUserRole] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const fetchRole = async () => {
            if (user?.email) {
                try {
                    const res = await axios.get(
                        `https://instant-news-portal-server.vercel.app/user-role?email=${user.email}`
                    );
                    setUserRole(res?.data);
                } catch (error) {
                    console.error('Problem in fetching roles', error);
                } finally {
                    setIsFetching(false);
                }
            } else {
                setIsFetching(false);
            }
        };
        fetchRole();
    }, [user]);

    // Combined loading and isFetching state
    if (loading || isFetching) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-700">
                <span className="loading loading-bars loading-md"></span>
            </div>
        );
    }

    // Redirect to login if user is not authenticated
    if (!user) {
        return (
            <Navigate to={`/${import.meta.env.VITE_urlSecret}/login`} />
        );
    }

    // Redirect to unauthorized if the role is not allowed
    if (userRole && !allowedRoles.includes(userRole)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default SecureRoute;
