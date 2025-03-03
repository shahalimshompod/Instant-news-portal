import { useEffect, useState } from "react";
import axios from "axios";
import BlogCards from "../HomeSections/home2ndSec/BlogCards";

const BlogsRoute = () => {
    const [blogData, setBlogData] = useState([]);
    const [totalCount, setTotalCount] = useState(0); // Total items in the database
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(45); // Items per page
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://instant-news-portal-server.vercel.app/section/blogs?page=${currentPage - 1}&size=${itemsPerPage}`
                );
                setBlogData(response.data.blogData || []);
                setTotalCount(response.data.totalCount || 0);
            } catch (err) {
                console.error(err.message);
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
        const maxVisiblePages = 5;

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

    return (
        <section className="container mx-auto">
            <h1 className="border-l-2 border-red-500 text-2xl md:text-3xl lg:text-5xl font-sora font-bold pl-3">
                The latest
            </h1>

            {/* Blog Grid with Loader */}
            <div className="relative">
                {loading && (
                    <div className="absolute inset-0 flex justify-center items-center bg-opacity-50 bg-white z-10">
                        <span className="loading loading-bars loading-md"></span>
                    </div>
                )}
                <div className={`${loading ? "opacity-50 pointer-events-none" : "opacity-100"} transition-opacity`}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-6 md:z-10 lg:my-16">
                        {blogData.map((data) => (
                            <BlogCards key={data._id} data={data}></BlogCards>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
                <button
                    className={`px-3 py-1 mx-1 bg-gray-200 rounded ${currentPage === 1 && "opacity-50 cursor-not-allowed"
                        }`}
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
        </section>
    );
};

export default BlogsRoute;
