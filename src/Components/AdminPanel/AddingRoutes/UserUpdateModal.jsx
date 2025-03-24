import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UserUpdateModal = ({ isOpen, onClose, onSubmit, defaultValues }) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        if (defaultValues) {
            setValue("email", defaultValues.email);
            setValue("role", defaultValues.role);
            setValue("job", defaultValues.job);
        }
    }, [defaultValues, setValue]);


    const onFormSubmit = (data) => {
        onSubmit(data);
    };


    const handleClose = () => {
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="text-lg font-semibold text-center mb-4 font-montserrat">Update User</h3>

                <form onSubmit={handleSubmit(onFormSubmit)}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-montserrat">Email</label>
                        <input disabled
                            type="email"
                            id="email"
                            {...register("email", { required: "Email is required", pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i })}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md font-montserrat"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Role Select */}
                    <div className="mb-4">
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 font-montserrat">Role</label>
                        <select
                            id="role"
                            {...register("role", { required: "Role is required" })}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md font-montserrat"
                        >
                            <option value="">Select Role</option>
                            <option value="Admin">Admin</option>
                            <option value="Moderator">Moderator</option>
                            <option value="Editor">Editor</option>
                            <option value="User">User</option>
                        </select>
                        {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
                    </div>

                    {/* Job Input */}
                    <div className="mb-4">
                        <label htmlFor="job" className="block text-sm font-medium text-gray-700 font-montserrat">Job</label>
                        <input
                            type="text"
                            id="job"
                            {...register("job", { required: "Job is required" })}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md font-montserrat"
                        />
                        {errors.job && <p className="text-red-500 text-sm">{errors.job.message}</p>}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="font-montserrat px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="font-montserrat px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserUpdateModal;
