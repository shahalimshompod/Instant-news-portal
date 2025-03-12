import axios from "axios";
import { useEffect, useState } from "react";
import BlogCards from "../../HomeSections/home2ndSec/BlogCards";
import AllBlogs from "./AllBlogs";

const Dashboard = () => {

    const [latestData, setLatestData] = useState([]);

    // fetching for latest
    useEffect(() => {
        const fetchLatestData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/latest-blogs');
                setLatestData(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchLatestData()
    }, [])

    // fetching for most popular
    const [mostPopularBlogs, setMostPopularBlogs] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/most-popular-for-dashboard');
                setMostPopularBlogs(res?.data);
            } catch (err) {
                console.error('ERROR FETCHING DATA IN MOST POPULAR BLOGS --> ', err);
            }
        }
        fetchData();
    }, [])


    return (
        <div className="px-10 my-10 w-full">

            {/* all blogs section slider */}
            <div className="mb-10">
                <AllBlogs></AllBlogs>
            </div>

            {/* latest section */}
            <div className="mb-10">
                <div className="mb-4">
                    <h1 className="font-sora font-bold text-3xl">Today's Latest</h1>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    {
                        latestData.map((data, index) => <BlogCards key={index} data={data}></BlogCards>)
                    }
                </div>
            </div>

            {/* most popular section */}
            <div>
                <div className="mb-4">
                    <h1 className="font-sora font-bold text-3xl">Most Popular</h1>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    {
                        mostPopularBlogs.map((data, index) => <BlogCards key={index} data={data}></BlogCards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;