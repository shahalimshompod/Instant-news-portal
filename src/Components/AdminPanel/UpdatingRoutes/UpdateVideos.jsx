import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import useUserRole from "../Hooks/useUserRole";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

const UpdateVideos = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dataFromAddedVideos = location.state || {};
  const [btnLoading, setBtnLoading] = useState(false);

  // Initialize form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Set default values in the form
  useEffect(() => {
    if (dataFromAddedVideos) {
      reset({
        video_heading: dataFromAddedVideos.video_heading || "",
        video_thumbnail: dataFromAddedVideos.video_thumbnail || "",
        video_link: dataFromAddedVideos.video_link || "",
      });
    }
  }, [dataFromAddedVideos, reset]);

  // Handle form submission
  const onSubmit = async (data) => {
    setBtnLoading(true);
    try {
      // Make API call to update the video
      const res = await axios.put(
        `https://instant-news-portal-server.vercel.app/update-videos/${dataFromAddedVideos._id}`,
        data
      );

      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Success",
          text: "Video updated successfully!",
          icon: "success",
        });
        navigate(`${location.state.from}`);
        setBtnLoading(false);
      } else {
        Swal.fire({
          title: "No change!",
          text: "There is nothing updated in this video!",
          icon: "info",
        });
        setBtnLoading(false);
      }
    } catch (error) {
      console.error("Error updating video:", error);
      Swal.fire({
        title: "Error",
        text: "Error while updating the video",
        icon: "error",
      });
      setBtnLoading(false);
    }
  };

  return (
    <div className="p-8 w-full mx-auto bg-gray-100 shadow-md rounded-md h-screen">
      <h1 className="text-2xl font-bold mb-5 text-gray-800 font-sora">
        Update Videos
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Video Heading */}
        <div>
          <label
            htmlFor="videoHeading"
            className="block text-sm font-medium text-gray-700 font-sora"
          >
            Video Heading
          </label>
          <input
            id="video_heading"
            {...register("video_heading", {
              required: "Video heading is required",
            })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter video heading"
          />
          {errors.video_heading && (
            <p className="text-red-500 text-sm">
              {errors.video_heading.message}
            </p>
          )}
        </div>

        {/* Video Thumbnail */}
        <div>
          <label
            htmlFor="videoThumbnail"
            className="block text-sm font-medium text-gray-700 font-sora"
          >
            Video Thumbnail (Photo Link)
          </label>
          <input
            id="video_thumbnail"
            type="url"
            {...register("video_thumbnail", {
              required: "Thumbnail link is required",
            })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter video thumbnail URL"
          />
          {errors.video_thumbnail && (
            <p className="text-red-500 text-sm">
              {errors.video_thumbnail.message}
            </p>
          )}
        </div>

        {/* Video Link */}
        <div>
          <label
            htmlFor="videoLink"
            className="block text-sm font-medium text-gray-700 font-sora"
          >
            Video Link
          </label>
          <input
            id="video_link"
            type="url"
            {...register("video_link", { required: "Video link is required" })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter video link"
          />
          {errors.video_link && (
            <p className="text-red-500 text-sm">{errors.video_link.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-3 bg-blue-600 text-white p-2 rounded-md shadow hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:ring-opacity-50 font-sora"
        >
          {btnLoading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            "Update Video"
          )}
        </button>
      </form>
    </div>
  );
};

export default UpdateVideos;
