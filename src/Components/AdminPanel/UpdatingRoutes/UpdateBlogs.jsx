import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import JoditEditor from "jodit-react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import useUserRole from "../Hooks/useUserRole";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";

const UpdateBlogs = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const dataFromUpdateButton = location.state; // Data received from the previous route
  const to = location.state.from;
  const { userRole } = useUserRole(user.email);
  const userMail = user.email;
  const [btnLoading, setBtnLoading] = useState(false);

  const [userData, setUserData] = useState({});

  const { email, image, name, role } = userData;

  // fetch user data
  const fetchUserData = async () => {
    const res = await axios.get(
      `https://instant-news-portal-server.vercel.app/userData?email=${userMail}`
    );
    if (res.data) {
      setUserData(res.data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userMail]);

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
    const id = dataFromUpdateButton._id;

    const finalUpdatingData = {
      blog_id: id,
      blog_title: data.blog_title,
      blog_category: data.blog_category,
      blog_photo: data.blog_photo,
      blog_photo_added_by: data.blog_photo_added_by,
      blog_added_by: data.blog_added_by,
      blog_photo_description: data.blog_photo_description,
      blog_details: resetTextEditor,
      createdAt: dataFromUpdateButton.createdAt,
      userRole: userRole,
      userName: name,
      userEmail: userMail,
      userImage: image,
      isPending: true,
      isApproved: false,
      isRejected: false,
      requestType: "Update",
    };

    try {
      const updatedData = {
        ...data,
        blog_details: content,
      };

      if (userRole === "Admin") {
        setBtnLoading(true);
        const response = await axios.put(
          `https://instant-news-portal-server.vercel.app/update-blogs-admin/${id}`,
          updatedData
        );
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Blog updated successfully.",
            icon: "success",
          });
          navigate(`${to}`);
          setBtnLoading(false);
        } else {
          Swal.fire({
            title: "No Changes",
            text: "No data was updated.",
            icon: "info",
          });
        }
      } else {
        setBtnLoading(true);
        const response = await axios.post(
          "https://instant-news-portal-server.vercel.app/add-blogs-others-to-approval-history",
          finalUpdatingData
        );
        if (response.data.insertedId) {
          const historyDataId = response.data.insertedId;

          const adminHistoryRes = await axios.post(
            "https://instant-news-portal-server.vercel.app/add-blogs-to-admin-history",
            finalUpdatingData
          );

          if (adminHistoryRes.data.insertedId) {
            const adminHistoryDataId = adminHistoryRes.data.insertedId;
            // add to pending approval
            const res = await axios.post(
              "https://instant-news-portal-server.vercel.app/add-blogs-others",
              { ...finalUpdatingData, historyDataId, adminHistoryDataId }
            );
            if (res.data.insertedId) {
              Swal.fire({
                title: "Update Request sent!",
                text: "Kindly Wait For Admin Approval.",
                icon: "success",
              });

              reset();
              setResetTextEditor("");
              setBtnLoading(false);
            }
          }
          navigate(`${to}`);
        }
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "Error while updating blogs",
        icon: "error",
      });
      setBtnLoading(false);
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
        blog_photo_description:
          dataFromUpdateButton.blog_photo_description || "",
      });
      setContent(dataFromUpdateButton.blog_details || "");
      setResetTextEditor(dataFromUpdateButton.blog_details || "");
    }
  }, [dataFromUpdateButton, reset]);

  return (
    <div className="p-4 w-full mx-auto bg-gray-100 rounded-lg shadow-md h-full">
      <h1 className="text-2xl font-bold mb-5 font-montserrat">Update Blogs</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex w-full gap-4">
          {/* Blog Title */}
          <div className="w-full">
            <label className="block font-medium mb-1 font-montserrat">
              Blog Title{" "}
              <span className="text-black/40">
                (Must begin with a capital letter)
              </span>
            </label>
            <input
              {...register("blog_title", {
                required: "Blog title is required",
              })}
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter blog title"
            />
            {errors.blog_title && (
              <p className="text-red-500 text-xs">
                {errors.blog_title.message}
              </p>
            )}
          </div>

          {/* Blog Category */}
          <div className="w-full">
            <label className="block font-medium mb-1 font-montserrat">
              Blog Category
            </label>
            <select
              {...register("blog_category", {
                required: "Category is required",
              })}
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
              <p className="text-red-500 text-xs">
                {errors.blog_category.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Blog Image */}
          <div className="w-full">
            <label className="block font-medium mb-1 font-montserrat">
              Blog Image <span className="text-black/40">(URL)</span>
            </label>
            <input
              {...register("blog_photo", { required: "Image is required" })}
              type="Url"
              placeholder="Blog Image link"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.blog_photo && (
              <p className="text-red-500 text-xs">
                {errors.blog_photo.message}
              </p>
            )}
          </div>

          {/* Blog Photo Added By */}
          <div className="w-full">
            <label className="block font-medium mb-1 font-montserrat">
              Photo Added By{" "}
              <span className="text-black/40">
                (Must begin with a capital letter)
              </span>
            </label>
            <input
              {...register("blog_photo_added_by", {
                required: "Photo authorization is required",
              })}
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter photographer name"
            />
            {errors.blog_photo_added_by && (
              <p className="text-red-500 text-xs">
                {errors.blog_photo_added_by.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Blog Added By */}
          <div className="w-full">
            <label className="block font-medium mb-1 font-montserrat">
              Blog Added By{" "}
              <span className="text-black/40">
                (Must begin with a capital letter)
              </span>
            </label>
            <input
              {...register("blog_added_by", {
                required: "Author name is required",
              })}
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter author name"
            />
            {errors.blog_added_by && (
              <p className="text-red-500 text-xs">
                {errors.blog_added_by.message}
              </p>
            )}
          </div>

          {/* Blog Photo Description */}
          <div className="w-full">
            <label className="block font-medium mb-1 font-montserrat">
              Photo Description
            </label>
            <input
              {...register("blog_photo_description", {
                required: "Photo description is required",
              })}
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter photo description"
            />
            {errors.blog_photo_description && (
              <p className="text-red-500 text-xs">
                {errors.blog_photo_description.message}
              </p>
            )}
          </div>
        </div>

        {/* Blog Details */}
        <div>
          <label className="block font-medium mb-1 font-montserrat">
            Blog Description
          </label>
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
            {btnLoading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "Update Blogs"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlogs;
