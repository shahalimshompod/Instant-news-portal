import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

const LatestNews = () => {
    const [latestData, setLatestData] = useState([]);

    useEffect(() => {
        const fetchLatestData = async () => {
            try {
                const res = await axios.get('https://instant-news-portal-server.vercel.app/latest-blogs');
                setLatestData(res.data);
            } catch (error) {
                setError(error);
            }
        }
        fetchLatestData()
    }, [])


    return (
        <div className='px-3 lg:px-0'>
            <div className='lg:w-[370px] border-l-0 lg:border-l-4 lg:pl-4 border-[#EFF8FA]'>
                <div>
                    <h1 className='font-caslon text-3xl font-bold hover:text-blue-600'><a href="/section/blogs">Latest</a></h1>
                    <hr className=' border-black my-3' />
                    <div className='w-full'>
                        {
                            latestData.map(data => <div className='border-b-2 mb-2' key={data._id}>
                                <h4 className='font-caslon font-bold text-xl hover:text-blue-600 mb-2'><a href={`/section/blog-details/${data._id}`}>{data.blog_title}</a></h4>
                                <p className='mb-3 text-xs font-sora'>{formatDistanceToNow(data.createdAt, { addSuffix: true })}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;