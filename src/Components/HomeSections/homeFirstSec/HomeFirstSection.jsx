import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import DOMPurify from 'dompurify';


const HomeFirstSection = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    const { blog_added_by, createdAt, blog_category, blog_details, blog_photo, blog_title, _id } = data;

    useEffect(() => {
        const fetchOneData = async () => {
            try {
                const response = await axios.get(`${location.pathname === '/well' ? 'http://localhost:5000/well/home' : 'http://localhost:5000/home'}`);
                setData(response?.data[0]);
            } catch (err) {
                console.error("error fetching HomeFirstSection data -->", err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchOneData();
    }, [])


    // navigate well for well categories
    const wellCategories = ['Life', 'Health', 'Mind', 'Food'];

    // date formatting
    const formatDate = (isoDateString) => {
        const date = new Date(isoDateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

        const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
        const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);

        return { date: formattedDate, time: formattedTime };
    };

    // sanitize the html for blog details
    const sanitizeHTML = DOMPurify.sanitize(blog_details);



    // Loader
    if (loading) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <span className="loading loading-bars loading-md"></span>
            </div>
        );
    }

    return (
        <div className={`group ${location.pathname === '/well' ? 'flex-col bg-transparent items-start lg:px-0 lg:py-0' : 'bg-[#EFF8FA] lg:flex items-center gap-10 lg:px-10 px-3 lg:py-5'}`}>

            {/* photo */}
            <div className={`hover:cursor-pointer group-hover:brightness-75 ${location.pathname === '/well' ? 'lg:w-full first-letter:mb-4' : 'lg:w-1/2'}`}>
                <a href={wellCategories.includes(blog_category)
                    ? `/well/section/blog-details/${_id}`
                    : `/section/blog-details/${_id}`}>
                    <img className="w-full" src={blog_photo} alt="Blog Photo" />
                </a>
            </div>

            <div className={`${location.pathname === '/well' ? 'lg:w-full' : 'lg:w-1/2'}`}>
                {/* category here */}
                <a href={wellCategories.includes(blog_category)
                    ? `/well/section/${blog_category}`
                    : `/section/${blog_category}`
                }><p className={` ${location.pathname === '/well' ? 'text-red-600 font-bebas tracking-widest font-bold mb-4 hover:underline hover:cursor-pointer w-14  text-left' : 'text-red-600 font-bebas tracking-widest font-bold mb-4 hover:underline hover:cursor-pointer w-14 text-center'}`}>{blog_category}</p></a>

                <a href={wellCategories.includes(blog_category)
                    ? `/well/section/blog-details/${_id}`
                    : `/section/blog-details/${_id}`}>
                    <h1 className='text-2xl lg:text-4xl 2xl:text-5xl font-caslon font-semibold mb-5 leading-tight group-hover:text-blue-600 hover:cursor-pointer'>{blog_title}</h1>
                    <p className='text-[14px] md:text-base font-sora font-light mb-5 leading-tight hover:text-blue-600 hover:cursor-pointer line-clamp-4'><div dangerouslySetInnerHTML={{ __html: sanitizeHTML }} /></p>
                </a>

                <p className='font-sora text-sm font-thin'>BY <span className='font-bold'>{blog_added_by}</span></p>
                <p className='text-[#000]/50 font-sora text-sm '>{formatDate(createdAt).date}</p>
            </div>
        </div>
    );
};

export default HomeFirstSection;