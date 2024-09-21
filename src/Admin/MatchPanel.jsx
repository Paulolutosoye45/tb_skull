import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import MatchPanelList from "./MatchPanelList";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MatchPanel = ({ leaguesClubs, setShow, setLeaguesClubs }) => {
  const navigate = useNavigate("/admin");
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);

  // Function to submit and hide panel
  const submithandler = () => {
    setShow(false);
  };

  const filterLeaguesClubsById = (filterId) => {
    const filteredClubs = leaguesClubs.filter((club) => club.idT !== filterId);
    setLeaguesClubs(filteredClubs);
    console.log("remove");
  };

  const handleSubmit = (newMatch) => {
    setMatches((prevMatches) => [...prevMatches, newMatch]);
  };

  const filterOutMatch = (matchToRemove) => {
    setMatches((prevMatches) =>
      prevMatches.filter((match) => match.idT !== matchToRemove.idT)
    );
  };

  const handlePostMatch = async () => {
    const today = new Date().toISOString().split("T")[0];
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/admin/creatematch`,
        {
          matchDate: today,
          createMatches: matches,
        }
      );

      const result = response.data;
      if (result.responseCode || result.responseMessage) {
        navigate("/admin/");
      }
    } catch (error) {
      console.error("Error posting data:", error.response || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleMatch = () => {
    if (!matches || matches.length === 0) {
      setIsDisable(true);
      return;
    }

    handlePostMatch();
  };

  useEffect(() => {
    // console.log(matches);
  }, [matches]);
  return (
    <div className="mx-auto w-full max-w-screen-xl md:px-20 overflow-hidden bg-[#213045] min-h-screen">
      <div className="mx-auto max-w-3xl">
        <div className="p-4 flex items-center font-josefin font-medium my-3">
          <FaArrowLeft
            className="text-2xl text-white cursor-pointer hover:text-gray-300"
            onClick={submithandler}
          />
          <p className="uppercase text-white text-center font-bold flex-grow">
            View Matches
          </p>
        </div>

        <div className="flex flex-col space-y-4 p-4">
          {leaguesClubs.map((item) => (
            <MatchPanelList
              item={item}
              key={item.idT}
              handleSubmit={handleSubmit}
              filterOutMatch={filterOutMatch}
              filterLeaguesClubsById={filterLeaguesClubsById}
            />
          ))}
        </div>

        <div className="mx-auto my-7 w-3/4 md:w-6/12">
          <button
            disabled={isDisable}
            className="w-full bg-[#f4f4f4] border-2 text-blue-700 font-medium rounded-lg text-base capitalize px-4 py-2"
            onClick={handleMatch}
          >
            {loading ? (
              <div role="status" className="flex justify-center items-center">
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
};

export default MatchPanel;
