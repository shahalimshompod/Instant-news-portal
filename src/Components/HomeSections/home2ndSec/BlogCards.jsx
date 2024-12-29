import { useLocation } from "react-router";

const BlogCards = ({ data }) => {
    const {blog_added_by, blog_added_date, blog_category, blog_details, blog_location, blog_photo, blog_title, _id} = data;
    console.table(data);
    // news card here with category
    const location = useLocation();
    const path = location.pathname;
    return (
        <div>
            <div className='w-full'>
                <div className='mb-2'>
                    <img src="https://i.ibb.co.com/12HZwPM/Getty-Images-2184329067-e1732106649612.jpg" alt="" />
                </div>
                <div>
                    {
                        path === '/' && (<p className='text-red-600 text-lg font-bebas tracking-widest font-bold mb-4'>{blog_category}</p>)
                    }
                    <h2 className='text-2xl font-caslon font-semibold mb-5'>{blog_title}</h2>
                    <p className='font-sora text-sm font-thin'>BY <span className='font-bold'>{blog_added_by}</span></p>
                    <p className='text-[#000]/50 font-sora text-sm '>{blog_added_date}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCards;