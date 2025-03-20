import { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import LatestNews from "./LatestNews";
import axios from "axios";

const HomeSecondSec = () => {
    const [featuredBlogs, setFeaturedBlogs] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)


    // fetching data
    useEffect(() => {
        const FetchFeaturedBlogsData = async () => {
            try {
                const response = await axios.get('https://instant-news-portal-server.vercel.app/featured-blogs')
                setFeaturedBlogs(response.data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false);
            }
        }
        FetchFeaturedBlogsData();
    }, [])

    // Loader
    if (loading) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <span className="loading loading-bars loading-md"></span>
            </div>
        );
    }


    return (
        <div className="w-full">
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-14 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 px-3 gap-10 lg:px-0 w-full">
                    {
                        featuredBlogs.slice(0, 3).map(data => <BlogCards key={data._id} data={data}></BlogCards>)
                    }
                </div>
                <div>
                    <LatestNews></LatestNews>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-3 gap-10 lg:px-0">
                {
                    featuredBlogs.slice(3, 15).map(data => <BlogCards key={data._id} data={data} ></BlogCards>)
                }
            </div>
        </div>
    );
};

export default HomeSecondSec;