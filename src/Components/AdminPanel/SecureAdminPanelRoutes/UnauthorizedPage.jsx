import React from "react";

const UnauthorizedPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-gray-800">
            <div className="text-center p-6 rounded-lg max-w-md">
                <h1 className="text-4xl font-bold text-red-600 mb-4 font-caslon">
                    403 - Unauthorized
                </h1>
                <p className="text-lg mb-6 font-montserrat">
                    Sorry, you do not have permission to access this page. Please contact the administrator if you believe this is an error.
                </p>
                <a
                    href="/"
                    className="font-montserrat inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Go Back to Home
                </a>
            </div>
        </div>
    );
};

export default UnauthorizedPage;
