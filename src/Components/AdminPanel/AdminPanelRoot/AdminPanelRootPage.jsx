import { Outlet } from "react-router";
import AdminPanelSidebar from "../AdminPanelSideBarContainer/AdminPanelSidebar";
import AdminPanelNav from "../AdminPanelNavbar/AdminPanelNav";

const AdminPanelRootPage = () => {
    return (
        <div className="flex">

            <section>
                <AdminPanelSidebar></AdminPanelSidebar>
            </section>
            <section className="w-full ml-64">
                <AdminPanelNav></AdminPanelNav>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default AdminPanelRootPage;