import MostPopularSection from "../MostPopularSection/MostPopularSection";
import BlogsRoute from "../Routes/BlogsRoute";

const BlogsLayout = () => {

    return (
        <div className="flex flex-col xl:flex-row gap-10 container mx-auto px-3 xl:px-0">
            <BlogsRoute></BlogsRoute>
            <MostPopularSection></MostPopularSection>
        </div>
    );
};

export default BlogsLayout;