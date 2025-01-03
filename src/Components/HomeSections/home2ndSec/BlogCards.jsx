import { useLocation, useNavigate } from "react-router";

const BlogCards = ({ data }) => {
    const { blog_added_by, blog_added_date, blog_category, blog_photo, blog_title, _id } = data;

    // news card here with category
    const location = useLocation();
    const path = location.pathname;
    const navigate = useNavigate();

    // details handler
    const clickToDetails = (id) => {
        navigate(`/section/blog-details/${id}`)
    }

    

    return (
        <div>
            <div className='w-full'>
                <div className='mb-2 hover:cursor-pointer hover:opacity-90'>
                    <a href={`/section/blog-details/${_id}`}><img
                        className="w-full lg:h-48 2xl:h-64 object-cover"
                        src={blog_photo}
                        alt="Blog Photo"
                    /></a>
                </div>
                <div>
                    {
                        path === '/' && (
                            <a href={`/section/${blog_category}`}><p className='text-red-600 text-lg font-bebas tracking-widest font-bold mb-4 hover:underline hover:cursor-pointer w-16 text-center'>
                                {blog_category}
                            </p>
                            </a>
                        )
                    }
                    <a href={`/section/blog-details/${_id}`}>
                    <h2
                        className='text-2xl font-caslon font-semibold mb-5 hover:cursor-pointer hover:text-blue-800'
                    >
                        {blog_title}
                    </h2>
                    </a>
                    <p className='font-sora text-sm font-thin'>
                        BY <span className='font-bold'>{blog_added_by}</span>
                    </p>
                    <p className='text-[#000]/50 font-sora text-sm'>
                        {blog_added_date}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogCards;
