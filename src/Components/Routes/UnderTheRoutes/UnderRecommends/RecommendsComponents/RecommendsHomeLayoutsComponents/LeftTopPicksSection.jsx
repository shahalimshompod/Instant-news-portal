const LeftTopPicksSection = () => {
    const articles = [
        {
            category: 'BANKING',
            title: 'Best high-yield savings account rates: Updated daily',
            author: 'Abigail Rueger',
            date: 'December 13, 2024',
        },
        {
            category: 'BANKING',
            title: 'The 10 best CD rates for December 2024: Earn up to 4.45%',
            author: 'Abigail Rueger',
            date: 'December 13, 2024',
        },
        {
            category: 'BANKING',
            title: 'Best savings accounts of December 2024: Compare rates, fees, and more',
            author: 'Abigail Rueger',
            date: 'December 13, 2024',
        },
        {
            category: 'LOANS',
            title: '5 best credit repair companies—and what they do well',
            author: 'Jessica Ullrich',
            date: 'November 14, 2024',
        },
    ];

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4 font-caslon">Top Picks</h2>
            <div className="space-y-4 mr-4">
                {articles.map((article, index) => (
                    <div key={index} className="space-y-1">
                        <p className="text-green-600 text-lg font-bold font-bebas tracking-widest">{article.category}</p>
                        <h3 className="text-lg font-semibold text-gray-900 font-sora">{article.title}</h3>
                        <p className="text-sm text-gray-600 font-bebas tracking-widest">
                            BY <span className="text-gray-900 font-bold">{article.author}</span>
                        </p>
                        <p className="text-sm text-gray-500 font-light">{article.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeftTopPicksSection;