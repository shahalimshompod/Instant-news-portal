import React from "react";
import { FaCircleInfo, FaTrash } from "react-icons/fa6"; // Import FaTrash for the delete icon
import { FiClock } from "react-icons/fi";

const ApprovalHistoryCardForAdmin = ({ data, onDeleteAdminHistoryCards }) => {
  const {
    blog_title,
    createdAt,
    approvedAt,
    approvedBy,
    approverImage,
    isApproved,
    isRejected,
    isPending,
    approverRole,
    requestType,
    userRole,
    userImage,
    userName,
    _id,
  } = data;

  // Format Date
  const formatDate = (isoDateString) => {
    if (!isoDateString) return { date: "N/A", time: "N/A" }; // Check if date is invalid

    const date = new Date(isoDateString);
    if (isNaN(date.getTime())) return { date: "N/A", time: "N/A" }; // Check if date is valid

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

  return (
    <div className="shadow-md border p-3 rounded flex justify-between items-center relative">
      {/* Delete Icon */}
      {isPending === true && isRejected === false && isApproved === false ? (
        ""
      ) : (
        <button
          onClick={() => onDeleteAdminHistoryCards(_id)} // Call the onDelete function when clicked
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-colors"
        >
          <FaTrash size={15} />
        </button>
      )}

      <div className="flex items-center gap-3">
        <div className="w-28">
          <img
            className="rounded"
            src="https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Blog Thumbnail"
          />
        </div>

        <div>
          {/* Title */}
          <h4 className="font-sora text-base font-bold mb-2">{blog_title}</h4>

          <div className="flex">
            <div>
              {/* Created At */}
              <p className="rounded text-xs font-sora">
                <span className="text-blue-400">Created:</span>{" "}
                {formatDate(createdAt).date} || {formatDate(createdAt).time}
              </p>

              {/* Approved/rejected At */}
              {isApproved === true &&
                isPending === false &&
                isRejected === false && (
                  <p className="rounded text-xs font-sora font-bold">
                    <span className="text-green-500">Approved at:</span>{" "}
                    {formatDate(approvedAt).date} ||{" "}
                    {formatDate(approvedAt).time}
                  </p>
                )}

              {isRejected === true &&
                isPending === false &&
                isApproved === false && (
                  <p className="rounded text-xs font-sora font-bold">
                    <span className="text-red-500">Rejected at:</span>{" "}
                    {formatDate(approvedAt).date} ||{" "}
                    {formatDate(approvedAt).time}
                  </p>
                )}

              {isPending === true &&
                isApproved === false &&
                isRejected === false && (
                  <p className="bg-red-400 text-sm pl-2 w-11/12 rounded font-sora text-white flex items-center gap-1">
                    <FiClock />
                    <span>{isPending && "Pending approval"}</span>
                  </p>
                )}
            </div>

            {/* divider */}
            <div className="divider divider-horizontal"></div>

            {/* posted by */}
            <div className="flex gap-4">
                {/* Approved By */}
                <p className="font-sora text-sm">
                {
                  requestType ==="Post" ? "Post Request By:" : requestType === "Update" ? "Update Request By:" : requestType === "Delete" && "Delete Request By:"
                }
                </p>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Approver Avatar"
                        src={userImage || "https://via.placeholder.com/40"}
                      />
                    </div>
                  </div>
                  <h3>{userName || "N/A"}</h3>
                  <h4 className="border px-2 text-center font-sora shadow-lg rounded-lg py-1 text-xs">
                    {userRole || "Unknown Role"}
                  </h4>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className="mr-24">
        {/* Status */}
        <p
          className={`text-sm font-bold ${
            isRejected
              ? "bg-red-500"
              : isPending
              ? "bg-orange-400"
              : isApproved && "bg-green-500"
          } px-3 rounded font-sora text-white py-1`}
        >
          {isRejected
            ? "Rejected"
            : isPending
            ? "Pending"
            : isApproved
            ? "Approved"
            : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default ApprovalHistoryCardForAdmin;
