import { NavLink } from "react-router";
import O from "../../../../../assets/icons/o.png";

const RecommendsNavbar = () => {
    return (
        <div className=" bg-white shadow-lg">
            <div className="flex items-center py-3 container mx-auto">
                <div className="flex-1">
                    <a className="text-5xl flex items-center"><span className="font-caslon">InstantR </span><span className="font-bebas flex items-center text-green-500">Rec<span><img className="w-[37px] pb-1" src={O} alt="o" /></span>mmends</span></a>
                </div>
                <div>
                    <ul className="flex items-center gap-12">
                        <li><NavLink to='/recommend' className="text-xl font-caslon ">Home</NavLink></li>
                        <li><NavLink to='/recommend/personal-finance' className="text-xl font-caslon ">Personal Finance</NavLink></li>
                        <li><NavLink to='/recommend/education' className="text-xl font-caslon ">Education</NavLink></li>
                        <li><NavLink to='/recommend/Business-solutions' className="text-xl font-caslon ">Business</NavLink></li>
                        <li><NavLink to='/recommend/shopping' className="text-xl font-caslon ">Shopping</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RecommendsNavbar;