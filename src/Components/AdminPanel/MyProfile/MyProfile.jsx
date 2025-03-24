import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import axios from "axios";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const [userData, setUserData] = useState({});
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");

  const { email, image, name, role, job, _id } = userData;

  const fetchUserData = async () => {
    const res = await axios.get(
      `http://localhost:5000/userData?email=${userEmail}`
    );
    if (res.data) {
      setUserData(res.data);
    }
  };

  useEffect(() => {
    // call the fetch func
    fetchUserData();
  }, [userEmail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUserData = { name: nameInput, image: imageInput };
    const res = await axios.patch(
      `http://localhost:5000/add-userData/${_id}`,
      updatedUserData
    );
    if (res.data) {
      setUserData(res.data);
      fetchUserData();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <h1 className="font-montserrat text-4xl mb-4">
        Hello <span className="font-bold">{name || "User"}</span>! Welcome to
        your Profile
      </h1>

      {name && image ? (
        <>
          {/* Profile Picture Container */}
          <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-gray-300 shadow-lg">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="Profile"
            />
          </div>
          <h3 className="text-3xl font-bold font-montserrat mt-4 mb-2">{name}</h3>
        </>
      ) : (
        <div className="mb-2">
          <h1 className="text-green-500 font-bold font-montserrat">
            Setup your Name and Profile Picture
          </h1>
          <form onSubmit={handleSubmit} className="w-96">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 font-montserrat">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className="font-montserrat mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 font-montserrat">
                Image URL
              </label>
              <input
                type="url"
                required
                placeholder="Enter image URL"
                value={imageInput}
                onChange={(e) => setImageInput(e.target.value)}
                className="font-montserrat mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Save
            </button>
          </form>
        </div>
      )}
      <p className="font-montserrat text-xl mb-2">{email}</p>
      <p className="bg-slate-300 px-4 rounded text-xl font-montserrat mb-3">{role}</p>
      <p className="font-montserrat text-xl mb-2">
        Job: <span>{job}</span>
      </p>
    </div>
  );
};

export default MyProfile;