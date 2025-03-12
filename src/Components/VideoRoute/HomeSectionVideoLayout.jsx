import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "./VideoRouteComponents/VideoCard";
import VideoModal from "./VideoRouteComponents/VideoModal";
import { FaArrowRight } from "react-icons/fa6";

const HomeSectionVideoLayout = () => {
    const [videos, setVideos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState("");

    // Fetch videos on component mount
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const { data } = await axios.get("http://localhost:5000/video-section");
                setVideos(data);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };
        fetchVideos();
    }, []);

    // Modal handlers
    const openModal = (videoLink) => {
        setSelectedVideo(videoLink);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedVideo("");
        setIsModalOpen(false);
    };

    // Prevent scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [isModalOpen]);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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

    return (
        <div className="container mx-auto my-28 px-3 xl:px-0">
            <div className="flex items-center justify-between border-b border-black pb-3 mb-5">
                <h1 className="font-caslon font-bold text-3xl lg:text-5xl">Video Gallery</h1>
                <a href="/videos" className="flex items-center gap-2 hover:text-blue-600 font-sora">
                    <p className="text-sm lg:text-xl">Show more</p>
                    <FaArrowRight />
                </a>
            </div>
            <div className="overflow-hidden">
                <Slider {...sliderSettings}>
                    {videos.map((video, index) => (
                        <VideoCard
                            key={index}
                            data={video}
                            openModal={() => openModal(video.video_link)}
                        />
                    ))}
                </Slider>
            </div>
            {isModalOpen && (
                <VideoModal
                    isModalOpen={isModalOpen}
                    closeModal={closeModal}
                    selectedVideo={selectedVideo}
                />
            )}
        </div>
    );
};

export default HomeSectionVideoLayout;
