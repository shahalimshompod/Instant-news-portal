import BlogCards from "../HomeSections/home2ndSec/BlogCards";

const CategoryWiseHomeBlogSectionLayout = ({ category, dataForBlogs }) => {

    const wellCategories = ['Life', 'Health', 'Mind', 'Food'];

    return (
        <div className="container mx-auto mb-10 md:mb-16  lg:mb-20 px-3">
            <a href={wellCategories.includes(category)
                ? `/well/section/${category}`
                : `/section/${category}`
            }>
                <h1 className="font-caslon font-bold text-3xl lg:text-5xl my-10 border-b border-black pb-3">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            </a>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
                {
                    dataForBlogs.map(blogData => <BlogCards key={blogData._id} data={blogData}></BlogCards>)
                }
            </div>
        </div>
    );
};

export default CategoryWiseHomeBlogSectionLayout;