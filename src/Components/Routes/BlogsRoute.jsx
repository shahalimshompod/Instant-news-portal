import { useContext } from "react";
import { DataContext } from "../fetchDataContext/DataContextProvider";
import BlogCards from "../HomeSections/home2ndSec/BlogCards";

const BlogsRoute = () => {
    const [blogData] = useContext(DataContext);
    console.log(blogData);
    return (
        <section className="container mx-auto">
            <h1 className="border-l-2 border-red-500 text-6xl font-caslon">The latest ({blogData.length})</h1>
            <div>
                <div className="grid grid-cols-3 gap-3">
                    {
                        blogData.map(data => <BlogCards key={blogData._id} data={data}></BlogCards>)
                    }
                </div>
                <div>
                    
                </div>
            </div>
        </section>
    );
};

export default BlogsRoute;