import { BiSolidChevronLeft } from "react-icons/bi";
import Flexwrapper from "../components/Flexwrapper";
import MaxWidthScreen from "../components/MaxWidthScreen";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosCopy } from "react-icons/io";
import ColFlex from "../components/ColFlex";
import { toast } from 'react-toastify';

const Profile = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [copied]);
  const { users, referralCode } = useContext(UserContext);
  const navigate = useNavigate();

  const handleNav = () => {
    navigate('/');
  };

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
    12: "dec"
  };

  const currentDate = new Date();
  const month = currentDate.getMonth() + 1; // getMonth returns 0-based index
  const currentMonthAbbreviation = monthly[month];

  const copy = `https://t.me/pee3_bot?ref=${referralCode}`;
  
  const handleRef = () => {
    navigator.clipboard.writeText(copy)
     setCopied(true)
  };

  return (
    <div>
      <MaxWidthScreen>
        <Flexwrapper className="p-4">
          <BiSolidChevronLeft 
            fontSize={'2rem'} 
            className="cursor-pointer text-white" 
            onClick={handleNav} 
          />
          <div>
            <BsPersonCircle fontSize={'2rem'} color="white" />
          </div>
        </Flexwrapper>

        <div className="flex justify-center items-center">
          <BsPersonCircle className="w-10 h-10 text-white rounded-full object-cover" />
        </div>

        <div className="p-7">
        <Flexwrapper className="pt-5">
            <h1 className="uppercase text-base font-oswald  text-white">User ID</h1>
            <p className="text-yellow-400 capitalize text-xl leading-[3rem]">
            {referralCode}
            </p>
          </Flexwrapper>

          <Flexwrapper className="pt-5">
            <h1 className="uppercase text-base  text-white">Name</h1>
            <p className="text-yellow-400 capitalize text-xl leading-[3rem]">
              {users?.name}
            </p>
          </Flexwrapper>

          <div className="pt-5">
            <h1 className="uppercase text-base  text-white mb-4">Referral Link</h1>
            <div className="border-b-2 flex justify-between items-center cursor-pointer pb-2" >
              <p className="text-yellow-400  font-oswald text-base">{copy}</p>
              {copied ? (<p className="text-sm text-white">copied</p>) : <IoIosCopy className="text-white cursor-pointer text-2xl" onClick={handleRef} />}
            </div>
          </div>

          <Flexwrapper className="pt-7">
            <h1 className="uppercase text-base  text-white">
              {currentMonthAbbreviation} Score
            </h1>
            <p className="uppercase text-base  text-white">{users?.monthlyTotalScore}</p>
          </Flexwrapper>

          <Flexwrapper className="py-7">
            <h1 className="uppercase text-base  text-white">Total Score</h1>
            <p className="uppercase text-base  text-white">{users?.totalScore}</p>
          </Flexwrapper>
        </div>
      </MaxWidthScreen>
    </div>
  );
};

export default Profile;


