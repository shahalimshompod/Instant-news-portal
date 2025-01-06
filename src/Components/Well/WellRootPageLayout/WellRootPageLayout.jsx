import { Outlet } from "react-router";
import WellNavbar from "../WellNavbar/WellNavbar";
import Footer from "../../Footer/Footer";

const WellRootPageLayout = () => {
    return (
        <div>
            <WellNavbar></WellNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default WellRootPageLayout;