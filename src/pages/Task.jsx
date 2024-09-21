import React,{useContext, useState} from "react";
import MaxWidthScreen from "../components/MaxWidthScreen";
import { FaArrowLeft } from "react-icons/fa6";
import ColFlex from "../components/ColFlex";
import tele from "../../public/access/Telegram-icon.png";
import X from "../../public/access/X.avif";
import { FaChevronRight } from "react-icons/fa6";
import axios from "axios";
import UserContext from "../context/UserContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

// https://t.me/reward_4_passion



function Task() {
  const { users, referralCode } = useContext(UserContext);
  const [loading, setLoading]=useState(false)
  const navigate = useNavigate();
  const handleNav = () => {
    navigate('/');
  };

  const twitterTaskHandler = async () => {
    setLoading(true)
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/bot/calculateTaskScores`, {
        Usertask: 1,
        userId : referralCode,
        point : 2000
      })
      window.open("https://x.com/Reward_4Passion?t=xMxBREBs5elZl3fC26Uo3w&s=09", "_blank")
      toast.success('successful', {
        className: "bg-[#06f6ad] text-white",
        bodyClassName: "text-white font-Roboto",
        progressClassName: "bg-[#213045]",
      });
    } catch (error) {
      console.log(error)
      toast.error("Please try again later.", {
        className: "bg-[#06f6ad] text-white",
        bodyClassName: "text-white font-Roboto",
        progressClassName: "bg-[#FF0000]",
      });
      console.error('Error fetching data:', error.response || error.message);
      console.log(error.response )
    } finally {
      setLoading(false);
    }
  }
  
  const telegramTaskHandler = async () => {
    try {
      // Send the post request to the API
      const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/bot/calculateTaskScores`, {
        Usertask: 0,
        userId: referralCode,
        point: 2000,
      });
  
      // After successful API call, open the Telegram link
      window.open("https://t.me/reward_4_passion?startattach", "_blank");
  
      // Log the result
      const result = response.data;
      // console.log(result);
      toast.success(result.responseMessage, {
        className: "bg-[#06f6ad] text-white",
        bodyClassName: "text-white font-Roboto",
        progressClassName: "bg-[#213045]",
      });
    } catch (error) {
      // Handle the error and show a toast message
      toast.error("Please try again later.", {
        className: "bg-[#06f6ad] text-white",
        bodyClassName: "text-white font-Roboto",
        progressClassName: "bg-[#FF0000]",
      });
  
      // Log the error message
      console.error("Error fetching data:", error.response || error.message);
      if (error.response) {
        console.log(error.response);
      }
    }
  };

  
  return (
    <div>
      <MaxWidthScreen>
        <div className="p-4 flex items-center font-josefin font-medium my-3">
          <FaArrowLeft className="text-2xl text-white " onClick={handleNav} />
          <p className="uppercase text-xl leading-none  text-white text-center font-bold flex-grow">
            Tasks
          </p>
        </div>
        <div className="p-4">
          <h2 className="text-white text-lg font-Roboto font-medium">Tasks</h2>
          <p className="text-white text-base  my-2 font-josefin">
            Do tasks and earn more
          </p>
          <div>
            <ColFlex className="mt-7 pb-20">
              <div className="flex justify-between  items-center w-full p-4  py-2 glass rounded-xl mb-2.5 shadow-lg border-0 hover:opacity-80 cursor-pointer" onClick={telegramTaskHandler}>
                <div className="flex gap-3 items-center flex-grow">
                  <div>
                    <img
                      src={tele}
                      alt="Telegram Icon"
                      className="w-14 rounded-full"
                    />
                  </div>
                  <div>
                    {" "}
                    <h2 className="text-white text-base  font-Roboto">
                      Join our TG Channel
                    </h2>
                    <p className="text-white text-sm  font-Inconsolata font-light">
                      +2,000 point
                    </p>
                  </div>
                  <div></div>
                </div>
                <FaChevronRight className="text-white text-base" />
              </div>
              <div className="flex justify-between  items-center w-full p-4  py-2 glass rounded-xl mb-2.5 shadow-lg border-0 hover:opacity-80 cursor-pointer" onClick={twitterTaskHandler}>
                <div className="flex gap-3 items-center flex-grow">
                  <div>
                    <img
                      src={X}
                      alt="Telegram Icon"
                      className="w-14 rounded-full"
                    />
                  </div>
                  <div>
                    {" "}
                    <h2 className="text-white text-base  font-Roboto">
                      Follow us on X!
                    </h2>
                    <p className="text-white text-sm  font-Inconsolata font-light">
                      +2,000 point
                    </p>
                  </div>
                  <div></div>
                </div>
                <FaChevronRight className="text-white text-base" />
              </div>
            </ColFlex>
          </div>
        </div>
      </MaxWidthScreen>
    </div>
  );
}

// {/* Image or icon can be added here */}
//                 {/* <div><img src={tele} alt="Telegram Icon" className="w-6 h-6" /></div> */}
//                 <div className="flex justify-between items-center">

//                 <div>
//                   <h2 className="text-white text-lg font-inter font-semibold">
//                     Join our TG Channel
//                   </h2>
//                   <p className="text-white text-sm font-inter font-light">
//                     +2,000 Members
//                   </p>
//                 </div>
//                 <FaChevronRight className="text-white text-xl" />
//                </div>

export default Task;
