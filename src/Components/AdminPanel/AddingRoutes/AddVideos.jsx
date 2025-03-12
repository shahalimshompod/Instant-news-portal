import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthContextProvider/AuthContextProvider';
import useUserRole from '../Hooks/useUserRole';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddVideos = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;
    const { userRole } = useUserRole(email);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const videoData = {
                ...data,
                userEmail: email,
                userRole
            }

            if (videoData && videoData.userEmail) {
                const res = await axios.post('http://localhost:5000/add-videos', videoData);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Posted!",
                        text: "Video posted successfully.",
                        icon: "success",
                    });
                    reset();
                }
            }
        } catch (error) {
            console.error("error posting videos", error)
            Swal.fire({
                title: "Error",
                text: "Error while posting blogs",
                icon: "Error",
            });
        }
        // Handle form submission logic here
    };

    return (
        <div className="p-8 w-full mx-auto bg-gray-100 shadow-md rounded-md h-screen">
            <h1 className="text-2xl font-bold mb-5 text-gray-800 font-sora">Add Videos</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* video heading */}
                <div>
                    <label htmlFor="videoHeading" className="block text-sm font-medium text-gray-700 font-sora">
                        Video Heading
                    </label>
                    <input
                        id="video_heading"
                        {...register('video_heading', { required: 'Video heading is required' })}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter video heading"
                    />
                    {errors.video_heading && <p className="text-red-500 text-sm">{errors.video_heading.message}</p>}
                </div>


                {/* video thumbnail */}
                <div>
                    <label htmlFor="videoThumbnail" className="block text-sm font-medium text-gray-700 font-sora">
                        Video Thumbnail (Photo Link)
                    </label>
                    <input
                        id="video_thumbnail"
                        type="url"
                        {...register('video_thumbnail', { required: 'Thumbnail link is required' })}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter video thumbnail URL"
                    />
                    {errors.video_thumbnail && <p className="text-red-500 text-sm">{errors.video_thumbnail.message}</p>}
                </div>

                <div>
                    <label htmlFor="videoLink" className="block text-sm font-medium text-gray-700 font-sora">
                        Video Link
                    </label>
                    <input
                        id="video_link"
                        type="url"
                        {...register('video_link', { required: 'Video link is required' })}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter video link"
                    />
                    {errors.video_link && <p className="text-red-500 text-sm">{errors.video_link.message}</p>}
                </div>

                <button
                    type="submit"
                    className="px-3 bg-blue-600 text-white p-2 rounded-md shadow hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:ring-opacity-50 font-sora"
                >
                    Add Video
                </button>
            </form>
        </div>
    );
};

export default AddVideos;
