import BlogCards from "../HomeSections/home2ndSec/BlogCards";

const CategoryWiseBlogs = ({ blogData, currentPage, totalPages, paginate, loading }) => {
    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, "...", totalPages);
            } else if (currentPage > totalPages - 3) {
                pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }

        return pages;
    };



    return (
        <section className="container mx-auto">
            <h1 className="border-l-2 border-red-500 text-3xl md:text-4xl xl:text-5xl font-montserrat font-bold pl-3 mt-10">
                {blogData[0]?.blog_category}
            </h1>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
                    {blogData.map(data => (
                        <BlogCards key={data._id} data={data}></BlogCards>
                    ))}
                </div>
                {/* Pagination Controls */}
                <div className="flex justify-center mt-8">
                    <button
                        className={`px-3 py-1 mx-1 bg-gray-200 rounded ${currentPage === 1 && "opacity-50 cursor-not-allowed"}`}
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>

                    {renderPageNumbers().map((page, index) => (
                        <button
                            key={index}
                            className={`px-3 py-1 mx-1 rounded ${page === currentPage ? "bg-red-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                            onClick={() => (typeof page === "number" ? paginate(page) : null)}
                            disabled={page === "..."}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        className={`px-3 py-1 mx-1 bg-gray-200 rounded ${currentPage === totalPages && "opacity-50 cursor-not-allowed"}`}
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CategoryWiseBlogs;
