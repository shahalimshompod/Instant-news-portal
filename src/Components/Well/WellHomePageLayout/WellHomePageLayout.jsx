import { Outlet } from "react-router";
import WellHomeRoutes from "./WellHomepageComponents/WellHomeRoutes";

const WellHomePageLayout = () => {
    return (
        <div className="">
            <section className="flex flex-col items-center">
                <WellHomeRoutes></WellHomeRoutes>
                <h1 className="text-white">.</h1>
            </section>
            <Outlet></Outlet>
        </div>
    );
};

export default WellHomePageLayout;