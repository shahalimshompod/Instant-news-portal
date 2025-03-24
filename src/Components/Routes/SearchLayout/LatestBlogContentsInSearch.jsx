import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LatestCardInSearch from './LatestCardInSearch';

const LatestBlogContentsInSearch = () => {
    const [latestData, setLatestData] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const fetchLatestData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/latest-blogs-in-search');
                setLatestData(res.data);
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        fetchLatestData()
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
        <div className='mt-24 mb-16 w-full'>
            <div className="divider font-caslon text-xl md:text-2xl lg:text-3xl font-bold md:pt-8">Latest Blogs</div>
            <div className='mt-10'>
                {
                    latestData.map((data, index) => <LatestCardInSearch key={index} data={data}></LatestCardInSearch>)
                }
            </div>
        </div>
    );
};

export default LatestBlogContentsInSearch;
