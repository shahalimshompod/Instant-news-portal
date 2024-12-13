import React from "react";
import { Link } from "react-router";
import { FaChartPie, FaBitcoin, FaPhoneAlt, FaWallet } from "react-icons/fa"; // Importing Font Awesome icons
import { MdSavings } from "react-icons/md"; // Importing Material Design icons
import { HiOutlineUserGroup } from "react-icons/hi"; // Importing Heroicons

const RoundupSection = () => {
    const items = [
        { label: "CD Rates", icon: <FaChartPie /> }, // Font Awesome
        { label: "Cash advance apps", icon: <FaWallet /> }, // Font Awesome
        { label: "VOIP", icon: <FaPhoneAlt /> }, // Font Awesome
        { label: "Bitcoin IRA", icon: <FaBitcoin /> }, // Font Awesome
        { label: "HYSA", icon: <MdSavings /> }, // Material Design
        { label: "CRM", icon: <HiOutlineUserGroup /> }, // Heroicons
    ];

    return (
        <div className="bg-green-50 py-8 px-4 rounded-xl">
            <h2 className="text-2xl font-semibold text-left font-caslon mb-6">Explore our roundups</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mx-auto">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        className="bg-[#015D45]/80 text-white rounded-lg flex flex-col items-center justify-center p-4 hover:bg-[#015D45] transition duration-300"
                    >
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <p className="text-2xl font-bebas font-medium text-center">{item.label}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RoundupSection;
