import NewsLetterCards from "./NewsLetterCards";

const NewsLetterSection = () => {

    // fake data for this section
    const newslettersCardsData = [
        {
            id: 1,
            title: "THE TRUST FACTOR",
            description:
                "How Office Depot’s president builds trust with shoppers in a digital world",
            author: "NICK ROCKEL",
        },
        {
            id: 2,
            title: "MPW DAILY",
            description:
                "The companies betting on male birth control step closer to approval—and into an uncertain political chapter",
            author: "NINA AJEMIAN",
        },
        {
            id: 3,
            title: "CHRO DAILY",
            description:
                "Don’t overlook middle-aged workers—nearly 80% are actively learning new professional skills",
            author: "EMMA BURLEIGH AND BRIT MORSE",
        },
        {
            id: 4,
            title: "TERM SHEET",
            description:
                "How one e-commerce focused founder, Yiqi Wu of Aimerce, is thinking about Black Friday",
            author: "ALLIE GARFINKLE",
        },
        {
            id: 5,
            title: "CFO DAILY",
            description:
                "How Carrier is delivering more for shareholders than Microsoft, Alphabet, and Apple",
            author: "SHERYL ESTRADA",
        },
        {
            id: 6,
            title: "DATA SHEET",
            description: "Lina Khan’s November surprise for Microsoft",
            author: "DAVID MEYER",
        },
    ];


    return (
        <div className="bg-black px-3 lg:px-10 py-3 lg:py-8 container mx-auto mt-20">
            <h1 className="text-white font-bold font-caslon text-4xl">Newsletters</h1>
            <hr className="mb-6" />
            <div className="grid grid-cols-1 lg:grid-cols-3 ">
                {
                    newslettersCardsData.map( (data, index) => <NewsLetterCards key={data.id} data={data} index={index}></NewsLetterCards>)
                }
            </div>
        </div>
    );
};

export default NewsLetterSection;