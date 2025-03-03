import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import JoditEditor from "jodit-react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateBlogs = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const dataFromUpdateButton = location.state; // Data received from the previous route
    const to = location.state.from;

    // Variable for Jodit text editor
    const editor = useRef(null);
    const [content, setContent] = useState("");
    const [resetTextEditor, setResetTextEditor] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Handle form submission
    const onSubmit = async (data) => {
        try {
            const id = dataFromUpdateButton._id;

            const updatedData = {
                ...data,
                blog_details: content,
            }

            const response = await axios.put(`https://instant-news-portal-server.vercel.app/update-blogs/${id}`, updatedData);
            if (response.data.modifiedCount > 0) {
                Swal.fire({
                    title: "Updated!",
                    text: "Blog updated successfully.",
                    icon: "success",
                });
                navigate(`${to}`)
            } else {
                Swal.fire({
                    title: "No Changes",
                    text: "No data was updated.",
                    icon: "info",
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: "Error",
                text: "Error while updating blogs",
                icon: "error",
            });
        } finally {

        }
    };

    // Set default values using useEffect
    useEffect(() => {
        if (dataFromUpdateButton) {
            reset({
                blog_title: dataFromUpdateButton.blog_title || "",
                blog_category: dataFromUpdateButton.blog_category || "",
                blog_photo: dataFromUpdateButton.blog_photo || "",
                blog_photo_added_by: dataFromUpdateButton.blog_photo_added_by || "",
                blog_added_by: dataFromUpdateButton.blog_added_by || "",
                blog_photo_description: dataFromUpdateButton.blog_photo_description || "",
            });
            setContent(dataFromUpdateButton.blog_details || "");
            setResetTextEditor(dataFromUpdateButton.blog_details || "");
        }
    }, [dataFromUpdateButton, reset]);





    return (
        <div className="p-4 w-full mx-auto bg-gray-100 rounded-lg shadow-md h-full">
            <h1 className="text-2xl font-bold mb-5 font-sora">Update Blogs</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex w-full gap-4">
                    {/* Blog Title */}
                    <div className="w-full">
                        <label className="block font-medium mb-1 font-sora">
                            Blog Title <span className="text-black/40">(Must begin with a capital letter)</span>
                        </label>
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

                    {/* Blog Category */}
                    <div className="w-full">
                        <label className="block font-medium mb-1 font-sora">Blog Category</label>
                        <select
                            {...register("blog_category", { required: "Category is required" })}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select a category</option>
                            <option value="Politics">Politics</option>
                            <option value="Education">Education</option>
                            <option value="Health">Health</option>
                            <option value="Life">Life</option>
                            <option value="Mind">Mind</option>
                            <option value="Explore">Explore</option>
                            <option value="Travel">Travel</option>
                            <option value="Newsletters">Newsletters</option>
                            <option value="Tech">Tech</option>
                            <option value="AI">AI</option>
                            <option value="Personality">Personality</option>
                            <option value="Magazine">Magazine</option>
                        </select>
                        {errors.blog_category && (
                            <p className="text-red-500 text-xs">{errors.blog_category.message}</p>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* Blog Image */}
                    <div className="w-full">
                        <label className="block font-medium mb-1 font-sora">
                            Blog Image <span className="text-black/40">(URL)</span>
                        </label>
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

                    {/* Blog Photo Added By */}
                    <div className="w-full">
                        <label className="block font-medium mb-1 font-sora">
                            Photo Added By <span className="text-black/40">(Must begin with a capital letter)</span>
                        </label>
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
                </div>

                <div className="flex items-center gap-4">
                    {/* Blog Added By */}
                    <div className="w-full">
                        <label className="block font-medium mb-1 font-sora">
                            Blog Added By <span className="text-black/40">(Must begin with a capital letter)</span>
                        </label>
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
                    <div className="w-full">
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
                </div>

                {/* Blog Details */}
                <div>
                    <label className="block font-medium mb-1 font-sora">Blog Description</label>
                    <JoditEditor
                        ref={editor}
                        value={resetTextEditor}
                        onChange={(newContent) => {
                            setContent(newContent);
                            setResetTextEditor(newContent);
                        }}
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                    >
                        Update Blogs
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateBlogs;
