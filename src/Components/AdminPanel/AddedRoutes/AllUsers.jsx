import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import UserUpdateModal from '../AddingRoutes/UserUpdateModal';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);
    // fetching user data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://instant-news-portal-server.vercel.app/users');
                setUserData(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // modal functions

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (user) => {
        setSelectedUser(user)
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // update user function
    const handleSubmitForm = (data) => {
        const email = data.email;
        const dataForUpdate = data;

        fetch(`https://instant-news-portal-server.vercel.app/update-user?email=${email}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataForUpdate),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    const updatedUsers = userData.map((user) =>
                        user.email === email ? { ...user, ...data } : user
                    );
                    setUserData(updatedUsers);

                    Swal.fire({
                        title: "Updated!",
                        text: "User details have been updated successfully.",
                        icon: "success",
                    });
                } else {
                    Swal.fire({
                        title: "No Changes",
                        text: "No data was updated.",
                        icon: "info",
                    });
                }
            })
            .catch((error) => {
                console.error("Error updating user:", error);
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong while updating user.",
                    icon: "error",
                });
            });
        handleCloseModal();
    };

    // handle delete user function.
    const handleDeleteUser = (data) => {
        const email = data?.email;

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            preConfirm: () => {
                // Show loading spinner when confirming the deletion
                Swal.showLoading();

                // Perform the delete operation asynchronously
                return axios.delete(`https://instant-news-portal-server.vercel.app/delete-users?email=${email}`)
                    .then(response => {
                        if (response.data.success && response.data.deletedCount > 0) {
                            const restUserToShow = userData.filter(user => user.email !== email);
                            setUserData([...restUserToShow]);
                            return { success: true, message: "User has been deleted" };
                        } else {
                            return { success: false, message: "User could not be deleted" };
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting user:", error);
                        return { success: false, message: "An error occurred while deleting the user" };
                    });
            }
        }).then(result => {
            if (result.isConfirmed) {
                if (result.value.success) {
                    Swal.fire({
                        title: "Deleted!",
                        text: result.value.message,
                        icon: "success",
                    });
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: result.value.message,
                        icon: "error",
                    });
                }
            }
        });
    };






    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-bars loading-md"></span>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto w-full mx-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr className="text-lg">
                        <th className="text-left">User email</th>
                        <th className="text-left">Job</th>
                        <th className="text-left">Current role</th>
                        <th className="text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows */}
                    {userData.map((data, index) => (
                        <tr key={index}>
                            <td className="py-3">
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <FaUserCircle size={45} />
                                        </div>
                                    </div>
                                    <div>
                                        <h1>{data.email}</h1>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3">{data.job}</td>
                            <td className="py-3">
                                <h4 className="border w-24 text-center font-sora shadow-lg rounded-lg py-1">{data.role}</h4>
                            </td>
                            <td className="py-3">
                                <div className="flex items-center gap-5">
                                    <button onClick={() => handleOpenModal(data)} className="hover:text-green-500">
                                        <BsPencilSquare size={22} />
                                    </button>
                                    <button onClick={() => handleDeleteUser(data)} className="hover:text-red-600">
                                        <MdDelete size={25} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <UserUpdateModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmitForm} defaultValues={selectedUser}></UserUpdateModal>
        </div>
    );
};

export default AllUsers;
