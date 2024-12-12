const DropdownCard = () => {
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

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(sections).map(([title, content]) => (
                <div key={title} className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-green-500 text-xl font-bold mb-4">{title}</h3>
                    <div className="mb-4">
                        <h4 className="font-semibold text-black mb-2">Categories</h4>
                        <ul>
                            {content.categories.map((item, index) => (
                                <li key={index} className="text-black text-sm mb-1">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h4 className="font-semibold text-black mb-2">Editor's Picks</h4>
                        <ul>
                            {content.editorsPicks.map((item, index) => (
                                <li key={index} className="text-black text-sm mb-1">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h4 className="font-semibold text-black mb-2">Travel Rewards</h4>
                        <ul>
                            {content.travelRewards.map((item, index) => (
                                <li key={index} className="text-black text-sm mb-1">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-black mb-2">Top Picks</h4>
                        <ul>
                            {content.topPicks.map((item, index) => (
                                <li key={index} className="text-black text-sm mb-1">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#"
                            className="text-green-500 text-sm font-bold mt-2 inline-block hover:underline"
                        >
                            Explore all articles &rarr;
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DropdownCard;
