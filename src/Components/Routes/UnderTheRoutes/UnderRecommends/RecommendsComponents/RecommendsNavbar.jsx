import { NavLink } from "react-router";
import O from "../../../../../assets/icons/o.png";
import { useEffect, useState } from "react";
// add the css file

const RecommendsNavbar = () => {
    const [scroll, setScroll] = useState(0);

    // Scroll side effect handle
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`hidden lg:block fixed top-0 left-0 w-full z-50 bg-white shadow-lg transform transition-transform duration-500 ${
                scroll < 300 ? "-translate-y-full" : "translate-y-0"
            }`}
        >
            <div className="flex items-center py-3 container mx-auto">
                {/* Logo Section */}
                <div className="flex-1">
                    <a className="text-5xl flex items-center">
                        <span className="font-caslon">InstantR </span>
                        <span className="font-bebas flex items-center text-green-500">
                            Rec
                            <span>
                                <img className="w-[37px] pb-1" src={O} alt="o" />
                            </span>
                            mmends
                        </span>
                    </a>
                </div>

                {/* Navigation Links */}
                <div>
                    <ul className="flex items-center gap-8">
                        <li>
                            <NavLink
                                to="/recommend"
                                className="text-xl font-caslon hover:text-green-500 transition duration-200"
                                aria-label="Home"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/recommend/personal-finance"
                                className="text-xl font-caslon hover:text-green-500 transition duration-200"
                                aria-label="Personal Finance"
                            >
                                Personal Finance
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/recommend/education"
                                className="text-xl font-caslon hover:text-green-500 transition duration-200"
                                aria-label="Education"
                            >
                                Education
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/recommend/Business-solutions"
                                className="text-xl font-caslon hover:text-green-500 transition duration-200"
                                aria-label="Business"
                            >
                                Business
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/recommend/shopping"
                                className="text-xl font-caslon hover:text-green-500 transition duration-200"
                                aria-label="Shopping"
                            >
                                Shopping
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RecommendsNavbar;
