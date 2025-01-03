import { NavLink } from "react-router-dom"; // Ensure you're using "react-router-dom"
import './homeroutes.css';

const HomeRoutes = () => {
    const routes = [
        { path: "/", label: "Home" },
        { path: "/section/blogs", label: "Blogs" },
        { 
            path: "/section/tech", 
            label: "Tech", 
            dropdown: [
                { label: "AI", path: "/section/ai" }
            ]
        },
        { 
            path: "/section/explore", 
            label: "Explore", 
            dropdown: [
                { label: "Travel", path: "/section/travel" },
                { label: "Tips", path: "/section/tips" }
            ]
        },
        { path: "/section/personality", label: "Personality" },
        { 
            path: "/well", 
            label: "Well", 
            dropdown: [
                { label: "LIFE", path: "/well/life" },
                { label: "HEALTH", path: "/well/health" },
                { label: "MIND", path: "/well/mind" },
                { label: "FOOD", path: "/well/food" }
            ]
        },
        { 
            path: "/recommend", 
            label: "Recommend", 
            dropdown: [
                { label: "CREDIT CARDS", path: "/recommend/credit-cards" },
                { label: "BANKING", path: "/recommend/banking" },
                { label: "INSURANCE", path: "/recommend/insurance" },
                { label: "INVESTING", path: "/recommend/investing" },
                { label: "EDUCATION", path: "/recommend/education" },
                { label: "BUSINESS SOLUTION", path: "/recommend/business-solution" }
            ]
        },
        { path: "/section/instant-360", label: "Instant360" },
    ];

    return (
        <section className="my-8 pl-3 lg:px-0">
            <div className="flex lg:flex lg:items-center lg:justify-center gap-3 lg:gap-12 lg:container lg:mx-auto overflow-x-scroll md:overflow-x-visible scrollbar-hide">
                {routes.map((route, index) => (
                    <div key={index} className="relative group">
                        {/* Main NavLink */}
                        <NavLink
                            className="hidden md:block hover:text-red-500 text-[#000]/60 hover:ease-in-out hover:duration-150 font-caslon text-xl font-semibold"
                            to={route.path}
                        >
                            {route.label}
                        </NavLink>

                        {/* this routes only for mobile device */}
                        <NavLink
                            className="md:hidden hover:text-red-500 text-[#000]/60 hover:ease-in-out hover:duration-150 font-caslon text-lg font-semibold mr-3"
                            to={route.path}
                        >
                            {route.label}
                        </NavLink>

                        {/* Dropdown Menu */}
                        {route.dropdown?.length > 0 && (
                            <div className="w-52 px-2 font-bold absolute z-50 hidden bg-white text-black rounded-md shadow-lg lg:block md:hidden sm:hidden transition-all duration-300 ease-in-out transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                <ul className="hidden group-hover:block">
                                    {route.dropdown.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className={`px-4 py-2 hover:text-red-600 cursor-pointer font-caslon text-sm ${idx < route.dropdown.length - 1 ? 'border-b border-black' : ''}`}
                                        >
                                            <NavLink to={item.path}>
                                                {item.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeRoutes;
