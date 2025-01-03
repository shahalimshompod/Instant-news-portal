import BlogCards from "../HomeSections/home2ndSec/BlogCards";

const CategoryWiseHomeBlogSectionLayout = ({ category, dataForBlogs }) => {

    // console.log(category);
    console.log(dataForBlogs);

    return (
        <div className="container mx-auto mb-44">
            <h1 className="font-caslon font-bold text-5xl my-10 border-b border-black pb-3">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            <div className="grid grid-cols-4 gap-10">
                {
                    dataForBlogs.map(blogData => <BlogCards key={blogData._id} data={blogData}></BlogCards>)
                }
            </div>
        </div>
    );
};

export default CategoryWiseHomeBlogSectionLayout;