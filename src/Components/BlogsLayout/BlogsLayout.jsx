import MostPopularSection from "../MostPopularSection/MostPopularSection";
import BlogsRoute from "../Routes/BlogsRoute";

const BlogsLayout = () => {
    
    return (
        <div className="flex gap-10 container mx-auto">
           <BlogsRoute></BlogsRoute>
           <MostPopularSection></MostPopularSection>
        </div>
    );
};

export default BlogsLayout;