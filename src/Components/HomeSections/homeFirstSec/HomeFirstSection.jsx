import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const HomeFirstSection = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState('')
    const navigate = useNavigate();

    const { blog_added_by, blog_added_date, blog_category, blog_details, blog_location, blog_photo, blog_title, _id } = data;

    useEffect(() => {
        const fetchOneData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/home');
                setData(response.data[0]);
            } catch (err) {
                setErr(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchOneData();
    }, [])

    // details handler
    const clickToDetails = (id) => {
        navigate(`/section/blog-details/${id}`)
    }

    // category handler
    const clickToCategory = (category) => {
        console.log(category);
        navigate(`/section/${category}`)
    }

    return (
        <div className='bg-[#EFF8FA] lg:flex items-center gap-10 lg:px-10 px-3 lg:py-5'>
            <div onClick={() => clickToDetails(_id)} className='lg:w-1/2 hover:cursor-pointer hover:opacity-90'>
                <img className="w-full" src={blog_photo} alt="Blog Photo" />
            </div>
            <div className='lg:w-1/2'>
                {/* category here */}
                <p onClick={() => clickToCategory(blog_category)} className='text-red-600 font-bebas tracking-widest font-bold mb-4 hover:underline hover:cursor-pointer w-14 text-center'>{blog_category}</p>
                <h1 onClick={() => clickToDetails(_id)} className='text-2xl lg:text-4xl 2xl:text-5xl font-caslon font-semibold mb-5 leading-tight hover:text-blue-800 hover:cursor-pointer'>${blog_title}</h1>
                <p onClick={() => clickToDetails(_id)} className='text-xl font-caslon font-light mb-5 leading-tight hover:text-blue-800 hover:cursor-pointer'>{blog_details}</p>

                <p className='font-sora text-sm font-thin'>BY <span className='font-bold'>{blog_added_by}</span></p>
                <p className='text-[#000]/50 font-sora text-sm '>{blog_added_date}</p>
            </div>
        </div>
    );
};

export default HomeFirstSection;