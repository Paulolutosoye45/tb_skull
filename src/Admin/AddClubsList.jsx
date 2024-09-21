import React, { useEffect, useState } from "react";

function AddClubsList({TeamName, setTeamName, TeamCode,setTeamCode}) {




    
    //   const handleTeamName = (e) => {
    //     const re = /^[a-zA-Z\s]*$/;
    //     if (e.target.value === "" || re.test(e.target.value)) {
    //       // const { name, value } = e.target;
    //       setTeamName(e.target.value);
    //     }
    //   };
    //   const handleChangeTeamCode = (e) => {
    //     const re = /^[a-zA-Z\s]*$/;
    
    //     // Check if value is either empty or matches the regex
    //     if (e.target.value === "" || re.test(e.target.value)) {
    //         setTeamCode(e.target.value);
    //     }
    // };
    

    
      // useEffect(() => {
      //   if(TeamName && TeamCode){
      //       setNewClubs({TeamName,TeamCode})
      //   }
      // },[TeamName, TeamCode])
  return (
    <div>
      {" "}
        <div className="flex flex-col  gap-7 py-4 px-3">
          <div className="flex items-center  gap-12 ">
            <p className="text-white capitalize font-josefin text-sm">
              team Name:
            </p>
            <input
              type="text"
              required
              name="TeamName"
              value={TeamName}
              onChange={handleChangeTeamName}
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
              // name="TeamCode"
              value={TeamCode}
              onChange={handleChange}
              className=" w-[40%] outline-none border-none rounded-md text-left bg-gray-800 text-white px-2 py-2 shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
            />
          </div>

        </div>
    </div>
  );
}

export default AddClubsList;
