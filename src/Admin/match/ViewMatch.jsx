import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa6';
import ViewMatchList from './ViewMatchList';
import axios from 'axios';
import { toast } from 'react-toastify';

function ViewMatch() {
    // const { matchDetails } = useContext(UserContext);
    const [viewMatch,setViewMatch]=useState([])
    const [loading, setLoading]=useState(false)

    const fetchMatcheView = async () => {
      const today = new Date().toISOString().split("T")[0];
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

    useEffect(() => {
      fetchMatcheView();
    }, []);

    const [selections, setSelections] = useState([]);
    const navigate = useNavigate();
    const handleNav = () => {
      navigate("/admin");
    };
 

    const handleChange = (selection) => {
      
  
      const result = selections.find((item) => item.matchId === selection.id);
    
    
  
      if (!result) {
        setSelections((state) => [
          ...state,
          {
            matchId: selection.id,
            selectedId: selection.selectedMatch 
          }
        ]);
        return;
      }
    
      
      setSelections((state) =>
        state.map((item) => {
          
          if (item.matchId === selection.id) {
            return {
              ...item, 
              selectedId: selection.selectedMatch
            };
          }
    
      
          return item;
        })
      );
    };
    


    const handleRemove = (id) => {
      setSelections((state) => 
        state.filter((item) => item.matchId !== id)
      );
    };
    // console.log(selections)
    const today = new Date().toISOString().split("T")[0];
    const postUpdateMatch = async () => {
      // setLoading(true)
      try {
         const response =  await axios.post(`${import.meta.env.VITE_APP_API_URL}/admin/selectedId`, {
           matchDate: today,
            teamInfo: selections
           
         })
         const result = response.data;
         toast.success(result.responseMessage, {
           className: "bg-[#06f6ad] text-white",
           bodyClassName: "text-white font-Roboto",
           progressClassName: "bg-[#213045]",
         });
      } catch (error) {
        console.error("Error posting data:", error.response || error.message);
        toast.error(error.message, {
          className: "bg-[#06f6ad] text-white",
          bodyClassName: "text-white font-Roboto",
          progressClassName: "bg-[#FF0000]",
        });
      } finally {
        // setLoading(false);
      }
    }
    const handleUpdatematch = () => {
      postUpdateMatch()
    }
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
            select winner
          </p>
        </div>
  
        
        {loading ? (
            <div className="flex justify-center items-center my-10"><span className="loader flex"></span></div>
          ) :viewMatch.length > 0 ? (
          viewMatch.map((match) => (
            <ViewMatchList
              match={match}
              key={match.id}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
          ))
        ) : (
          <p className="text-white leading-6 text-lg p-2 font-josefin font-bold">
            No match to update
          </p>
        )}
         {selections.length > 0 ? (
            <div className="md:w-auto md:left-0 md:right-0 bottom-0 w-full my-4 px-4" onClick={handleUpdatematch}>
              <button className="w-full bg-[#f4f4f4] border-2 text-blue-700  font-medium rounded-lg text-base capitalize px-4 py-2">
                {" "}
                submit
              </button>
            </div>
          ) : null}
        </div>
    </div>
    </div>
  )
}

export default ViewMatch
