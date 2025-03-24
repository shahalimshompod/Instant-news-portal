import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import Swal from "sweetalert2";
import useUserRole from "../Hooks/useUserRole";
import { BsFillPostcardFill } from "react-icons/bs";
import ApprovalRequestModal from "../ApprovalRequestModal/ApprovalRequestModal";

const ApprovalRequests = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const [loading, setLoading] = useState(true);
  const { userRole } = useUserRole(email);
  // const currentRole = userRole;
  const [btnLoader, setBtnLoader] = useState(true);
  const [selectedReq, setSelectedReq] = useState(null);
  const closeModal = () => setSelectedReq(null);

  const [othersPost, setOthersPosts] = useState([]);
  const [page, setPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(1); // Total pages

  const limit = 10; // Number of blogs per page

  // fetching data for my posted blogs route

  const fetchLatestData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/approval-req`, {
        params: {
          email: email,
          page: page,
          limit: limit,
        },
      });

      setOthersPosts(res.data.blogs); // Setting blogs
      setTotalPages(res.data.totalPages); // Setting total pages
      setLoading(false);
      setBtnLoader(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLatestData();
  }, [email, page]);

  // date formatting
  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const options = { year: "numeric", month: "long", day: "numeric" }; // Example: 1 January, 2025
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );

    const timeOptions = { hour: "numeric", minute: "2-digit", hour12: true }; // Example: 10:00 PM
    const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
      date
    );

    return { date: formattedDate, time: formattedTime };
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
      <h1 className="text-center text-3xl text-black font-montserrat mb-5 uppercase">
        Approval Requests
      </h1>
      <table className="table-auto w-full">
        <thead>
          <tr className="hidden lg:grid lg:grid-cols-4 border">
            <th className="border py-3">Blog title</th>
            <th className="border py-3">Blog Added By</th>
            <th className="border py-3">Requested For</th>
            <th className="border py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {othersPost.map((post, index) => (
            <tr
              key={index}
              className="lg:grid lg:grid-cols-4 items-center border py-1 flex flex-col lg:flex-row"
            >
              {/* Blog Title */}
              <td className="flex flex-col lg:flex-row items-center lg:gap-3 py-3 lg:py-0">
                <div className="avatar mb-2 lg:mb-0">
                  <div className="mask h-24 w-36">
                    {/* <img
                      className="rounded-xl"
                      src="https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"
                      alt="Blog"
                    /> */}
                    <img
                      className="rounded-xl"
                      src={post.blog_photo}
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
                  <p className="font-montserrat text-xs">
                    {formatDate(post.createdAt).date} |{" "}
                    {formatDate(post.createdAt).time}
                  </p>
                </div>
              </td>
              {/* Blog Added By */}
              <td className="text-center mb-2 lg:mb-0">
                <div className="lg:hidden font-bold">Added By</div>
                <div className="flex items-center flex-col gap-2">
                <span className="text-base font-bold font-montserrat">
                    {post.userName}
                  </span>
                  <span className="border px-3 rounded-lg text-base font-bold py-1 font-montserrat">
                    {post.userRole}
                  </span>
                  <span className="badge badge-ghost badge-sm font-montserrat">
                    {post.userEmail}
                  </span>
                </div>
              </td>
              {/* Blog Views */}
              <td className="text-center mb-2 lg:mb-0">
                <p className="font-montserrat text-base border w-1/4 rounded bg-slate-100 shadow-lg mx-auto">
                  {post.requestType || "N/A"}
                </p>
              </td>

              {/* Actions */}
              {btnLoader ? (
                "Loading..."
              ) : (
                <td className="flex gap-3 items-center justify-center">
                  <button
                    onClick={() => setSelectedReq(post)}
                    data-tip="View Details"
                    className="btn btn-circle bg-transparent lg:tooltip border-none shadow-none hover:bg-transparent hover:text-green-500"
                  >
                    <BsFillPostcardFill size={30} />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div>
        {othersPost.length > 10 && (
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
        )}
      </div>
      <ApprovalRequestModal
        selectedReq={selectedReq}
        setSelectedReq={setSelectedReq}
        closeModal={closeModal}
        fetchLatestData={fetchLatestData}
      />
    </div>
  );
};

export default ApprovalRequests;
