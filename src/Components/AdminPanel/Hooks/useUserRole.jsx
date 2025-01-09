import { useState, useEffect } from 'react';
import axios from 'axios';

const useUserRole = (email) => {
    const [userRole, setUserRole] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRole = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:5000/user-role?email=${email}`);
                setUserRole(res.data);
            } catch (err) {
                console.error("Problem in fetching roles", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (email) {
            fetchRole();
        }
    }, [email, userRole]);

    return { userRole, loading, error };
};

export default useUserRole;
