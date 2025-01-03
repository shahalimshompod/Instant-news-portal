import BlogCards from "../HomeSections/home2ndSec/BlogCards";

const CategoryWiseBlogs = ({blogData}) => {

    return (
        <section className="container mx-auto">
            <h1 className="border-l-2 border-red-500 text-6xl font-sora font-bold pl-3">{blogData[0]?.blog_category}</h1>
            <div>
                <div className="grid grid-cols-3 gap-10 my-16">
                    {
                        blogData.map(data => <BlogCards key={data._id} data={data}></BlogCards>)
                    }
                </div>
                <div>

                </div>
            </div>
        </section>
        // <h1>hii</h1>
    );
};

export default CategoryWiseBlogs;