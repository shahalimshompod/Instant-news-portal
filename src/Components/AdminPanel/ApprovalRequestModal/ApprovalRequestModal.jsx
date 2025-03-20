import React, { useContext, useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { FiClock } from "react-icons/fi";
import axios from "axios";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import RejectionFeedbackModal from "../RejectionFeedbackModal/RejectionFeedbackModal";
import Swal from "sweetalert2";

const ApprovalRequestModal = ({ selectedReq, closeModal, fetchLatestData }) => {
  // open feedback modal while rejection
  const [isRejectionModalOpen, setIsRejectionModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsRejectionModalOpen(!isRejectionModalOpen);
    // closeModal()
  };

  const { user } = useContext(AuthContext);
  const approverEmail = user.email;
  const [userData, setUserData] = useState({});

  const { email, image, name, role } = userData;

  // fetch user data
  const fetchUserData = async () => {
    const res = await axios.get(
      `http://localhost:5000/userData?email=${approverEmail}`
    );
    if (res.data) {
      setUserData(res.data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [approverEmail]);

  if (!selectedReq) {
    return null;
  }

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

  const {
    _id,
    blog_added_by,
    blog_category,
    blog_details,
    blog_photo,
    blog_photo_added_by,
    blog_photo_description,
    blog_title,
    createdAt,
    isPending,
    requestType,
    userEmail,
    userRole,
    historyDataId,
    adminHistoryDataId,
    userName,
    blog_id,
  } = selectedReq;

  // data posted to real database of blogs after approve the post
  const approvedData = {
    blog_title,
    blog_category,
    blog_photo,
    blog_photo_added_by,
    blog_added_by,
    blog_photo_description,
    userRole,
    userEmail,
    blog_details,
  };

  // data posted to approval history
  const approvalHistoryData = {
    approvedBy: name,
    approverMail: email,
    approverImage: image,
    approverRole: role,
    isApproved: true,
    isPending: false,
  };

  // handle approve
  const handleApproval = async () => {
    const postBlogRes = await axios.post(
      "http://localhost:5000/approve-blog-post",
      approvedData
    );

    if (postBlogRes.data.insertedId) {
      const postBlogToHistoryRes = await axios.patch(
        `http://localhost:5000/approval-history/${historyDataId}`,
        approvalHistoryData
      );

      if (postBlogToHistoryRes.data.message) {
        // patch to admin history
        const postBlogToAdminHistoryRes = await axios.patch(
          `http://localhost:5000/admin-approval-history/${adminHistoryDataId}`,
          approvalHistoryData
        );

        if (postBlogToAdminHistoryRes.data.message) {
          const clearApprovalRequest = await axios.delete(
            `http://localhost:5000/delete-after-approval/${_id}`
          );

          if (clearApprovalRequest.data.deletedCount > 0) {
            Swal.fire({
              title: "Approved!",
              text: "Blog Post Approved Successfully.",
              icon: "success",
            });
            closeModal();
            fetchLatestData();
          }
        }
      }
    }
  };

  // handle delete approval
  const handleDeletionApproval = async () => {
    const deleteRes = await axios.delete(
      `http://localhost:5000/delete-blog/${blog_id}`
    );

    if (deleteRes.data.deletedCount > 0) {
      const postBlogToHistoryRes = await axios.patch(
        `http://localhost:5000/approval-history/${historyDataId}`,
        approvalHistoryData
      );

      if (postBlogToHistoryRes.data.message) {
        const postBlogToAdminHistoryRes = await axios.patch(
          `http://localhost:5000/admin-approval-history/${adminHistoryDataId}`,
          approvalHistoryData
        );

        if (postBlogToAdminHistoryRes.data.message) {
          const clearApprovalRequest = await axios.delete(
            `http://localhost:5000/delete-after-approval/${_id}`
          );

          if (clearApprovalRequest.data.deletedCount > 0) {
            Swal.fire({
                        title: "Approved!",
                        text: "Blog Deletion Approved Successfully.",
                        icon: "success",
                      });
            closeModal();
            fetchLatestData();
          }
        }
      }
    }
  };

  // handle update approval
  const handleUpdateApproval = async () => {
    const updateRes = await axios.put(
      `http://localhost:5000/update-blogs-admin/${blog_id}`,
      approvedData
    );
    if (updateRes.data.modifiedCount) {
      const postBlogToHistoryRes = await axios.patch(
        `http://localhost:5000/approval-history/${historyDataId}`,
        approvalHistoryData
      );

      if (postBlogToHistoryRes.data.message) {
        const postBlogToAdminHistoryRes = await axios.patch(
          `http://localhost:5000/admin-approval-history/${adminHistoryDataId}`,
          approvalHistoryData
        );

        if (postBlogToAdminHistoryRes.data.message) {
          const clearApprovalRequest = await axios.delete(
            `http://localhost:5000/delete-after-approval/${_id}`
          );

          if (clearApprovalRequest.data.deletedCount > 0) {
            Swal.fire({
              title: "Approved!",
              text: "Blog Update Approved Successfully.",
              icon: "success",
            });
            closeModal();
            fetchLatestData();
          }
        }
      }
    }
  };

  // sanitize the html for blog details
  const sanitizeHTML = DOMPurify.sanitize(blog_details);

  return (
    <div>
      {/* Modal */}
      {selectedReq && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/2 p-6 flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold font-sora">
                Request for{" "}
                <span className="bg-slate-400/50 px-1 rounded">
                  {requestType}
                </span>{" "}
                Approval
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto flex-1">
              {/* post title */}
              <div>
                <h1 className="text-xl">
                  Post Title:{" "}
                  <span className="font-bold font-caslon text-2xl">
                    {blog_title}
                  </span>
                </h1>
              </div>

              {/* post information */}
              <div className="flex items-center my-3">
                <div>
                  <p className="font-sora text-sm">
                    Posted By:{" "}
                    <span className="font-bold">{blog_added_by}</span>
                  </p>
                  <p className="font-sora text-sm">
                    Photo Added By:{" "}
                    <span className="font-bold">{blog_photo_added_by}</span>
                  </p>
                  <p className="font-sora text-sm">
                    Category:{" "}
                    <span className="font-bold text-red-500">
                      {blog_category}
                    </span>
                  </p>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div>
                  <p className="text-sm font-sora">
                    Name: <span className="font-bold">{userName}</span>
                  </p>
                  <p className="text-sm font-sora">
                    Role: <span className="font-bold">{userRole}</span>
                  </p>
                  <p className="text-sm font-sora">
                    Email: <span className="font-bold">{userEmail}</span>
                  </p>
                </div>
              </div>

              {/* created date */}
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm bg-slate-600/20 px-2 rounded font-sora">
                    Created At:{" "}
                    <span className="font-bold">
                      {formatDate(createdAt).date} |{" "}
                      {formatDate(createdAt).time}
                    </span>
                  </p>
                  <p className="bg-red-400 text-sm px-2 rounded font-sora text-white flex items-center gap-1">
                    <FiClock />
                    <span>{isPending && "Pending approval"}</span>
                  </p>
                </div>
              </div>

              {/* post image */}
              <div className="my-2">
                <img
                  src="https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Blog image"
                />
                {/* <img src={blog_photo} alt="Blog image" /> */}
              </div>

              {/* blog Photo description & photo description */}
              <div>
                <div className="mb-12">
                  <h3 className="font-sora ">Blog Photo Description:</h3>
                  <p className="font-sora font-bold">
                    {blog_photo_description}
                  </p>
                </div>

                <div>
                  <h3 className="font-sora border-b mb-3">Blog Description:</h3>
                  <div dangerouslySetInnerHTML={{ __html: sanitizeHTML }} />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 font-sora text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleModalOpen}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mx-2 font-sora text-sm"
              >
                Reject
              </button>
              {requestType === "Post" ? (
                <button
                  onClick={() => handleApproval()}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-sora text-sm"
                >
                  Approve Posting
                </button>
              ) : requestType === "Update" ? (
                <button
                  onClick={() => handleUpdateApproval()}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-sora text-sm"
                >
                  Approve Updating
                </button>
              ) : (
                requestType === "Delete" && (
                  <button
                    onClick={() => handleDeletionApproval()}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-sora text-sm"
                  >
                    Approve Deletion
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      )}
      <RejectionFeedbackModal
        isRejectionModalOpen={isRejectionModalOpen}
        setIsRejectionModalOpen={setIsRejectionModalOpen}
        closeModal={closeModal}
        selectedReq={selectedReq}
        fetchLatestData={fetchLatestData}
      />
    </div>
  );
};

export default ApprovalRequestModal;
