import React, { useState } from "react";

const CollapsibleSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const target = document.querySelector(event.target.getAttribute("href")); // Get the target element using href
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start", // Scrolls to the top of the element
            });
        } else {
            console.error("Target not found!");
        }
    };

    return (
        <div className="w-full mx-auto mt-4">
            {/* Header with Toggle Button */}
            <div
                className="flex items-center justify-between bg-gray-900 text-white rounded-t-xl p-4 cursor-pointer"
                onClick={toggleSection}
            >
                <h2 className="font-bold text-lg">Chapters</h2>
                <button
                    className={`transition-transform transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {/* Collapsible Content */}
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"}`}
            >
                <ul className="bg-gray-800 text-white p-4 space-y-2 rounded-b-xl">

                    <li onClick={handleScroll} className="mt-2 border-b border-white/20 pb-2 font-sora text-base"> <a href="#para_1" >1. Research Your Destination</a></li>


                    <li onClick={handleScroll} className="mt-2 border-b border-white/20 pb-2 font-sora text-base"><a href="#para_2" >2. Create a Flexible Itinerary</a></li>



                    <li onClick={handleScroll} className="mt-2 border-b border-white/20 pb-2 font-sora text-base"><a href="#para_3" >3. Pack Smart and Light</a></li>



                    <li onClick={handleScroll} className="mt-2 border-b border-white/20 pb-2 font-sora text-base"><a href="#para_4" >4. Use Travel Organizers</a></li>



                    <li onClick={handleScroll} className="mt-2 border-b border-white/20 pb-2 font-sora text-base"><a href="#para_5" >5. Secure Important Documents</a></li>



                    <li onClick={handleScroll} className="mt-2 border-b border-white/20 pb-2 font-sora text-base"><a href="#para_6" >6. Invest in Travel Insurance</a></li>



                    <li onClick={handleScroll} className="mt-2 border-b border-white/20 pb-2 font-sora text-base"><a href="#para_7" >7. Stay Hydrated and Eat Wisely</a></li>



                    <li onClick={handleScroll} className="mt-2 border-b border-white/20 pb-2 font-sora text-base"><a href="#para_8" >8. Learn Basic Phrases of the Local Language</a></li>



                    <li onClick={handleScroll} className="mt-2 border-b border-white/20 pb-2 font-sora text-base"><a href="#para_9" >9. Use Public Transport</a></li>



                    <li onClick={handleScroll} className="mt-2 border-b border-white/20 pb-2 font-sora text-base"><a href="#para_10" >10. Keep Your Valuables Safe</a></li>



                    <li onClick={handleScroll} className="mt-2 border-b border-white/20 pb-2 font-sora text-base"><a href="#para_11" >11. Carry a Universal Adapter and Power Bank</a></li>



                    <li onClick={handleScroll} className="mt-2 border-b border-white/20 pb-2 font-sora text-base"><a href="#para_12" >12. Be Mindful of Local Customs</a></li>



                    <li onClick={handleScroll} className="mt-2 border-b border-white/20 pb-2 font-sora text-base"><a href="#para_13" >13. Budget and Track Expenses</a></li>



                    <li onClick={handleScroll} className="mt-2 border-b border-white/20 pb-2 font-sora text-base"><a href="#para_14" >14. Keep Emergency Contacts Handy</a></li>



                    <li onClick={handleScroll} className="mt-2 font-sora text-base"><a href="#para_15" >15. Capture Memories but Stay Present</a></li>

                </ul>
            </div>
        </div>
    );
};

export default CollapsibleSection;
