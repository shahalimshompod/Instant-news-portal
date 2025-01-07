import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const VideoCard = ({ data, openModal }) => {
    const { video_heading, video_thumbnail, video_added_date } = data;
    const location = useLocation();
    const path = location.pathname;

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
        <div className="flex flex-col items-center justify-center bg-black/20">
            {/* Video Card */}
            <div className="shadow-md w-full h-full">
                <div
                    className="relative group h-56 cursor-pointer bg-cover bg-center rounded-t-lg"
                >
                    <img className="w-full h-full object-cover" src={video_thumbnail} alt="" />
                    {/* Play Button */}
                    <button
                        onClick={openModal}
                        className="absolute inset-0 flex items-center justify-center text-white group-hover:opacity-100 rounded-t-lg"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 border-2 rounded-full hover:bg-white/50"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14.752 11.168l-5.197-3.07A1 1 0 008 8.999v6.002a1 1 0 001.555.832l5.197-3.07a1 1 0 000-1.664z"
                            />
                        </svg>
                    </button>
                </div>
                {/* Title */}
                <div className={`${path === '/videos' ? 'line-clamp-3 text-left pt-2 px-3  font-sora' : 'line-clamp-1 text-left pt-2 px-3  font-sora'}`}>{video_heading}</div>
                {/* date */}
                <div className="text-right text-[14px] px-2 pb-2 font-bebas tracking-widest">{formatDate(video_added_date)}</div>
            </div>
        </div>
    );
};

export default VideoCard;
