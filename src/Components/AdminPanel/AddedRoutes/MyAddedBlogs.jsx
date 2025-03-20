import { MdDeleteForever, MdOpenInNew } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import { useNavigate } from "react-router";
import useUserRole from "../Hooks/useUserRole";
import Swal from "sweetalert2";

const MyAddedBlogs = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const userMail = user.email;
  const { userRole } = useUserRole(userMail);
  const [loading, setLoading] = useState(true);
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

  const [myPost, setMyPosts] = useState([]);
  const [page, setPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(1); // Total pages
  

  const limit = 10; // Number of blogs per page

  // fetching data for my posted blogs route
  useEffect(() => {
    const fetchLatestData = async () => {
      try {
        const res = await axios.get(`https://instant-news-portal-server.vercel.app/my-posted-blogs`, {
          params: {
            email: userMail,
            page: page,
            limit: limit,
          },
        });
        setMyPosts(res.data.blogs); // Setting blogs
        setTotalPages(res.data.totalPages); // Setting total pages
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLatestData();
  }, [userMail, page]);

  // date formatting
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

  // handle delete blogs
  const handleDelete = async (data) => {
    console.log(data);
    const finalDeletingData = {
      blog_id: data._id,
      blog_title: data.blog_title,
      blog_category: data.blog_category,
      blog_photo: data.blog_photo,
      blog_photo_added_by: data.blog_photo_added_by,
      blog_added_by: data.blog_added_by,
      blog_photo_description: data.blog_photo_description,
      blog_details: data.blog_details,
      createdAt: data.createdAt,
      userRole: role,
      userName: name,
      userEmail: userMail,
      userImage: image,
      isPending: true,
      isApproved: false,
      isRejected: false,
      requestType: "Delete",
    };

    if (userRole === "Admin") {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await axios.delete(
              `https://instant-news-portal-server.vercel.app/delete-blog/${id}`
            );

            if (res.data.deletedCount > 0) {
              const restPostToShow = myPost.filter((post) => id !== post._id);
              setMyPosts([...restPostToShow]);

              Swal.fire({
                title: "Deleted!",
                text: "Post has been deleted from all places",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "Post could not be deleted!",
                icon: "error",
              });
            }
          } catch (error) {
            console.error("Delete request failed:", error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while deleting the post.",
              icon: "error",
            });
          }
        }
      });
    } else {
      if (finalDeletingData) {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const res = await axios.post(
                "https://instant-news-portal-server.vercel.app/add-blogs-others-to-approval-history",
                finalDeletingData
              );

              if (res.data.insertedId) {
                console.log(res.data);

                const historyDataId = res.data.insertedId;
                const response = await axios.post(
                  "https://instant-news-portal-server.vercel.app/add-blogs-to-admin-history",
                  finalDeletingData
                );

                if (response.data.insertedId) {
                  console.log(response.data);
                  const adminHistoryDataId = response.data.insertedId;
                  const responseToPendingApproval = await axios.post(
                    "https://instant-news-portal-server.vercel.app/add-blogs-others",
                    { ...finalDeletingData, historyDataId, adminHistoryDataId }
                  );
                }

                Swal.fire({
                  title: "Deleted!",
                  text: "Post has been deleted from all places",
                  icon: "success",
                });
              } else {
                Swal.fire({
                  title: "Error!",
                  text: "Post could not be deleted!",
                  icon: "error",
                });
              }
            } catch (error) {
              console.error("Delete request failed:", error);
              Swal.fire({
                title: "Error!",
                text: "Something went wrong while deleting the post.",
                icon: "error",
              });
            }
          }
        });
      }
    }
  };

  // update button click func for update route
  // handle click update button
  const handleClickToUpdateRoute = (data) => {
    const dataToSend = {
      ...data,
      from: `/${import.meta.env.VITE_urlSecret}/admin-dashboard/my-added-blogs`,
    };
    navigate(
      `/${import.meta.env.VITE_urlSecret}/admin-dashboard/update-blogs`,
      { state: dataToSend }
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <span className="loading loading-bars loading-md"></span>
      </div>
    );
  }

  const wellCategories = ["Life", "Health", "Mind", "Food"]; //for redirecting

  return (
    <div className="px-2 my-5">
      <h1 className="text-center text-3xl text-black font-sora mb-5 uppercase">
        Your posted blogs
      </h1>
      <table className="table-auto w-full">
        <thead>
          <tr className="hidden lg:grid lg:grid-cols-4 border">
            <th className="border py-3">Blog title</th>
            <th className="border py-3">Blog Added By</th>
            <th className="border py-3">Blog views and clicks</th>
            <th className="border py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {myPost.map((post, index) => (
            <tr
              key={index}
              className="lg:grid lg:grid-cols-4 items-center border py-1 flex flex-col lg:flex-row"
            >
              {/* Blog Title */}
              <td className="flex flex-col lg:flex-row items-center lg:gap-3 py-3 lg:py-0">
                <div className="avatar mb-2 lg:mb-0">
                  <div className="mask h-24 w-36">
                    <img
                      className="rounded-xl"
                      src="https://i.ibb.co.com/12HZwPM/Getty-Images-2184329067-e1732106649612.jpg"
                      alt="Blog"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-bebas text-base text-red-600">
                    {post.blog_category}
                  </p>
                  <div className="font-bold mb-2 text-lg line-clamp-2">
                    {post.blog_title}
                  </div>
                  <p className="font-sora text-xs">
                    {formatDate(post.createdAt).date} |{" "}
                    {formatDate(post.createdAt).time}
                  </p>
                </div>
              </td>
              {/* Blog Added By */}
              <td className="text-center mb-2 lg:mb-0">
                <div className="lg:hidden font-bold">Added By</div>
                <div className="flex items-center flex-col gap-2">
                  <span className="border px-3 rounded-lg text-base font-bold py-1 font-sora">
                    {userRole}
                  </span>
                  <span className="badge badge-ghost badge-sm font-sora">
                    {post.userEmail}
                  </span>
                </div>
              </td>
              {/* Blog Views */}
              <td className="text-center mb-2 lg:mb-0">
                <p className="font-sora text-base">
                  {post.blog_viewCount || 0} views
                </p>
              </td>
              {/* Actions */}
              <td className="flex gap-3 items-center justify-center">
                <button
                  onClick={() => handleClickToUpdateRoute(post)}
                  data-tip="Update"
                  className="btn lg:tooltip btn-circle bg-transparent border-none shadow-none hover:bg-transparent hover:text-green-500"
                >
                  <GrUpdate size={20} />
                </button>

                <button
                  onClick={() => handleDelete(post)}
                  data-tip="Delete"
                  className="btn btn-circle bg-transparent lg:tooltip border-none shadow-none hover:bg-transparent hover:text-red-500"
                >
                  <MdDeleteForever size={25} />
                </button>

                <button
                  data-tip="View Details"
                  className="btn btn-circle bg-transparent lg:tooltip border-none shadow-none hover:bg-transparent hover:text-red-500"
                >
                  <a
                    href={
                      wellCategories.includes(post.blog_category)
                        ? `/well/section/blog-details/${post._id}`
                        : `/section/blog-details/${post._id}`
                    }
                  >
                    <MdOpenInNew size={25} />
                  </a>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-5">
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-primary mr-3"
        >
          Previous
        </button>
        <span className="font-bold">
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage(page + 1)}
          className="btn btn-primary ml-3"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyAddedBlogs;
