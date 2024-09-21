import React, { useContext, useEffect, useMemo, useState } from "react";
import Flexwrapper from "../components/Flexwrapper";
import UserContext from "../context/UserContext";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router";
import TeamSelectList from "./TeamSelectList";
import { toast } from "react-toastify";
import axios from "axios";

const TeamSelect = () => {
  const { matchDetails } = useContext(UserContext);
  const [selections, setSelections] = useState([]);
  const [ViewMatch, setViewMatch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newLoading, setNewLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/admin");
  };

  const today = new Date().toISOString().split("T")[0];
  const fetchMatcheView = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/admin/viewMatch`,
        { matchDate: today }
      );
      const result = response.data;
      setViewMatch(result.matches);
    } catch (error) {
      console.error("Error posting data:", error.response || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  useEffect(() => {
    fetchMatcheView();
  }, []);

  const handleChange = (selection) => {
    const result = selections.find((item) => item.id === selection.id);
    if (!result) {
      setSelections((state) => [...state, { matchId: selection.id }]);
      return;
    }
    console.log({ matchId: selection.id });
    setSelections((state) =>
      state.map((item) => {
        if (item.id === selection.id) {
          return selection;
        }

        return item;
      })
    );
    // console.log(selections.length);
  };

  const handleRemove = (id) => {
    setSelections((state) =>
      state.filter((item) => {
        return item.matchId !== id;
      })
    );
  };

  const isPastMatchTime = (matchSrt) => {
    const matchDate = new Date(matchSrt);
    return new Date() > matchDate;
  };
  const pastMatchTimes = useMemo(() => {
    return matchDetails.reduce((acc, match) => {
      acc[match.id] = isPastMatchTime(match.matchStartTime);
      return acc;
    }, {});
  }, [matchDetails]);

  const postMatch = async () => {
    setNewLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/admin/deletematches`,
        {
          matchIds: selections,
        }
      );

      const result = response.data;
      // console.log(result.data);
      toast.success(result.responseMessage, {
        className: "bg-[#06f6ad] text-white",
        bodyClassName: "text-white font-Roboto",
        progressClassName: "bg-[#213045]",
      });

      navigate("/admin");
    } catch (error) {
      console.error("Error posting data:", error.response || error.message);
      toast.error(error.message, {
        className: "bg-[#06f6ad] text-white",
        bodyClassName: "text-white font-Roboto",
        progressClassName: "bg-[#FF0000]",
      });
    } finally {
      setNewLoading(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    postMatch();
  };

  return (
    <div className=" bg-[#213045]">
      <div className="mx-auto w-full max-w-screen-xl md:px-20 overflow-hidden min-h-screen bg-[#213045] relative">
        <div className="mx-auto max-w-3xl">
          <div className="p-4 flex items-center font-josefin font-medium my-3">
            <FaArrowLeft
              className="text-2xl text-white cursor-pointer hover:text-gray-300"
              onClick={() => handleNav()}
            />
            <p className="uppercase text-white text-center font-bold flex-grow">
              View Matches
            </p>
          </div>
          <div className="mx-4" >

          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ease-in-out text-gray-800"
          />
          </div>
          {loading ? (
            <div className="flex justify-center items-center my-10"><span className="loader flex"></span></div>
          ) : ViewMatch.length > 0 ? (
            ViewMatch.map((match) => (
              <TeamSelectList
                match={match}
                key={match.id}
                pastMatchTimes={pastMatchTimes}
                handleChange={handleChange}
                handleRemove={handleRemove}
              />
            ))
          ) : (
            <p className="text-white leading-6 text-lg p-2 font-josefin font-bold">
              No match to view
            </p>
          )}

          {selections.length > 0 ? (
            <div className=" md:w-auto md:left-0 md:right-0 md:mx-72 bottom-0 w-full my-4 px-4">
              <button
                className="w-full bg-[#f4f4f4] border-2 text-blue-700  font-medium rounded-lg text-base capitalize px-4 py-2"
                onClick={submitHandler}
              >
                {newLoading ? (
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
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TeamSelect;
