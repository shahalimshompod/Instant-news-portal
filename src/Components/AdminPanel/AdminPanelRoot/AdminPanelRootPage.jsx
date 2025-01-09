import { Outlet, useLocation } from "react-router";
import AdminPanelSidebar from "../AdminPanelSideBarContainer/AdminPanelSidebar";
import AdminPanelNav from "../AdminPanelNavbar/AdminPanelNav";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import useUserRole from "../Hooks/useUserRole";

const AdminPanelRootPage = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;
    const { userRole, loading } = useUserRole(email);
    const roles = ['Admin', 'Editor', 'Moderator']
    const { pathname } = useLocation();

    // just for scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-800">
                <span className="loading loading-bars loading-md"></span>
            </div>
        );
    }

    return (
        <div>
            {
                roles.includes(userRole) ? (
                    <div className="flex">
                        <section>
                            <AdminPanelSidebar></AdminPanelSidebar>
                        </section>
                        <section className=" ml-60 lg:[1024px] xl:w-[1100px] 2xl:w-full   ">
                            <AdminPanelNav></AdminPanelNav>
                            <Outlet></Outlet>
                        </section>
                    </div>
                )
                    :
                    (
                        <div>
                            <div className="h-screen bg-gray-800 flex flex-col justify-center items-center px-6">
                                <h1 className="text-white text-5xl text-center mb-4 font-caslon font-bold">
                                    Welcome to Your Dashboard
                                </h1>
                                <h2 className="text-white text-2xl font-sora text-center max-w-3xl">
                                    Kindly wait for admin approval. Once your request is approved, you will be redirected to your dashboard.
                                </h2>
                            </div>
                        </div>

                    )
            }
        </div>
    );
};

export default AdminPanelRootPage;

