import { Outlet } from "react-router";
import InstantRecommends from "./RecommendsComponents/InstantRecommends";
import RecommendsNavbar from "./RecommendsComponents/RecommendsNavbar";

const RecommendsLayout = () => {
    return (
        <div>
            <RecommendsNavbar></RecommendsNavbar>
            <InstantRecommends></InstantRecommends>
            <Outlet></Outlet>
        </div>
    );
};

export default RecommendsLayout;