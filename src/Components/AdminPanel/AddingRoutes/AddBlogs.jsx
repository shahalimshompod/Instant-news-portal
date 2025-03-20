import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import JoditEditor from "jodit-react";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import useUserRole from "../Hooks/useUserRole";
import axios from "axios";
import Swal from "sweetalert2";

const AddBlogs = () => {
  const { user } = useContext(AuthContext); //getting current user email
  const { userRole } = useUserRole(user.email); //getting current user role
  console.log(userRole);
  const userMail = user.email;
  const [userData, setUserData] = useState({});

  const { email, image, name, role } = userData;

  console.log(userData);

  // fetch user data
  const fetchUserData = async () => {
    const res = await axios.get(
      `http://localhost:5000/userData?email=${userMail}`
    );
    if (res.data) {
      setUserData(res.data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userMail]);

  // variable for jodit text editor
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [resetTextEditor, setResetTextEditor] = useState(""); //state for reset text editor

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  // handle add data..
  const onSubmit = (data) => {
    const finalData = {
      ...data,
      userRole,
      userName: name,
      userEmail: user.email,
      userImage: image,
      blog_details: content,
      isPending: true,
      isApproved: false,
      isRejected: false,
      requestType: "Post",
    };

    // post req from client to database
    if (finalData && finalData.userEmail) {
      if (userRole === "Admin") {
        axios
          .post("http://localhost:5000/add-blogs-admin", finalData)
          .then((response) => {
            if (response.data.insertedId) {
              Swal.fire({
                title: "Posted!",
                text: "Blog posted successfully.",
                icon: "success",
              });
              reset();
              setResetTextEditor("");
            }
          })
          .catch((error) => {
            console.error("Error in posting blogs", error);
            Swal.fire({
              title: "Error",
              text: "Error while posting blogs",
              icon: "Error",
            });
          });
      } else {
        axios
          .post(
            "http://localhost:5000/add-blogs-others-to-approval-history",
            finalData
          )
          .then(async (response) => {
            if (response.data.insertedId) {
              const historyDataId = response.data.insertedId;

              const adminHistoryRes = await axios.post(
                "http://localhost:5000/add-blogs-to-admin-history", finalData
              );
              console.log(adminHistoryRes.data);
              if (adminHistoryRes.data.insertedId) {
                const adminHistoryDataId = adminHistoryRes.data.insertedId;
                // add to pending approval
                const res = await axios.post(
                  "http://localhost:5000/add-blogs-others",
                  { ...finalData, historyDataId, adminHistoryDataId }
                );
                if (res.data.insertedId) {
                  Swal.fire({
                    title: "Request sent!",
                    text: "Kindly Wait For Admin Approval.",
                    icon: "success",
                  });

                  reset();
                  setResetTextEditor("");
                }
              }
            }
          })
          .catch((error) => {
            console.error("Error in posting blogs", error);
            Swal.fire({
              title: "Error",
              text: "Error while posting blogs",
              icon: "Error",
            });
          });
      }
    }
  };

  return (
    <div className="p-4 md:p-8 w-full  mx-auto bg-gray-100 rounded-lg shadow-md h-full">
      <h1 className="text-2xl font-bold mb-5 font-sora">Add Blogs</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex w-full gap-4">
          {/* Blog Title */}
          <div className="w-full">
            <label className="block font-medium mb-1 font-sora">
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

          {/* blog category */}
          <div className="w-full">
            <label className="block font-medium mb-1 font-sora">
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
              <p className="text-red-500 text-xs">
                {errors.blog_photo.message}
              </p>
            )}
          </div>

          {/* Blog Photo Added By */}
          <div className="w-full">
            <label className="block font-medium mb-1 font-sora">
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
            <label className="block font-medium mb-1 font-sora">
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
            <label className="block font-medium mb-1 font-sora">
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
          </div>
        </div>

        {/* Blog details */}
        <div>
          <label className="block font-medium mb-1 font-sora">
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
          {errors.blog_details && (
            <p className="text-red-500 text-xs">
              {errors.blog_details.message}
            </p>
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
