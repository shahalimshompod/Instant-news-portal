import React, { useContext, useEffect, useState } from "react";
import ApprovalHistoryCard from "../ApprovalHistoryCard/ApprovalHistoryCard";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import axios from "axios";
import useUserRole from "../Hooks/useUserRole";
import ApprovalHistoryCardForAdmin from "../ApprovalHistoryCard/ApprovalHistoryCardForAdmin";
import ReasonOfRejectionModal from "../ReasonOfRejectionModal/ReasonOfRejectionModal";

const ApprovalHistory = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const [historyData, setHistoryData] = useState([]);
  const [historyDataForAdmin, setHistoryDataForAdmin] = useState([]);
  const { userRole } = useUserRole(email);

  // open reason modal
  const [rejectionReasonData, setRejectionReasonData] = useState("");

  console.log(rejectionReasonData);

  // fetch history data
  const fetchApprovalHistoryData = async () => {
    const res = await axios.get(
      `https://instant-news-portal-server.vercel.app/get-approval-history-data?email=${email}`
    );
    if (res.data) {
      setHistoryData(res.data);
    }
  };

  // fetch history data
  const fetchApprovalHistoryDataForAdmin = async () => {
    const res = await axios.get(
      `https://instant-news-portal-server.vercel.app/get-approval-history-data-for-admin?email=${email}`
    );
    if (res.data) {
      setHistoryDataForAdmin(res.data);
    }
  };

  //   handle delete history card
  const onDeleteOthersHistoryCards = async (id) => {
    console.log("function called", id);
    const res = await axios.delete(
      `https://instant-news-portal-server.vercel.app/delete-others-history-card/${id}`
    );
    console.log(res.data);
    if (res.data.deletedCount > 0) {
      fetchApprovalHistoryData();
    }
  };

  //   handle delete history card
  const onDeleteAdminHistoryCards = async (id) => {
    console.log("function called", id);
    const res = await axios.delete(
      `https://instant-news-portal-server.vercel.app/delete-admin-history-card/${id}`
    );
    console.log(res.data);
    if (res.data.deletedCount > 0) {
      fetchApprovalHistoryDataForAdmin();
    }
  };

  useEffect(() => {
    fetchApprovalHistoryData();
    fetchApprovalHistoryDataForAdmin();
  }, []);

  return (
    <div className="px-2 my-5">
      <h1 className="text-center text-3xl text-black font-sora mb-5 uppercase">
        Approval History
      </h1>

      {/* cards for moderator and editor */}

      {/* card for admin */}
      {userRole === "Admin" ? (
        <div className="flex flex-col gap-3">
          {historyDataForAdmin.map((data, idx) => (
            <ApprovalHistoryCardForAdmin
              data={data}
              key={idx}
              onDeleteAdminHistoryCards={onDeleteAdminHistoryCards}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {historyData.map((data, idx) => (
            <ApprovalHistoryCard
              setRejectionReasonData={setRejectionReasonData}
              data={data}
              key={idx}
              onDeleteOthersHistoryCards={onDeleteOthersHistoryCards}
            />
          ))}
        </div>
      )}
      <ReasonOfRejectionModal
        rejectionReasonData={rejectionReasonData}
        setRejectionReasonData={setRejectionReasonData}
      />
    </div>
  );
};

export default ApprovalHistory;
