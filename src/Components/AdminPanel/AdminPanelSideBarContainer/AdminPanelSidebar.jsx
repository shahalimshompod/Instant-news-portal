import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdManageAccounts, MdSupervisorAccount } from "react-icons/md";
import { BsDatabaseAdd } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import { TbNavigationShare } from "react-icons/tb";
import { FaFileCircleCheck } from "react-icons/fa6";
import { MdOutlineVideoSettings } from "react-icons/md";
import { MdTipsAndUpdates } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { FaFileCirclePlus } from "react-icons/fa6";
import { BiSolidVideoPlus } from "react-icons/bi";
import { HiClipboardDocumentCheck } from "react-icons/hi2";



const AdminPanelSidebar = () => {

    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4 fixed top-0 left-0">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><MdAdminPanelSettings size={40} /> <span className='font-sora'>Admin Panel</span></h2>
            <nav className="flex flex-col">

                {/* Navigation (for all) */}
                <div>
                    <div className='mb-2 flex items-center gap-1'>
                        <TbNavigationShare />
                        <h1 className='text-white/40 font-sora text-sm'>Navigation</h1>
                    </div>

                    <NavLink
                        to={`/${import.meta.env.VITE_urlSecret}/admin-dashboard`}
                        end
                        className={({ isActive }) =>
                            `p-3 rounded-lg text-lg font-medium flex items-center gap-2 ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
                            }`
                        }
                    >
                        <MdSpaceDashboard size={20} />
                        <span className='font-sora text-base text-base-300'>Dashboard</span>
                    </NavLink>
                </div>



                {/* manage own data (for all role) */}
                <div>
                    <div className='mb-2 mt-7 flex items-center gap-1'>
                        <MdManageAccounts />
                        <h1 className='text-white/40 font-sora text-sm'>Manage your data</h1>
                    </div>

                    <NavLink
                        to={`/${import.meta.env.VITE_urlSecret}/admin-dashboard/my-added-blogs`}
                        className={({ isActive }) =>
                            `p-3 rounded-lg text-lg font-medium flex items-center gap-2 mb-2 ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
                            }`
                        }
                    >
                        <FaFileCircleCheck size={20} />
                        <span className='font-sora text-base text-base-300'>My Added Blogs</span>
                    </NavLink>

                    <NavLink
                        to={`/${import.meta.env.VITE_urlSecret}/admin-dashboard/my-added-videos`}
                        className={({ isActive }) =>
                            `p-3 rounded-lg text-lg font-medium flex items-center gap-2 mb-2 ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
                            }`
                        }
                    >
                        <MdOutlineVideoSettings size={20} />
                        <span className='font-sora text-base text-base-300'>My Added Videos</span>
                    </NavLink>

                    <NavLink
                        to={`/${import.meta.env.VITE_urlSecret}/admin-dashboard/my-updated-tips`}
                        className={({ isActive }) =>
                            `p-3 rounded-lg text-lg font-medium flex items-center gap-2 ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
                            }`
                        }
                    >
                        <MdTipsAndUpdates size={20} />
                        <span className='font-sora text-base text-base-300'>My Updated Tips</span>
                    </NavLink>
                </div>



                {/* Manage moderator & editor data (Only for admin) */}
                <div>
                    {/* manage moderator & editors data */}
                    <div className='mb-2 mt-7 flex items-center gap-1'>
                        <MdSupervisorAccount size={20} />
                        <h1 className='text-white/40 font-sora text-sm'>Manage Moderator & Editors data</h1>
                    </div>

                    <NavLink
                        to={`/${import.meta.env.VITE_urlSecret}/admin-dashboard/my-added-blogs`}
                        className={({ isActive }) =>
                            `p-3 rounded-lg text-lg font-medium flex items-center gap-2 mb-2 ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
                            }`
                        }
                    >
                        <FaFileCircleCheck size={20} />
                        <span className='font-sora text-base text-base-300'>My Added Blogs</span>
                    </NavLink>

                    <NavLink
                        to={`/${import.meta.env.VITE_urlSecret}/admin-dashboard/my-added-videos`}
                        className={({ isActive }) =>
                            `p-3 rounded-lg text-lg font-medium flex items-center gap-2 mb-2 ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
                            }`
                        }
                    >
                        <MdOutlineVideoSettings size={20} />
                        <span className='font-sora text-base text-base-300'>My Added Videos</span>
                    </NavLink>

                    <NavLink
                        to={`/${import.meta.env.VITE_urlSecret}/admin-dashboard/my-updated-tips`}
                        className={({ isActive }) =>
                            `p-3 rounded-lg text-lg font-medium flex items-center gap-2 ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
                            }`
                        }
                    >
                        <MdTipsAndUpdates size={20} />
                        <span className='font-sora text-base text-base-300'>My Updated Tips</span>
                    </NavLink>
                </div>


                        {/* manage users onl */}




                {/* add to your database (for all role) */}
                <div><div className='mb-2 mt-7 flex items-center gap-1'>
                    <BsDatabaseAdd />
                    <h1 className='text-white/40 font-sora text-sm'>Add to your database</h1>
                </div>

                    <NavLink
                        to={`/${import.meta.env.VITE_urlSecret}/admin-dashboard/add-blogs`}
                        className={({ isActive }) =>
                            `p-3 rounded-lg text-lg font-medium flex items-center gap-2 mb-2 ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
                            }`
                        }
                    >
                        <FaFileCirclePlus size={20} />
                        <span className='font-sora text-base text-base-300'>Add Blogs</span>
                    </NavLink>

                    <NavLink
                        to={`/${import.meta.env.VITE_urlSecret}/admin-dashboard/add-videos`}
                        className={({ isActive }) =>
                            `p-3 rounded-lg text-lg font-medium flex items-center gap-2 mb-2 ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
                            }`
                        }
                    >
                        <BiSolidVideoPlus size={20} />
                        <span className='font-sora text-base text-base-300'>Add Videos</span>
                    </NavLink>
                    <NavLink
                        to={`/${import.meta.env.VITE_urlSecret}/admin-dashboard/update-travel-tips`}
                        className={({ isActive }) =>
                            `p-3 rounded-lg text-lg font-medium flex items-center gap-2 ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
                            }`
                        }
                    >
                        <HiClipboardDocumentCheck size={20} />
                        <span className='font-sora text-base text-base-300'>Update Travel Tips</span>
                    </NavLink>
                </div>


            </nav>
        </div>
    );
};

export default AdminPanelSidebar;
