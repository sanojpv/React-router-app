import React, { useState } from "react";
import { data } from "../data/Userdata";
import { useNavigate } from "react-router-dom";
import {LuCircleUserRound } from "react-icons/lu";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";
const User = () => {
  const [users, setUsers] = useState(data);
 const navigate=useNavigate();

  return (
    <div className="bg-gradient-to-b from-blue-400 via-blue-400 to-blue-100 min-h-screen">
     
     <div className="flex justify-center text-2xl font-bold text-white ">
      <h1 className="py-3 ">
        User Lists
      </h1>
     </div>
      <div  className="grid sm:grid-cols-1  gap-2 md:grid-cols-2  max-h-full lg:grid-cols-3 lg:gap-4 max-w-300 rounded-2xl  shadow-lg shadow-gray-800 mx-auto bg-white">
          {users.map((user) => (
          <div key={user.id} className="max-w-sm w-70 overflow-hidden shadow-lg shadow-gray-400 mt-3 mx-auto border-4 rounded-2xl border-white lg:w-70 h-fit mb-5">
            
            <div className="h-25  rounded-t-2xl  bg-blue-500">
                <h2 className="font-bold text-2xl  py-6 ml-3  flex items-center gap-2 justify-start">{user.icon} {user.name}</h2>
             
            </div>
            <div className="px-6 py-3 font-medium font-serif">
            
              <p className="flex items-center gap-1 py-1"><MdOutlineAttachEmail className="text-2xl text-red-500"/> {user.email}</p>
              <p className="flex items-center gap-1 py-1"><FcBusinessman className="text-2xl"/>{user.job_role}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex items-center justify-center    rounded-b-3xl">
              <button onClick={()=>navigate(`${user.id}`)} className="inline-block bg-blue-500 cursor-pointer hover:bg-blue-600 rounded-md px-3 py-1 text-lg font-semibold text-white mr-2 mb-2">
              View more
              </button>
           
            </div>
          </div>
          ))}
      </div>
    </div>
  );
};

export default User;
