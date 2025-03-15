import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import axios from "axios";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const [userData, setUserData] = useState({});

  const { email, image, name, role, job, _id } = userData;

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await axios.get(
        `http://localhost:5000/userData?email=${userEmail}`
      );
      if (res.data) {
        setUserData(res.data);
      }
    };

    // call the fetch func
    fetchUserData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <h1 className="font-sora text-4xl mb-4">
        Hello <span className="font-bold">{name}</span>! Welcome to your Profile
      </h1>

      <div className="w-1/4 rounded-full overflow-hidden">
        <img className="" src={image} alt="" />
      </div>
      <h3 className="text-3xl font-bold font-sora mt-4">{name}</h3>
      <p className="font-sora text-xl mb-2">{email}</p>
      <p className="bg-slate-300 px-4 rounded text-xl font-sora">{role}</p>
    </div>
  );
};

export default MyProfile;
