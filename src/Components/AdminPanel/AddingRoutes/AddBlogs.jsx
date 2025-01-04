import React from "react";
import { useForm } from "react-hook-form";

const AddBlogs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="p-4 md:p-8 w-full  mx-auto bg-gray-100 rounded-lg shadow-md h-full">
            <h1 className="text-2xl font-bold mb-5 font-sora">Add Blogs</h1>


            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <div className="flex w-full gap-4">
                    {/* Blog Title */}
                    <div className="w-full">
                        <label className="block font-medium mb-1 font-sora">Blog Title <span className="text-black/40">(Must begin with a capital letter)</span></label>
                        <input
                            {...register("blog_title", { required: "Blog title is required" })}
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter blog title"
                        />
                        {errors.blog_title && (
                            <p className="text-red-500 text-xs">{errors.blog_title.message}</p>
                        )}
                    </div>


                    {/* Blog Subheading */}
                    <div className="w-full">
                        <label className="block font-medium mb-1 font-sora">Blog Subheading</label>
                        <input
                            {...register("blog_subheading", { required: "Blog subheading is required" })}
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter blog subheading"
                        />
                        {errors.blog_subheading && (
                            <p className="text-red-500 text-xs">{errors.blog_subheading.message}</p>
                        )}
                    </div>
                </div>


                {/* Blog Added By */}
                <div>
                    <label className="block font-medium mb-1 font-sora">Blog Added By <span className="text-black/40">(Must begin with a capital letter)</span></label>
                    <input
                        {...register("blog_added_by", { required: "Author name is required" })}
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter author name"
                    />
                    {errors.blog_added_by && (
                        <p className="text-red-500 text-xs">{errors.blog_added_by.message}</p>
                    )}
                </div>


                {/* Blog Photo Description */}
                <div>
                    <label className="block font-medium mb-1 font-sora">Photo Description</label>
                    <input
                        {...register("blog_photo_description", { required: "Photo description is required" })}
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter photo description"
                    />
                    {errors.blog_photo_description && (
                        <p className="text-red-500 text-xs">{errors.blog_photo_description.message}</p>
                    )}
                </div>


                {/* Blog Photo Added By */}
                <div>
                    <label className="block font-medium mb-1 font-sora">Photo Added By <span className="text-black/40">(Must begin with a capital letter)</span></label>
                    <input
                        {...register("blog_photo_added_by", { required: "Photo authorization is required" })}
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter photographer name"
                    />
                    {errors.blog_photo_added_by && (
                        <p className="text-red-500 text-xs">{errors.blog_photo_added_by.message}</p>
                    )}
                </div>


                {/* Blog Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium mb-1 font-sora">Blog Date</label>
                        <input
                            {...register("blog_added_date", { required: "Date is required" })}
                            type="date"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.blog_added_date && (
                            <p className="text-red-500 text-xs">{errors.blog_added_date.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block font-medium mb-1 font-sora">Blog Category</label>
                        <select
                            {...register("blog_category", { required: "Category is required" })}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select a category</option>
                            <option value="technology">Technology</option>
                            <option value="lifestyle">Lifestyle</option>
                            <option value="business">Business</option>
                        </select>
                        {errors.blog_category && (
                            <p className="text-red-500 text-xs">{errors.blog_category.message}</p>
                        )}
                    </div>
                </div>


                {/* Blog Image */}
                <div>
                    <label className="block font-medium mb-1 font-sora">Blog Image <span className="text-black/40">(URL)</span></label>
                    <input
                        {...register("blog_photo", { required: "Image is required" })}
                        type="Url"
                        placeholder="Blog Image link"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {errors.blog_photo && (
                        <p className="text-red-500 text-xs">{errors.blog_photo.message}</p>
                    )}
                </div>


                {/* Blog Description */}
                <div>
                    <label className="block font-medium mb-1 font-sora">Blog Description</label>
                    <textarea
                        {...register("blog_details", { required: "Description is required" })}
                        rows="6"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Write blog description..."
                    ></textarea>
                    {errors.blog_details && (
                        <p className="text-red-500 text-xs">{errors.blog_details.message}</p>
                    )}
                </div>


                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                    >
                        Add Blog
                    </button>
                </div>

            </form>
        </div>
    );
};

export default AddBlogs;
