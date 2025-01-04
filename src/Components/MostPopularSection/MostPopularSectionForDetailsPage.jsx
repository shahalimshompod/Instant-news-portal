
import BlogCards from "../HomeSections/home2ndSec/BlogCards";

const MostPopularSectionForDetailsPage = ({ mostPopularBlogs }) => {
    console.log(mostPopularBlogs);
    return (
        <div className="grid grid-cols-4 gap-10 my-20">
            {
                mostPopularBlogs.map(popularData => <BlogCards key={popularData._id} data={popularData}></BlogCards>)
            }
        </div>
    );
};

export default MostPopularSectionForDetailsPage;