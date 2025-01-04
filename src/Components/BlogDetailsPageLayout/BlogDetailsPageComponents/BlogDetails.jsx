import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BlogCards from "../../HomeSections/home2ndSec/BlogCards";
import MostPopularSectionForDetailsPage from "../../MostPopularSection/MostPopularSectionForDetailsPage";

const BlogDetails = () => {
    const [detailsData, setDetailsData] = useState({});
    const [relatedBlogData, setRelatedBlogData] = useState([])
    const [popularBlogs, setPopularBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    // console.log(detailsData);
    // destructuring details data
    const { blog_added_by, blog_added_date, blog_category, blog_details, blog_location, blog_photo, blog_title } = detailsData;

    // console.log(relatedBlogData);
    // fetching data for details page
    useEffect(() => {
        const fetchDetailsAndRelatedData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/section/blog-details/${id}`)
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

    // Loader
    if (loading) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <span className="loading loading-spinner text-error"></span>
            </div>
        );
    }
    return (
        <div className="container mx-auto my-16">
            <div className="flex items-center justify-between">
                {/* category title */}
                <div className="w-1/2">
                    {/* category */}
                    <p className="text-rose-600 font-bebas text-xl tracking-wide">{blog_category}</p>
                    {/* title */}
                    <h2 className="font-bold font-caslon text-6xl my-4">{blog_title}</h2>
                    {/* added by */}
                    <p><span className="font-bebas">BY</span> <span className="font-bebas font-bold tracking-widest">{blog_added_by}</span></p>
                    {/* date */}
                    <p className="text-xs font-sora text-black/50">{blog_added_date}</p>
                </div>

                {/* photo */}
                <div className="w-1/2">
                    {/* image */}
                    <img className="w-full" src={blog_photo} alt="Blog details image" />
                    {/* image description */}
                    <p className="text-xs font-bold font-sora">Associated Press Special Correspondent Walter R. Mears, right, talks with presidential candidate Jimmy Carter in Concord, N.H., before the New Hampshire primary election in 1976.</p>
                    <p className="text-xs font-bold font-sora">{blog_location}</p>
                </div>
            </div>
            <div className="w-8/12 mx-auto my-28">
                {/* <h2 className="font-caslon font-bold text-3xl mb-4"></h2> */}
                <div className="divider font-caslon font-bold text-3xl mb-10"><span className="border-b-4 border-red-500">Blog Details</span></div>
                {/* details blog description */}
                <div>{blog_details}</div>
            </div>

            <div>
                <div className="divider font-caslon font-bold text-3xl"><span className="border-b-4 border-red-500">Latest in {blog_category}</span></div>
                <div className="grid grid-cols-4 gap-10 my-20">
                    {
                        relatedBlogData.map(relatedData => <BlogCards key={relatedData._id} data={relatedData}></BlogCards>)
                    }
                </div>
            </div>

            <div className="divider font-caslon font-bold text-3xl mb-10"><span className="border-b-4 border-red-500">Most Popular</span></div>

            <div>
                <MostPopularSectionForDetailsPage mostPopularBlogs={popularBlogs}></MostPopularSectionForDetailsPage>
            </div>

        </div>
    );
};

export default BlogDetails;