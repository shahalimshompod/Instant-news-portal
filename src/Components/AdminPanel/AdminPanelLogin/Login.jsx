import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthContextProvider/AuthContextProvider';
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const { setUser, loginUser, loading, setLoading, user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;

        loginUser(email, password)
            .then(result => {
                const userData = result?.user;
                // saving user data to database
                if (userData && userData.email) {
                    setUser(userData);

                    axios.post('http://localhost:5000/users', {
                        email: userData.email,
                        role: "User",
                        job: 'N/A',
                        name: null,
                        image: null,
                    })
                        .then(response => {
                        })
                        .catch(error => {
                            console.error("Error adding user to database:", error);
                        });

                    // Toast alert
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top",
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Logged in successfully"
                    });

                    // Navigate to dashboard or other page
                    navigate(`/${import.meta.env.VITE_urlSecret}/admin-dashboard`);
                }
            })
            .catch(error => {
                setLoading(false);

                const errorCode = error.code;
                Swal.fire({
                    title: `${errorCode}`,
                    icon: "error",
                    draggable: true
                });
            });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-700">
                <span className="loading loading-bars loading-md"></span>
            </div>
        );
    }

    return (
        <div>
            {
                !user ? (
                    <div className='bg-gray-800 h-screen flex items-center justify-center'>
                        <div className='w-1/3 p-8 rounded shadow'>
                            <h1 className='text-3xl font-bold text-center mb-6 text-white font-sora'>Dashboard Login</h1>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                {/* Email Input */}
                                <div className='mb-4'>
                                    <label className="block font-bold mb-2 text-white">Email</label>
                                    <div className="flex items-center border rounded pl-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="white"
                                            className="h-4 w-4 opacity-70">
                                            <path
                                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                            <path
                                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                        </svg>
                                        <input
                                            type="text"
                                            className="p-2 grow outline-none bg-transparent font-sora text-white"
                                            placeholder="Enter your email"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                        />
                                    </div>
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                </div>

                                {/* Password Input */}
                                <div className='mb-4'>
                                    <label className="block font-bold mb-2 text-white">Password</label>
                                    <div className="flex items-center border rounded px-2">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="grow p-2 outline-none bg-transparent text-white"
                                            placeholder="Enter your password"
                                            {...register("password", { required: "Password is required" })}
                                        />
                                        <button
                                            type="button"
                                            className="ml-2 text-white"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                                </div>

                                {/* Submit Button */}
                                {
                                    loading ? (<button type="submit" className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full'>
                                        <span className="loading loading-dots loading-md"></span>
                                    </button>) : (<button type="submit" className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full'>
                                        Login
                                    </button>)
                                }

                            </form>
                        </div>
                    </div>
                ) : (
                    <Navigate to={`/${import.meta.env.VITE_urlSecret}/admin-dashboard`}></Navigate>
                )
            }
        </div>
    );
};

export default Login;
