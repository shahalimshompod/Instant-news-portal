import { NavLink } from "react-router-dom"; // Ensure you're using "react-router-dom"
import './homeroutes.css';

const HomeRoutes = () => {
    const routes = [
        { path: "/", label: "Home" },
        { path: "/section/news", label: "News" },
        { path: "/section/tech", label: "Tech", dropdown: ["AI"] },
        { path: "/section/finance", label: "Finance", dropdown: ["PERSONAL FINANCE", "REAL STATE", "CRYPTO"] },
        { path: "/section/leadership", label: "Leadership", dropdown: ["SUCCESS"] },
        { path: "/well", label: "Well", dropdown: ["LIFE", "HEALTH", "MIND", "FAMILY", "AGING WELL"] },
        { path: "/recommend", label: "Recommend", dropdown: ["CREDIT CARDS", "BANKING", "INSURANCE", "INVESTING", "EDUCATION", "BUSINESS SOLUTION"] },
        { path: "/section/instant-360", label: "Instant 360" },
    ];

    return (
        <section className="my-14 pl-3 lg:px-0">
            <div className="grid grid-cols-3 lg:flex lg:items-center lg:justify-center gap-3 lg:gap-12 lg:container lg:mx-auto">
                {routes.map((route, index) => (
                    <div key={index} className="relative group">
                        {/* Main NavLink */}
                        <NavLink
                            className="hover:text-red-500 text-[#000]/60 hover:ease-in-out hover:duration-300 font-caslon text-xl font-semibold"
                            to={route.path}
                        >
                            {route.label}
                        </NavLink>

                        {/* Dropdown Menu */}
                        {route.dropdown?.length > 0 && (
                            <div className="hidden lg:block">
                                <div className="w-52 px-2 font-bold absolute z-50 hidden group-hover:block bg-white text-black rounded-md shadow-lg lg:block md:hidden sm:hidden transition-all duration-300 ease-in-out transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <ul>
                                        {route.dropdown.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className={`px-4 py-2 hover:text-red-600 cursor-pointer font-caslon text-sm ${idx < route.dropdown.length - 1 ? 'border-b border-black' : ''}`}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeRoutes;
