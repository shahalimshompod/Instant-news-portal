import axios from "axios";

const NewsLetterCards = ({ data, index }) => {
  const { blog_title, blog_added_by, blog_category, _id } = data;

  // view count handler
  const viewCounts = async (id) => {
    const blogId = id;
    const res = await axios.patch(`http://localhost:5000/${id}`);
  };

  return (
    <div
      onClick={() => viewCounts(_id)}
      className={`text-white lg:h-5/6 mr-5 mb-5 lg:mb-10 border-b border-white pb-4 lg:pb-0 ${
        index < 3 ? "lg:border-b" : "lg:border-none"
      }`}
    >
      {/* h3 and p tags will be wrapped by the Link tag later for routing */}
      <h2 className="font-bebas text-2xl">
        <a href={`/section/${blog_category}`}>{blog_category}</a>
      </h2>
      <p className="text-lg font-montserrat w-5/6 mb-3">
        <a href={`/section/blog-details/${_id}`}>{blog_title}</a>
      </p>
      <p className="text-sm font-semibold">
        By{" "}
        <span className="font-bebas text-base tracking-widest">
          {blog_added_by}
        </span>
      </p>
    </div>
  );
};

export default NewsLetterCards;
