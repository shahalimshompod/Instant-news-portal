
import BlogCards from "../HomeSections/home2ndSec/BlogCards";

const MostPopularSectionForDetailsPage = ({ mostPopularBlogs }) => {
    
    return (
        <div className="grid grid-cols-4 gap-10 my-14 lg:my-20 px-3 xl:px-0">
            {
                mostPopularBlogs.map(popularData => <BlogCards key={popularData._id} data={popularData}></BlogCards>)
            }
        </div>
    );
};

export default MostPopularSectionForDetailsPage;