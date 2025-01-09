import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import BlogCards from "../../HomeSections/home2ndSec/BlogCards";
import MostPopularSectionForDetailsPage from "../../MostPopularSection/MostPopularSectionForDetailsPage";
import RelatedBlogs from "../../MostPopularSection/RelatedBlogs";
import DOMPurify from 'dompurify';

const BlogDetails = () => {
    const [detailsData, setDetailsData] = useState({});
    const [relatedBlogData, setRelatedBlogData] = useState([])
    const [popularBlogs, setPopularBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();
    // destructuring details data
    const { blog_photo_added_by, blog_photo_description, blog_added_by, createdAt, blog_category, blog_details, blog_photo, blog_title, _id } = detailsData;

    useEffect(() => {
        if (!loading && id !== _id) {
            return navigate('/not-found')
        }
    }, [id, navigate, _id, loading])

    // fetching data for details page
    useEffect(() => {
        const fetchDetailsAndRelatedData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/blog-details/${id}`)
                setDetailsData(res.data.selectedBlogForDetails);
                setRelatedBlogData(res.data.relatedBlogs);
                setPopularBlogs(res.data.popularBlogs);
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchDetailsAndRelatedData();
    }, [])

    // sanitize the html for blog details
    const sanitizeHTML = DOMPurify.sanitize(blog_details);

    // date formatting
    const formatDate = (isoDateString) => {
        const date = new Date(isoDateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

        const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
        const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);

        return { date: formattedDate, time: formattedTime };
    };

    // Loader
    if (loading) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <span className="loading loading-bars loading-md"></span>
            </div>
        );
    }


    return (
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-10 justify-between">
                {/* category title */}
                <div className="xl:w-1/2 w-full mb-4 xl:mb-0 px-3 xl:px-0">
                    {/* category */}
                    <p className="text-rose-600 font-bebas text-xl tracking-wide">{blog_category}</p>
                    {/* title */}
                    <h2 className="font-bold font-caslon text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl my-4">{blog_title}</h2>
                    {/* added by */}
                    <p><span className="font-bebas">BY</span> <span className="font-bebas font-bold tracking-widest">{blog_added_by}</span></p>
                    {/* date */}
                    <p className="text-xs font-sora text-black/50">{formatDate(createdAt).date} at {formatDate(createdAt).time}</p>
                </div>

                {/* photo */}
                <div className="xl:w-1/2 w-full">
                    {/* image */}
                    <img className="w-full mb-4 xl:mb-0" src={blog_photo} alt="Blog details image" />
                    {/* image description */}
                    <div className="px-3 xl:px-0">
                        <p className="text-xs font-bold font-sora mb-2">{blog_photo_description}</p>
                        <p className="text-xs font-bold font-sora">{blog_photo_added_by}</p>
                    </div>
                </div>
            </div>
            <div className="divider font-caslon font-bold text-3xl mt-16 mb-10">
                <span className="border-b-4 border-red-500">Blog Details</span>
            </div>
            <div className="xl:w-8/12 mx-auto px-3 xl:px-0">
                {/* details blog description */}
                <div dangerouslySetInnerHTML={{ __html: sanitizeHTML }} />
            </div>

            <div className="mt-14">
                <div className="divider font-caslon font-bold text-3xl"><span className="border-b-4 border-red-500">Latest in {blog_category}</span></div>
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 my-14 lg:my-20 px-3 xl:px-0">
                    {
                        relatedBlogData.map(relatedData => <BlogCards key={relatedData._id} data={relatedData}></BlogCards>)
                    }
                </div>
            </div>

            <div className="divider font-caslon font-bold text-3xl mb-10"><span className="border-b-4 border-red-500">Most Popular</span></div>

            <div>
                <MostPopularSectionForDetailsPage mostPopularBlogs={popularBlogs}></MostPopularSectionForDetailsPage>
            </div>

            <div className="divider font-caslon font-bold text-3xl mb-10"><span className="border-b-4 border-red-500">Related Blogs</span></div>

            <div>
                <RelatedBlogs mostPopularBlogs={popularBlogs}></RelatedBlogs>
            </div>

        </div>
    );
};

export default BlogDetails;