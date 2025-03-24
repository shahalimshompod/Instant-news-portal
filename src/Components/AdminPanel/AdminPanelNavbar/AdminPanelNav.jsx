import React, { useContext } from 'react';
import { AuthContext } from '../AuthContextProvider/AuthContextProvider';
import { FaUserAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import useUserRole from '../Hooks/useUserRole';

const AdminPanelNav = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const email = user.email;
    const { userRole } = useUserRole(email)

    
    //handle logout users
    const handleLogout = () => {
        logoutUser()
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
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
            title: "Logged out successfully"
        });
    }

    return (
        <div className="flex items-center bg-gray-800 sticky top-0 py-1 pr-10 z-50 w-full">
            <div className="flex-1">
                <span className='text-2xl font-montserrat font-bold px-3 py-1 text-white'>InstantR</span>
            </div>
            <div className="flex items-center gap-4">
                <h4 className='text-white border rounded-xl px-3 py-1 font-montserrat font-bold'>{userRole}</h4>
                <p className='border-r h-10'></p>
                <h4 className='text-white border rounded-xl px-3 py-1 font-montserrat'>{email}</h4>
                <div>
                    <div >
                        <h1 className='  text-white rounded-full border-2 p-3'><span><FaUserAlt size={15} /></span></h1>
                    </div>
                </div>
                <div>
                    <button onClick={handleLogout} className='btn bg-blue-600 hover:bg-blue-700 text-sm text-white border-none shadow-none font-montserrat '>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default AdminPanelNav;