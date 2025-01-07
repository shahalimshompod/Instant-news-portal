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

    // modal related states
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState('');

    const openModal = (videoLink) => {
        setIsModalOpen(true);
        setSelectedVideo(videoLink)
    }
    const closeModal = () => setIsModalOpen(false);

    // Disable scrolling when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup on component unmount
        return () => (document.body.style.overflow = "auto");
    }, [isModalOpen]);


    var settings = {
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


    // videos data fetching 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/video-section');
                setVideos(res?.data);
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, [settings])


    return (
        <div className="container mx-auto my-28 z-50 px-3 xl:px-0">
            <div className="flex items-center justify-between border-b border-black pb-3  mb-5">
                <h1 className="font-caslon font-bold text-3xl lg:text-5xl">Video Gallery</h1>
                <a href="/videos">
                    <div className="flex items-center gap-2 hover:text-blue-600 font-sora">
                        <p className="text-sm lg:text-xl">Show more</p>
                        <FaArrowRight />
                    </div>
                </a>
            </div>
            <div className="overflow-x-hidden">
                <Slider {...settings}>
                    {
                        videos.map((video, index) => <VideoCard openModal={() => openModal(video.video_link)} key={index} data={video}></VideoCard>)
                    }
                </Slider>
            </div>
            <VideoModal isModalOpen={isModalOpen} closeModal={closeModal} selectedVideo={selectedVideo}></VideoModal>
        </div>
    );
};

export default HomeSectionVideoLayout;