import React, { useEffect, useState } from 'react';
import BlogCards from '../../HomeSections/home2ndSec/BlogCards';
import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';

const AllBlogs = () => {

    const [allBlogsData, setAllBlogsData] = useState([]);

    // slick settings
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 578,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // fetching for latest
    useEffect(() => {
        const fetchLatestData = async () => {
            try {
                const res = await axios.get('https://instant-news-portal-server.vercel.app/all-blog-Data');
                setAllBlogsData(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchLatestData()
    }, [settings])


    return (
        <div className="container mx-auto z-50 px-3 xl:px-0">
            <div className="flex items-center justify-between border-b border-black pb-3  mb-5">
                <h1 className="font-caslon font-bold text-3xl lg:text-5xl">Blogs Gallery ({allBlogsData.length})</h1>
                <a href="/section/blogs">
                    <div className="flex items-center gap-2 hover:text-blue-600 font-sora">
                        <p className="text-sm lg:text-xl">Show more</p>
                        <FaArrowRight />
                    </div>
                </a>
            </div>
            <div className="overflow-x-hidden">
                <Slider {...settings}>
                    {
                        allBlogsData.map((data, index) => <BlogCards key={index} data={data}></BlogCards>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default AllBlogs;