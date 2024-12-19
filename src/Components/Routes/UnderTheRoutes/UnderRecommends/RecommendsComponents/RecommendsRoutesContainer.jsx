import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const sections = {
    "Personal Finance": {
        categories: ["Credit Cards", "Banking", "Insurance", "Investing", "Loans and Mortgages"],
        editorsPicks: [
            "Cash back credit cards",
            "Business credit cards",
            "Best savings accounts",
            "Top investing platforms",
        ],
        travelRewards: [
            "Travel credit cards",
            "Low-interest loans",
            "Retirement accounts",
            "Budgeting tools",
        ],
        topPicks: [
            "6 best high-yield savings accounts",
            "Top 5 personal loan platforms",
            "4 best budgeting apps",
        ],
    },
    Shopping: {
        categories: ["Electronics", "Fashion", "Home & Kitchen", "Groceries", "Books"],
        editorsPicks: [
            "Best deals on electronics",
            "Top 10 trending fashion items",
            "Budget-friendly kitchen gadgets",
            "Seasonal grocery discounts",
        ],
        travelRewards: [
            "Cashback cards for shopping",
            "Reward points programs",
            "Exclusive shopping credit cards",
            "Gift cards offers",
        ],
        topPicks: [
            "5 best online stores for discounts",
            "Top 10 shopping apps",
            "4 must-have smart home gadgets",
        ],
    },
    Education: {
        categories: ["Courses", "Scholarships", "Books", "Online Platforms", "School Loans"],
        editorsPicks: [
            "Top free online courses",
            "Best platforms for coding",
            "Most affordable MBA programs",
            "Scholarship programs for students",
        ],
        travelRewards: [
            "Student discount cards",
            "Travel scholarships",
            "Education credit cards",
            "Career development workshops",
        ],
        topPicks: [
            "5 best apps for learning languages",
            "Top 10 online degrees for 2024",
            "4 books to improve your skills",
        ],
    },
    "Business Solutions": {
        categories: ["Software", "Marketing", "Consulting", "Finance", "Operations"],
        editorsPicks: [
            "Top CRM software for businesses",
            "Best payroll management systems",
            "Affordable consulting services",
            "Top-rated marketing platforms",
        ],
        travelRewards: [
            "Business travel cards",
            "Rewards for startups",
            "Business loans with benefits",
            "Tax-saving solutions",
        ],
        topPicks: [
            "5 best tools for remote work",
            "Top 10 business credit cards",
            "4 affordable ERP systems",
        ],
    },
};

const RecommendsRoutesContainer = () => {
    const [activeRoute, setActiveRoute] = useState("");

    return (
        <div className="relative mb-10 hidden lg:block">
            <nav>
                <ul className="flex justify-center">
                    {/* Home Route */}
                    <li>
                        <NavLink
                            to="/recommend"
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? "text-black text-lg font-caslon border-b-2 border-green-500 inline-block text-center px-3 xl:px-6"
                                    : "text-black text-lg font-caslon inline-block text-center px-3 xl:px-6"
                            }
                        >
                            HOME
                        </NavLink>
                    </li>

                    {/* Render other nav items with dropdown */}
                    {Object.keys(sections).map((key) => (
                        <li
                            key={key}
                            onMouseEnter={() => setActiveRoute(key)}
                            onMouseLeave={() => setActiveRoute("")}
                        >
                            <NavLink
                                to={`/recommend/${key.replace(" ", "-").toLowerCase()}`}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-black text-lg font-caslon border-b-2 border-green-500 inline-block text-center px-3 xl:px-6"
                                        : "text-black text-lg font-caslon inline-block text-center px-3 xl:px-6"
                                }
                            >
                                {key.toUpperCase()}
                            </NavLink>

                            {/* Dropdown for routes with content */}
                            {activeRoute === key && (
                                <div
                                    className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-base-200 shadow-xl rounded-lg p-4 w-[1200px] py-24 px-14"
                                >
                                    <div className="grid grid-cols-4 gap-6">
                                        {/* Render Categories */}
                                        <div>
                                            <h3 className="font-bold mb-2">Categories</h3>
                                            <ul>
                                                {sections[key].categories.map((item, index) => (
                                                    <li key={index} className="py-1 hover:text-green-500">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {/* Render Editors' Picks */}
                                        <div>
                                            <h3 className="font-bold mb-2">Editors' Picks</h3>
                                            <ul>
                                                {sections[key].editorsPicks.map((item, index) => (
                                                    <li key={index} className="py-1 hover:text-green-500">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {/* Render Travel Rewards */}
                                        <div>
                                            <h3 className="font-bold mb-2">Travel Rewards</h3>
                                            <ul>
                                                {sections[key].travelRewards.map((item, index) => (
                                                    <li key={index} className="py-1 hover:text-green-500">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {/* Render Top Picks */}
                                        <div>
                                            <h3 className="font-bold mb-2">Top Picks</h3>
                                            <ul>
                                                {sections[key].topPicks.map((item, index) => (
                                                    <li key={index} className="py-1 hover:text-green-500">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
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
