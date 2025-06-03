import { useEffect, useState } from "react";
import NewsLetterCards from "./NewsLetterCards";
import axios from "axios";

const NewsLetterSection = () => {


    const [newslettersCardsData, setNewslettersCardsData] = useState([]);
    const [] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://instant-news-portal-server.vercel.app/newsletters')
                setNewslettersCardsData(res.data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, [])


    return (
        <div className="bg-black px-3 lg:px-10 py-3 lg:py-8 container mx-auto mt-20">
            <a href="/section/Newsletters">
                <h1 className="text-white font-bold font-caslon text-3xl lg:text-4xl mb-4">Newsletters</h1>
            </a>
            <hr className="mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    newslettersCardsData.map((data, index) => <NewsLetterCards key={data._id} data={data} index={index}></NewsLetterCards>)
                }
            </div>
        </div>
    );
};

export default NewsLetterSection;