

import { useContext, useEffect, useState } from "react";
import ar from "../../public/access/360-camera.png";
import UserContext from "../context/UserContext";
import Flexwrapper from "../components/Flexwrapper";


const MonthlyItem = ({ar, item}) => {
  return (
  <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
    <Flexwrapper className="flex items-center space-x-2">
      <p>{item.position}</p>
      <img src={ar} alt="Profile" className="w-5 h-5 rounded-full" />
      <p className="font-semibold">{item.username}</p>
    </Flexwrapper>
    <p className="font-semibold">{item.scores}</p>
  </Flexwrapper>
  )
};


function Monthly() {
  const { arrMonthly } = useContext(UserContext);
  const [loading, setLoading]=useState(false)

    useEffect(() => {
      arrMonthly
  }, []);



  return (
    <div>
      {/* <div className="mx-auto  pt-5 px-2 font-Inter bg-[#f5f6f8] rounded-t-3xl  overflow-y-auto relative  pb-24"> */}
        {arrMonthly.map((item) => (
          <MonthlyItem ar={ar} item={item} key={item.position} />
        ))}
      {/* </div> */}
    </div>
  );
}

export default Monthly;
