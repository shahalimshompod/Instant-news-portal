import axios from "axios";
import { useLocation } from "react-router";

const BlogCards = ({ data }) => {
  const {
    blog_added_by,
    createdAt,
    blog_category,
    blog_photo,
    blog_title,
    _id,
  } = data;

  // news card here with category
  const location = useLocation();
  const path = location.pathname;

  // view count handler
  const viewCounts = async (id) => {
    const blogId = id;
    const res = await axios.patch(`http://localhost:5000/${id}`);
  };

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );

    const timeOptions = { hour: "numeric", minute: "2-digit", hour12: true };
    const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
      date
    );

    return { date: formattedDate, time: formattedTime };
  };

  // navigate well for well categories
  const wellCategories = ["Life", "Health", "Mind", "Food"];

  return (
    <div className="group" onClick={() => viewCounts(_id)}>
      <div className="w-full">
        {/* image */}
        <div className="mb-2 hover:cursor-pointer group-hover:brightness-75">
          <a
            href={
              wellCategories.includes(blog_category)
                ? `/well/section/blog-details/${_id}`
                : `/section/blog-details/${_id}`
            }
          >
            <img
              className="w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/9] object-cover"
              src={blog_photo}
              // src="https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Blog Photo"
            />
          </a>
        </div>
        <div>
          {path === "/section/blogs" ? (
            ""
          ) : (
            // blog category
            <a
              href={
                wellCategories.includes(blog_category)
                  ? `/well/section/${blog_category}`
                  : `/section/${blog_category}`
              }
            >
              <p className="text-red-600 text-lg font-bebas tracking-widest font-bold mb-4 hover:underline hover:cursor-pointer w-16">
                {blog_category}
              </p>
            </a>
          )}

          {/* blog title */}
          <a
            href={
              wellCategories.includes(blog_category)
                ? `/well/section/blog-details/${_id}`
                : `/section/blog-details/${_id}`
            }
          >
            <h2 className="line-clamp-4 text-lg md:text-xl lg:text-2xl font-caslon font-semibold mb-5 hover:cursor-pointer group-hover:text-blue-600">
              {blog_title}
            </h2>
          </a>

          <p className="font-montserrat text-sm font-thin">
            BY <span className="font-bold">{blog_added_by}</span>
          </p>
          <p className="text-[#000]/50 font-montserrat text-sm">
            {formatDate(createdAt).date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
