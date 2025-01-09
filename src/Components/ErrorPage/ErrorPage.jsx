import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ wrongPath }) => {
    const navigate = useNavigate();

    const handleReturnHome = () => {
        navigate('/');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-white text-black">
            <div className="text-center">
                <h1 className="text-9xl font-caslon font-bold">404</h1>
                <p className="text-xl mt-4">
                    Oops! The path <span className="font-semibold">{wrongPath}</span> does not exist.
                </p>
                <button
                    onClick={handleReturnHome}
                    className="mt-8 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
                >
                    Return to Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
