
import { useEffect, useState } from "react";
import BlogCards from "../HomeSections/home2ndSec/BlogCards";
import axios from "axios";

const MostPopularSectionForDetailsPage = () => {

    // states here 
    const [mostPopularBlogs, setMostPopularBlogs] = useState([]);

    // fetching data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://instant-news-portal-server.vercel.app/most-popular-for-details-page');
                setMostPopularBlogs(res?.data)
            } catch (error) {
                console.error('ERROR FETCHING DATA IN MostPopularSectionForDetailsPage -->', error)
            }
        }
        fetchData();
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 my-14 lg:my-20 px-3 xl:px-0">
            {
                mostPopularBlogs.map(popularData => <BlogCards key={popularData._id} data={popularData}></BlogCards>)
            }
        </div>
    );
};

export default MostPopularSectionForDetailsPage;