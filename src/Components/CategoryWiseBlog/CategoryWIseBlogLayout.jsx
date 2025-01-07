import { useNavigate, useParams } from "react-router";
import CategoryWiseBlogs from "./CategoryWiseBlogs";
import { useEffect, useState } from "react";
import axios from "axios";
import MostPopularSection from "../MostPopularSection/MostPopularSection";

const CategoryWiseBlogLayout = () => {
    const [blogData, setBlogData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(45); // Items per page
    const [loading, setLoading] = useState(true);
    const { category } = useParams();
    const navigate = useNavigate();

    const confirmedCategories = [
        'Life', 'Health', 'Mind', 'Food', 'Tech',
        'Explore', 'Travel', 'Education', 'Politics',
        'Newsletters', 'Ai', 'Personality', 'Magazine'
    ];

    useEffect(() => {
        const lowerCaseCategories = confirmedCategories.map(cat => cat.toLowerCase());
        if (!lowerCaseCategories.includes(category.toLowerCase())) {
            return navigate('/not-found');
        }
    }, [navigate, category, confirmedCategories]);

    // Fetching data dynamically for different categories with pagination
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(
                    `http://localhost:5000/section/${category}?page=${currentPage - 1}&size=${itemsPerPage}`
                );
                setBlogData(res.data.blogData || []);
                setTotalCount(res.data.totalCount || 0);
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [category, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(totalCount / itemsPerPage);

    const paginate = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);

            // Scroll to top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Loader
    if (loading) {
        return (
            <div className="flex justify-center items-center h-[70vh]">
                <span className="loading loading-bars loading-md"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto flex flex-col xl:flex-row gap-10 px-3 xl:px-0">
            <CategoryWiseBlogs
                blogData={blogData}
                currentPage={currentPage}
                totalPages={totalPages}
                paginate={paginate}
                loading={loading}
            />
            <MostPopularSection />
        </div>
    );
};

export default CategoryWiseBlogLayout;
