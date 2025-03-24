import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiSolidVideos } from "react-icons/bi";
import VideoCard from "./VideoRouteComponents/VideoCard";
import VideoModal from "./VideoRouteComponents/VideoModal";

const VideoRouteLayout = () => {
    const [videos, setVideos] = useState([]);
    const [totalCount, setTotalCount] = useState(0); // Total items in the database
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(35);
    const [loading, setLoading] = useState(true);

    // modal functions
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState("");

    const openModal = (videoLink) => {
        setIsModalOpen(true);
        setSelectedVideo(videoLink);
    };
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => (document.body.style.overflow = "auto");
    }, [isModalOpen]);


    // Fetch videos data
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setVideos([]); // Clear old data during fetch
            try {
                const res = await axios.get(
                    `http://localhost:5000/videos?page=${currentPage - 1}&size=${itemsPerPage}`
                );
                setVideos(res?.data.videos || []);
                setTotalCount(res?.data.totalCount || 0);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage]);

    const totalPages = Math.ceil(totalCount / itemsPerPage);

    const paginate = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);

            // Scroll to the top of the page
            window.scrollTo({
                top: 0,
                behavior: "smooth", // Smooth scrolling effect
            });
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 4;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, "...", totalPages);
            } else if (currentPage > totalPages - 3) {
                pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }

        return pages;
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <span className="loading loading-bars loading-md"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto mt-10 px-3 xl:px-0">
            <div className="flex items-center gap-3 mb-5 md:mb-10">
                <h1 className="border-l-2 border-red-500 text-3xl md:text-4xl xl:text-5xl font-montserrat font-bold pl-3">
                    Videos
                </h1>
                <BiSolidVideos size={40} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {videos.map((video, index) => (
                    <VideoCard
                        openModal={() => openModal(video.video_link)}
                        key={index}
                        data={video}
                    ></VideoCard>
                ))}
                <VideoModal
                    isModalOpen={isModalOpen}
                    closeModal={closeModal}
                    selectedVideo={selectedVideo}
                ></VideoModal>
            </div>

            <div className="flex justify-center mt-8">
                <button
                    className={`px-3 py-1 mx-1 bg-gray-200 rounded ${currentPage === 1 && "opacity-50 cursor-not-allowed"}`}
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>

                {renderPageNumbers().map((page, index) => (
                    <button
                        key={index}
                        className={`px-3 py-1 mx-1 rounded ${page === currentPage
                            ? "bg-red-500 text-white"
                            : "bg-gray-200 hover:bg-gray-300"
                            }`}
                        onClick={() => (typeof page === "number" ? paginate(page) : null)}
                        disabled={page === "..."}
                    >
                        {page}
                    </button>
                ))}

                <button
                    className={`px-3 py-1 mx-1 bg-gray-200 rounded ${currentPage === totalPages && "opacity-50 cursor-not-allowed"
                        }`}
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default VideoRouteLayout;
