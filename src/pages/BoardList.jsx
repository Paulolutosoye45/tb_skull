import React from "react";
import Flexwrapper from "../components/Flexwrapper";

const BoardList = ({ar,item}) => {
  return (
    <div>
      <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
        <Flexwrapper className="flex items-center space-x-2">
          <p>{item.position}</p>
          <img src={ar} alt="Profile" className="w-5 h-5 rounded-full" />
          <p className="font-semibold">{item.username}</p>
        </Flexwrapper>
        <p className="font-semibold">{item.scores}</p>
      </Flexwrapper>
    </div>
  );
};

export default BoardList;
