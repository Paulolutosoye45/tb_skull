import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router";
import AddClubsList from "./AddClubsList";
import axios from "axios";
import { toast } from "react-toastify";

function AddClubs() {
 const [loading, setLoading]=useState(false)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    TeamName: '',
    TeamCode: ''
  });
  
  // State to store submitted teams
  const [teamsArray, setTeamsArray] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Only allow letters and spaces for TeamName and TeamCode
    const re = /^[a-zA-Z\s]*$/;
    if (value === "" || re.test(value)) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleNav = () => {
    navigate("/admin");
  };


  const HandleOtherMatches = async () => {
   let {TeamName,TeamCode}=formData
   setLoading(true)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/admin/createOtherTeam`,
        {
          TeamName,
          TeamCode
        }
      );
      const result = response.data;
      toast.success(result.responseMessage, {
        className: "bg-[#06f6ad] text-white",
        bodyClassName: "text-white font-Roboto",
        progressClassName: "bg-[#213045]",
      });
      if(result.responseCode == '00'){ setFormData({TeamName: '',TeamCode: '' })
      }       
    }catch (error) {
      // Handle the error properly
      console.error('Error fetching data:', error.response || error.message);
      if (error.response) {
        console.log('Error response:', error.response);
      }
    } finally{
      setLoading(false)
    }
  };
    useEffect(() =>{

    if (formData.TeamName && formData.TeamCode) {
      setTeamsArray((prev) => [...prev, formData])
    }
    },[formData])


  const handleSubmit = () => {
   if (formData.TeamName && formData.TeamCode) {
      HandleOtherMatches();
      } else {
      toast.error('Please fill in both Team Name and Team Code');
    }
  
  };
  
  return (
    <div className="bg-[#213045]">
      <div className="mx-auto w-full max-w-screen-xl md:px-20 overflow-hidden bg-[#213045] min-h-screen">
        <div className="mx-auto max-w-2xl re">
          <div className="p-4 flex items-center font-josefin font-medium my-3">
            <FaArrowLeft
              className="text-2xl text-white cursor-pointer hover:text-gray-300"
              onClick={() => handleNav()}
            />
            <p className="uppercase text-white text-center font-bold flex-grow">
              create club
            </p>
          </div>
          <div className="flex flex-col  gap-7 py-4 px-3">
          <div className="flex items-center  gap-12 ">
            <p className="text-white capitalize font-josefin text-sm">
              team Name:
            </p>
            <input
              type="text"
              required
              name="TeamName"
              value={formData.TeamName}
              onChange={handleChange}
              className=" w-[70%] outline-none border-none rounded-md text-left bg-gray-800 text-white px-2 py-2 shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
            />
          </div>
          <div className="flex items-center  gap-4">
            <p className="text-white capitalize font-josefin text-sm">
              Team short code:
            </p>
            <input
              type="text"
              required
              name="TeamCode"
              value={formData.TeamCode}
              onChange={handleChange}
              className=" w-[40%] outline-none border-none rounded-md text-left bg-gray-800 text-white px-2 py-2 shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
            />
          </div>

        </div>
          {/* <div className="p-4">
            <FaPlus
              className="ml-auto bg-blue-700 text-2xl rounded-full float-right cursor-pointer text-white p-1"
              onClick={showNewComponents}
            />
          </div> */}
        </div>
        <div
          className="static md:w-auto left-0 right-0 w-full md:mx-72 bottom-0  my-7 px-4"
          onClick={handleSubmit}
        >
          <button className="w-full bg-[#f4f4f4] border-2 text-blue-700  font-medium rounded-lg text-base capitalize px-4 py-2">
          {loading ? (
                  <div
                    role="status"
                    className="flex justify-center items-center"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-6  text-gray-200 animate-spin fill-[#213045]"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentFill"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                ) : (
                  "Submit"
                )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddClubs;
