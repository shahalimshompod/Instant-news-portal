import React from 'react';

const LatestCardInSearch = ({ data }) => {

    // Function to format the date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };
    return (
        <div className="border-b flex items-center justify-between gap-3 w-11/12 pb-5 lg:pb-10 mt-5 mx-auto">
            <div className='w-9/12'>
                <p className='text-xl font-bebas text-red-600'>{data.blog_category}</p>
                <h3 className='text-lg md:text-2xl font-caslon font-bold mb-4 line-clamp-3'>{data.blog_title}</h3>
                <p className='text-black/50 font-sora hidden lg:block'>{formatDate(data.blog_added_date)} - {data.blog_details}</p>
            </div>
            <div className="w-52 h-32">
                <img
                    className="w-full h-full object-cover"
                    src={data.blog_photo}
                    alt="Latest Blogs"
                />
            </div>
        </div>
    );
};

export default LatestCardInSearch;