import React from 'react';
import DOMPurify from 'dompurify';

const LatestCardInSearch = ({ data }) => {
    // navigate well for well categories
    const wellCategories = ['Life', 'Health', 'Mind', 'Food'];

    // Function to format the date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    // sanitize the html for blog details
    const sanitizedHTML = DOMPurify.sanitize(data.blog_details);

    return (
        <div className="border-b flex items-center justify-between gap-3 w-11/12 pb-5 lg:pb-10 mt-5 mx-auto">
            <div className='w-9/12'>
                {/* blog category */}
                <a href={wellCategories.includes(data?.blog_category)
                    ? `/well/section/${data?.blog_category}`
                    : `/section/${data?.blog_category}`}><p className='text-xl font-bebas text-red-600'>{data?.blog_category}</p>
                </a>
                <a href={wellCategories.includes(data?.blog_category)
                    ? `/well/section/blog-details/${data?._id}`
                    : `/section/blog-details/${data?._id}`}>
                    <h3 className='text-lg md:text-2xl font-caslon font-bold'>{data?.blog_title}</h3>
                </a>

                <a href={wellCategories.includes(data?.blog_category)
                    ? `/well/section/blog-details/${data?._id}`
                    : `/section/blog-details/${data?._id}`}>
                    <p className='text-black/50 font-sora line-clamp-1 md:line-clamp-2 flex items-center'><span>{formatDate(data?.createdAt)}</span> - <span><span dangerouslySetInnerHTML={{ __html: sanitizedHTML }} /></span></p>
                </a>


            </div>
            <div className="w-44 h-28 md:w-52 md:h-32">
                <a href={wellCategories.includes(data?.blog_category)
                    ? `/well/section/blog-details/${data?._id}`
                    : `/section/blog-details/${data?._id}`}>
                    <img
                        className="w-full h-full object-cover"
                        src={data.blog_photo}
                        alt="Latest Blogs"
                    />
                </a>

            </div>
        </div>
    );
};

export default LatestCardInSearch;