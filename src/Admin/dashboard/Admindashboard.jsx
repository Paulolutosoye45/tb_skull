import React from "react";
import { Outlet } from "react-router";
import { TeamProvider } from "../../context/teamsContext";

function Admindashboard() {
  return (
    <TeamProvider>
      <div className="bg-[#213045]">
        <Outlet />
      </div>
    </TeamProvider>
  );
}

export default Admindashboard;
