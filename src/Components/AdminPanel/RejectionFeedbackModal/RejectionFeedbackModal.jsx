import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import axios from "axios";
import Swal from "sweetalert2";

const RejectionFeedbackModal = ({
  isRejectionModalOpen,
  setIsRejectionModalOpen,
  closeModal,
  selectedReq,
  fetchLatestData,
}) => {
  const [feedback, setFeedback] = useState("");

  const { user } = useContext(AuthContext);
  const approverEmail = user.email;
  const [userData, setUserData] = useState({});
  const [btnLoading, setBtnLoading] = useState(false);

  const { email, image, name, role } = userData;

  // fetch user data
  const fetchUserData = async () => {
    const res = await axios.get(
      `https://instant-news-portal-server.vercel.app/userData?email=${approverEmail}`
    );
    if (res.data) {
      setUserData(res.data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [email]);

  //   close modal
  const closeFeedbackModal = () => {
    setIsRejectionModalOpen(false);
    setFeedback("");
    closeModal();
  };

  //   reject and send feedback
  const handleSendFeedback = async () => {
    setBtnLoading(true);
    const finalDataForRejection = {
      rejectionFeedback: feedback,
      approvedBy: name,
      approverMail: email,
      approverImage: image,
      approverRole: role,
      isPending: false,
      isRejected: true,
    };

    const rejectedRes = await axios.patch(
      `https://instant-news-portal-server.vercel.app/reject-with-feedback/${selectedReq.historyDataId}`,
      finalDataForRejection
    );
    if (rejectedRes.data.message) {
      const updateAdminHistoryRes = await axios.patch(
        `https://instant-news-portal-server.vercel.app/admin-reject-history/${selectedReq.adminHistoryDataId}`,
        finalDataForRejection
      );
      if (updateAdminHistoryRes.data.message) {
        setFeedback("");
        const clearRequestRes = await axios.delete(
          `https://instant-news-portal-server.vercel.app/delete-after-approval/${selectedReq._id}`
        );

        if (clearRequestRes.data.deletedCount > 0) {
          Swal.fire({
            title: "Rejected!",
            text: "Rejected & Sent Feedback Successfully.",
            icon: "warning",
          });
          closeFeedbackModal();
          fetchLatestData();
          setBtnLoading(false);
        }
      }
    }
  };

  if (!isRejectionModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-6">
        <h2 className="text-xl font-semibold mb-4">Rejection Feedback</h2>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          rows="4"
          placeholder="Enter your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          // onClick={(e) => setFeedback(e.target.value)}
        ></textarea>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            onClick={closeFeedbackModal}
          >
            Cancel Rejection
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={handleSendFeedback}
          >
            {btnLoading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "Reject & Send Feedback"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectionFeedbackModal;
