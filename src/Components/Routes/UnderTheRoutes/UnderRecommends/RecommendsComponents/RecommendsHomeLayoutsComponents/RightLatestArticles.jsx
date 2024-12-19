const RightLatestArticles = () => {

    const articles = [
        {
            id: 1,
            title: 'Current price of Bitcoin as of December 13, 2024',
            author: 'Kat Tretina',
        },
        {
            id: 2,
            title: 'Current price of gold as of December 13, 2024',
            author: 'Kimberlee Leonard',
        },
        {
            id: 3,
            title: 'Current mortgage rates as of Dec. 13, 2024: Rates rise slightly, heading toward 6.7%',
            author: 'Glen Luke Flanagan',
        },
        {
            id: 4,
            title: 'Best savings account interest rates today, December 13, 2024: you can still get a 5% APY',
            author: 'Abigail Rueger',
        },
        {
            id: 5,
            title: 'CD rates today, December 13, 2024; short-term CDs still have high APYs',
            author: 'Abigail Rueger',
        },
    ];

    return (
        <div className="max-w-md mx-auto lg:p-4 order-2 lg:order-none mb-5 lg:mb-0">
            <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4 font-caslon">Latest Articles</h2>
            <div className="space-y-4">
                {articles.map((article) => (
                    <div key={article.id} className="flex items-start space-x-4 border-b pb-2">
                        <p className="text-4xl font-bold text-black/50 font-caslon">{article.id}</p>
                        <div className="space-y-1">
                            <h3 className="text-base font-semibold text-gray-900 font-sora">{article.title}</h3>
                            <p className="text-sm text-gray-600">
                                BY <span className="text-gray-900 font-bold font-bebas tracking-widest">{article.author}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RightLatestArticles;