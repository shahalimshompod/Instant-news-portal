import axios from "axios";
import { useEffect, useState } from "react";

const MostPopularSection = () => {
    const [mostPopularBlogs, setMostPopularBlogs] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/most-popular');
                setMostPopularBlogs(res?.data);
            } catch (err) {
                console.log('ERROR FETCHING DATA IN MOST POPULAR BLOGS --> ', err);
            }
        }
        fetchData();
    }, [])

    return (
        <div className='px-3 lg:px-0 my-72'>
            <div className='lg:w-[370px] border-l-0 lg:border-l-4 pl-4'>
                <div>
                    <h1 className='font-caslon text-3xl font-bold'>Most Popular</h1>
                    <hr className=' border-black my-3' />
                    <div className='w-full'>
                        {
                            mostPopularBlogs.map(data =>
                                <div className="border-b-2 mb-3" key={data._id}>
                                    <a href={`/section/${data.blog_category}`}><p className="font-bebas text-red-600 hover:underline">{data.blog_category}</p></a>
                                    <a href={`/section/blog-details/${data._id}`}>
                                        <div className="flex items-center justify-between mb-5">
                                            <h4 className='font-caslon text-xl font-bold hover:text-blue-600'>{data.blog_title}</h4>
                                            <img className="w-1/3 hover:opacity-75" src={data.blog_photo} alt="blog photo" />
                                        </div>
                                    </a>
                                    <p className='text-black/60 font-sora text-xs'>{data.blog_added_date}</p>
                                    <p className='mb-5 font-bebas text-xl'>By <span>{data.blog_added_by}</span></p>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostPopularSection;