import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const dropdownContent = {
    "personal-finance": ["Credit Cards", "Banking", "Investing", "Loans and Mortgages"],
    education: ["Schools", "Courses", "Scholarships"],
    "business-solutions": ["Software", "Consulting", "Marketing"],
    shopping: ["Deals", "Stores", "Coupons"],
};

const RecommendsRoutesContainer = () => {
    const [activeRoute, setActiveRoute] = useState("");

    return (
        <div className="relative mb-10">
            <nav>
                <ul className="flex justify-center gap-10">
                    {/* Home Route */}
                    <li>
                        <NavLink
                            to="/recommend"
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? "text-black text-lg font-caslon border-b-2 border-green-500 inline-block text-center"
                                    : "text-black text-lg font-caslon inline-block text-center"
                            }
                        >
                            HOME
                        </NavLink>
                    </li>

                    {/* Render other nav items with dropdown */}
                    {Object.keys(dropdownContent).map((key) => (
                        <li key={key} onMouseEnter={() => setActiveRoute(key)} onMouseLeave={() => setActiveRoute("")}>
                            <NavLink
                                to={`/recommend/${key}`}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-black text-lg font-caslon border-b-2 border-green-500 inline-block text-center"
                                        : "text-black text-lg font-caslon inline-block text-center"
                                }
                            >
                                {key.replace("-", " ").toUpperCase()}
                            </NavLink>

                            {/* Dropdown for routes with content */}
                            {activeRoute === key && (
                                <div
                                    className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-base-100 shadow-xl rounded-lg p-4 w-[1200px]"
                                >
                                    <ul>
                                        {dropdownContent[key].map((item, index) => (
                                            <li key={index} className="py-2 px-4 hover:bg-gray-100">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default RecommendsRoutesContainer;
