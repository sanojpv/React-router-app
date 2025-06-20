import React, { useEffect, useState } from "react";
import { data } from "../data/Userdata";
import { Link, useParams } from "react-router-dom";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { HiHome } from "react-icons/hi2";

const Userdetails = () => {
  const [userdata, setUsersdata] = useState(data);

  const { id } = useParams();
  useEffect(() => {
    const singleuser = userdata.find((user) => user.id == id);
    setUsersdata(singleuser);
  }, []);

  return (
   <div>
      <div>
        <h1 className="font-bold text-3xl flex justify-center">User Details</h1>
      </div>

      <div className="ml-10 mr-10 ">
        <div className="max-w-sm border-l-2 border-b-2 rounded-2xl border-r-2 pb-4 mx-auto w-full md:max-w-full lg:max-w-200 h-fit  mt-5">
          <div className="h-45  rounded-t-xl bg-blue-800 text-white lg:h-45 flex items-center  lg:w-full">
           
              <h2 className="inline-block   lg:flex items-center gap-2 ml-5 text-5xl ">
                  {userdata.icon} {userdata.name}
              </h2>
            
          </div>
          <div className="mx-1 my-2 outline-0  rounded-b-2xl lg:rounded-b-2xl lg:p-4 bg-gray-200 rounded-2xl  ">
            <div className=" h-48 font-bold mx-1  ">
            

              <p className="flex items-center gap-1 py-2 lg:py-4"><MdOutlineAttachEmail className="text-2xl text-red-500"/> Email: {userdata.email}</p>
           
              <p className="flex items-center gap-1 py-4 lg:py-4"><FcBusinessman className="text-2xl"/> Job_role: {userdata.job_role}</p>
              <p className="flex items-center gap-1 py-4 lg:py-4"><FaPhoneAlt className="text-2xl text-green-500"/>Phone: {userdata.phone_number}</p>

              </div>
               <div className="grid  gap-2 text-white lg:flex justify-center  ">
                <Link to="/user"><button className="w-50 rounded-sm p-1.5 text-lg bg-blue-600 ml-2 mb-3 hover:bg-blue-700 cursor-pointer flex justify-center items-center gap-4"><IoMdArrowRoundBack />Go Back</button></Link>
                <Link to="/"><button className="w-50 rounded-sm p-1.5 text-lg bg-blue-600 ml-2 mb-3 hover:bg-blue-700 cursor-pointer flex justify-center items-center gap-3"><HiHome />
 Home</button></Link>
               </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdetails;
