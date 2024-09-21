import { BiSolidChevronLeft } from "react-icons/bi";
import Flexwrapper from "../components/Flexwrapper";
import MaxWidthScreen from "../components/MaxWidthScreen";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosCopy } from "react-icons/io";
import ColFlex from "../components/ColFlex";
import { toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa6";

const Profile = () => {
  const [copied, setCopied] = useState(false);
  const [Loading, setloading] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setloading(false)
      users
    }, 2000);

    // Cleanup function to clear the interval on unmount
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [copied]);
  const { users, referralCode } = useContext(UserContext);

  const monthly = {
    1: "jan",
    2: "feb",
    3: "mar",
    4: "apr",
    5: "may",
    6: "jun",
    7: "jul",
    8: "aug",
    9: "sept",
    10: "oct",
    11: "nov",
    12: "dec",
  };

  const currentDate = new Date();
  const month = currentDate.getMonth() + 1; // getMonth returns 0-based index
  const currentMonthAbbreviation = monthly[month];

  const copy = `https://t.me/reward_4_bot?start=${referralCode}`;

  const handleRef = () => {
    navigator.clipboard.writeText(copy);
    setCopied(true);
  };
  const navigate = useNavigate();
  const handleNav = () => {
    navigate('/');
  };
  return (
    <div>
      <MaxWidthScreen>     
       {Loading ? (
            <div className="flex justify-center items-center min-h-screen"><span className="loader flex"></span></div>
      ): (
        <div>
      <div className="p-4 flex items-center font-josefin font-medium my-3">
        <FaArrowLeft className="text-2xl text-white"  onClick={handleNav}/>
        <p className="uppercase  text-white text-center font-bold flex-grow">
          profile
        </p>
      </div>

        <div className="flex justify-center items-center">
          <BsPersonCircle className="w-10 h-10 text-white rounded-full object-cover" />
        </div>

        <div className="p-7 pb-20">
          <div className="py-4">
            <h1 className="uppercase text-base  text-white mb-2">User ID</h1>
            <div className="border-b-2 flex justify-between items-center cursor-pointer pb-2">
              <p className="text-yellow-400  font-oswald text-base">
                {referralCode}
              </p>
            </div>
          </div>

          <div className="py-4">
            <h1 className="uppercase text-base  text-white mb-2">Name</h1>
            <div className="border-b-2 flex justify-between items-center cursor-pointer pb-2">
              <p className="text-yellow-400  font-oswald text-base">
                {users?.name}
              </p>
            </div>
          </div>

          <div className="py-4">
            <h1 className="uppercase text-base  text-white mb-2">
              Referral Link
            </h1>
            <div className="border-b-2 flex justify-between items-center cursor-pointer pb-2">
              <p className="text-yellow-400  font-oswald text-sm">{copy}</p>
              {copied ? (
                <p className="text-sm text-white">copied</p>
              ) : (
                <IoIosCopy
                  className="text-white cursor-pointer text-2xl"
                  onClick={handleRef}
                />
              )}
            </div>
          </div>

          <Flexwrapper className="pt-2 font-josefin">
            <h1 className="uppercase text-base  text-white">
              {currentMonthAbbreviation} Score
            </h1>
            <p className="uppercase text-base  text-white">
              {users?.monthlyTotalScore}
            </p>
          </Flexwrapper>

          <Flexwrapper className="py-5 font-josefin">
            <h1 className="uppercase text-base  text-white">Total Score</h1>
            <p className="uppercase text-base  text-white">
              {users?.totalScore}
            </p>
          </Flexwrapper>
        </div>
        </div>)}
      </MaxWidthScreen>
    </div>
  );
};

export default Profile;
