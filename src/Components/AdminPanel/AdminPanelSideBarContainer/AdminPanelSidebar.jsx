import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdApproval,
  MdManageAccounts,
  MdSupervisorAccount,
} from "react-icons/md";
import { BsDatabaseAdd } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import { TbNavigationShare } from "react-icons/tb";
import { FaFileCircleCheck, FaUsers } from "react-icons/fa6";
import { MdOutlineVideoSettings } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { FaFileCirclePlus } from "react-icons/fa6";
import { BiSolidVideoPlus } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import axios from "axios";
import { FaHistory } from "react-icons/fa";

const AdminPanelSidebar = () => {
  const { user } = useContext(AuthContext);
  const currentUserEmail = user.email;
  const [userRole, setUserRole] = useState("");
  const [approvalLength, setApprovalLength] = useState(null);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const res = await axios.get(
          `https://instant-news-portal-server.vercel.app/user-role?email=${currentUserEmail}`
        );
        setUserRole(res.data);
      } catch (error) {
        console.error("Problem in fetching roles", error);
      }
    };
    fetchRole();
  }, [userRole]);

  useEffect(() => {
    const fetchLength = async () => {
      const res = await axios.get("https://instant-news-portal-server.vercel.app/approval-req-length");
      if (res?.data) {
        const data = res?.data;
        const length = data.length;
        setApprovalLength(length);
      }
    };

    fetchLength();
  }, [approvalLength]);

  return (
    <div className="w-60 h-screen bg-gray-800 text-white flex flex-col p-4 fixed top-0 left-0 overflow-y-scroll">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <MdAdminPanelSettings size={40} />{" "}
        <span className="font-sora">{userRole} </span>
      </h2>
      <nav className="flex flex-col">
        {/* Navigation (for all) */}
        <div>
          <div className="mb-2 flex items-center gap-1">
            <TbNavigationShare />
            <h1 className="text-white/40 font-sora text-sm">Navigation</h1>
          </div>

          <NavLink
            to={`/${import.meta.env.VITE_urlSecret}/admin-dashboard/my-profile`}
            end
            className={({ isActive }) =>
              `p-3 rounded-lg text-lg font-medium flex items-center gap-2 ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            <CgProfile size={20} />
            <span className="font-sora text-sm text-base-300">Profile</span>
          </NavLink>

          <NavLink
            to={`/${import.meta.env.VITE_urlSecret}/admin-dashboard`}
            end
            className={({ isActive }) =>
              `p-3 rounded-lg text-lg font-medium flex items-center gap-2 ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            <MdSpaceDashboard size={20} />
            <span className="font-sora text-sm text-base-300">Dashboard</span>
          </NavLink>
        </div>

        <div className="border-b my-4 border-white/30"></div>

        {/* manage own data (for all role) */}
        <div>
          <div className="mb-2 flex items-center gap-1">
            <MdManageAccounts />
            <h1 className="text-white/40 font-sora text-sm">
              Manage your posts
            </h1>
          </div>

          <NavLink
            to={`/${
              import.meta.env.VITE_urlSecret
            }/admin-dashboard/my-added-blogs`}
            className={({ isActive }) =>
              `p-3 rounded-lg text-lg font-medium flex items-center gap-2 mb-2 ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            <FaFileCircleCheck size={20} />
            <span className="font-sora text-xs text-base-300">
              My posted blogs
            </span>
          </NavLink>

          <NavLink
            to={`/${
              import.meta.env.VITE_urlSecret
            }/admin-dashboard/my-added-videos`}
            className={({ isActive }) =>
              `p-3 rounded-lg text-lg font-medium flex items-center gap-2 ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            <MdOutlineVideoSettings size={20} />
            <span className="font-sora text-xs text-base-300">
              My posted videos
            </span>
          </NavLink>
        </div>

        <div className="border-b my-4 border-white/30"></div>

        {/* Manage others data (Only for admin and moderator(moderator can just edit other's post cant delete)) */}
        <div>
          {/* manage moderator & editors data */}
          <div className="mb-2 flex items-center gap-1">
            <MdSupervisorAccount size={20} />
            <h1 className="text-white/40 font-sora text-sm">
              Manage other's posts
            </h1>
          </div>

          <NavLink
            to={`/${
              import.meta.env.VITE_urlSecret
            }/admin-dashboard/others-posted-blogs`}
            className={({ isActive }) =>
              `p-3 rounded-lg text-lg font-medium flex items-center gap-2 mb-2 ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            <FaFileCircleCheck size={20} />
            <span className="font-sora text-xs text-base-300">
              Other's posted blogs
            </span>
          </NavLink>

          <NavLink
            to={`/${
              import.meta.env.VITE_urlSecret
            }/admin-dashboard/others-posted-videos`}
            className={({ isActive }) =>
              `p-3 rounded-lg text-lg font-medium flex items-center gap-2 ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            <MdOutlineVideoSettings size={20} />
            <span className="font-sora text-xs text-base-300">
              Other's posted videos
            </span>
          </NavLink>

          {userRole === "Admin" && (
            <>
              <NavLink
                to={`/${
                  import.meta.env.VITE_urlSecret
                }/admin-dashboard/approval-requests`}
                className={({ isActive }) =>
                  `p-3 rounded-lg text-lg font-medium flex items-center gap-2 my-2 ${
                    isActive ? "bg-blue-600" : "hover:bg-gray-700"
                  }`
                }
              >
                <MdApproval size={20} />
                <span className="font-sora text-xs text-base-300">
                  Approval Requests ({approvalLength})
                </span>
              </NavLink>

              <NavLink
                to={`/${
                  import.meta.env.VITE_urlSecret
                }/admin-dashboard/approval-history`}
                className={({ isActive }) =>
                  `p-3 rounded-lg text-lg font-medium flex items-center gap-2 ${
                    isActive ? "bg-blue-600" : "hover:bg-gray-700"
                  }`
                }
              >
                <FaHistory size={18} />
                <span className="font-sora text-xs text-base-300">
                  Approval History
                </span>
              </NavLink>
            </>
          )}
        </div>

        <div className="border-b my-4 border-white/30"></div>

        {/* add to your database (for all role) */}
        <div>
          <div className="mb-2 flex items-center gap-1">
            <BsDatabaseAdd />
            <h1 className="text-white/40 font-sora text-sm">
              Post to your Website
            </h1>
          </div>

          <NavLink
            to={`/${import.meta.env.VITE_urlSecret}/admin-dashboard/add-blogs`}
            className={({ isActive }) =>
              `p-3 rounded-lg text-lg font-medium flex items-center gap-2 ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            <FaFileCirclePlus size={20} />
            <span className="font-sora text-xs text-base-300">Post blogs</span>
          </NavLink>

          <NavLink
            to={`/${import.meta.env.VITE_urlSecret}/admin-dashboard/add-videos`}
            className={({ isActive }) =>
              `p-3 rounded-lg text-lg font-medium flex items-center gap-2 ${
                userRole !== "Admin" && "my-2"
              } ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
            }
          >
            <BiSolidVideoPlus size={20} />
            <span className="font-sora text-xs text-base-300">Post videos</span>
          </NavLink>

          {userRole !== "Admin" && (
            <NavLink
              to={`/${
                import.meta.env.VITE_urlSecret
              }/admin-dashboard/approval-history`}
              className={({ isActive }) =>
                `p-3 rounded-lg text-lg font-medium flex items-center gap-2 ${
                  isActive ? "bg-blue-600" : "hover:bg-gray-700"
                }`
              }
            >
              <FaHistory size={18} />
              <span className="font-sora text-xs text-base-300">
                Approval History
              </span>
            </NavLink>
          )}
        </div>

        <div className="border-b my-4 border-white/30"></div>

        {/* Manage users and their roles (for admin only) */}
        {userRole === "Admin" && (
          <div>
            <div className="mb-2 flex items-center gap-1">
              <FaUsers />
              <h1 className="text-white/40 font-sora text-sm">
                Manage your users and roles
              </h1>
            </div>

            <NavLink
              to={`/${
                import.meta.env.VITE_urlSecret
              }/admin-dashboard/all-users`}
              className={({ isActive }) =>
                `p-3 rounded-lg text-lg font-medium flex items-center gap-2 mb-2 ${
                  isActive ? "bg-blue-600" : "hover:bg-gray-700"
                }`
              }
            >
              <FaUsers size={20} />
              <span className="font-sora text-xs text-base-300">All users</span>
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default AdminPanelSidebar;
