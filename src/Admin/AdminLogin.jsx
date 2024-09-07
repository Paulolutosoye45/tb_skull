import React from "react";
import ColFlex from "../components/ColFlex";

function AdminLogin() {
  return (
    <div>
      <div className="mx-auto w-full max-w-screen-xl md:px-20 overflow-hidden min-h-screen bg-[url('../../public/bg-2.jpg')] bg-cover bg-center bg-opacity-70">
        <div className="mx-auto max-w-3xl">
        <div className="px-4 py-28">
          <h2 className="text-white capitalize font-oswald font-medium text-xl my-4">
            welcome back
          </h2>
          <h2 className="text-white  font-oswald font-medium text-xl my-4">Log in</h2>
          <div className="my-7 mx-2">
            <h3  className="text-white capitalize font-Roboto font-bold text-base my-2">user iD</h3>
            <input type="text" placeholder='Enter User Id' className='border-2 text-white  bg-transparent placeholder-white px-4 py-2  w-full border-[#e7d3d3] font-medium rounded-lg text-sm focus:outline-none my-3  ' />
            <h3  className="text-white capitalize font-Roboto font-bold text-base my-2">password</h3>
            <input type="text" placeholder='Enter password' className='border-2 placeholder-white bg-transparent text-white px-4 py-2 focus:outline-none w-full border-[#e7d3d3]  font-medium rounded-lg text-sm my-3 ' />
          </div>
          <div className="px-2">
                <button className="w-full bg-[#f4f4f4] border-2 text-blue-700  font-medium rounded-lg text-base capitalize px-4 py-2">Login</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
