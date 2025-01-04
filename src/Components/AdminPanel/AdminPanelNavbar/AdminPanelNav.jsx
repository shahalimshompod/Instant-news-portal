import React from 'react';

const AdminPanelNav = () => {
    return (
        <div className="navbar bg-gray-800 sticky top-0">
            <div className="flex-1">
                <a className="text-white font-sora text-2xl font-bold uppercase">InstantR</a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminPanelNav;