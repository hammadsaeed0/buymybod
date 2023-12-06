import { FiMenu } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Image from "next/image";
import { useTheme } from "next-themes";
import Button from "../../Button";
import { useState } from "react";
const AdminNav = ({ openSidebar, side, closeSidebar }) => {
  const { theme, setTheme } = useTheme();
const [notifications,setNotifications] = useState(false);

  return (
    <nav
      className={`fixed  top-0 right-0   z-10 mx-5 md:mx-10  ${
        side === "left-0 md:-left-64" ? "left-0" : "left-0 md:left-64"
      }`}
    >
      <div className=" bg-white dark:bg-dark dark:border-[#1f1f1f]  rounded-lg  mt-2  border w-full flex justify-between  items-center p-4">
        <div className=" flex items-center gap-4">
          {theme === "light"? (
            <Image src={require("../../../images/logo2.png")} alt="" />
          ) : (
          
            <Image src={require("../../../images/dark_logo.png")} alt="" />
          )}

          <h2 className=" text-primary text-xl font-medium">BUY MY BOD</h2>
        </div>

        <div className=" flex items-center gap-3">
          <div className=" block md:hidden ">
            <div className="bg-[#f0f2f5] w-9 h-9 relative rounded-full  flex justify-center items-center">
              {side === "left-0 md:-left-64" ? (
                <FiMenu size={20} onClick={closeSidebar} />
              ) : (
                <FiMenu size={20} onClick={openSidebar} />
              )}
            </div>
          </div>

         

          {notifications===false?(
 <div onClick={()=>setNotifications(true)} className="bg-[#f0f2f5] w-9 h-9 relative rounded-full  flex justify-center items-center">
 <Image src={require("../../../images/bell.png")} alt="" />
 <span className=" w-2 h-2  bg-red-500  rounded-full absolute bottom-0 right-0"></span>
</div>
          ):(
            <div onClick={()=>setNotifications(false)} className="bg-[#f0f2f5] w-9 h-9 relative rounded-full  flex justify-center items-center">
            <Image src={require("../../../images/bell.png")} alt="" />
            <span className=" w-2 h-2  bg-red-500  rounded-full absolute bottom-0 right-0"></span>
          </div>
          )}

          <div className="bg-[#f0f2f5] w-9 h-9 rounded-full  flex justify-center items-center">
            <Image src={require("../../../images/icon1.png")} alt="" />
          </div>
        </div>
      </div>

        {notifications===true?(
          <div className="  w-96 mt-2 rounded-lg shadow-md dark:bg-black  border  dark:border-[#1f1f1f]  bg-white  float-right">
       <div className=" px-3 py-3 flex  gap-2">
       <h1 className=" text-black font-bold  dark:text-white">Notifications</h1>
       <span className=" px-3 bg-red-500 rounded-xl text-white">1 unread</span>
       </div>
       <hr   className=" dark:border-[#1f1f1f]" />

       <div className=" p-4">
        <div className=" flex gap-3 py-2">
          <div>
           <Image src={require('../../../images/m1.png')} className=" w-10 h-10 rounded-full" alt="" />
          </div>
          <div>
            <h1 className=" text-black  font-semibold  dark:text-white">Alex Turner</h1>
            <p>started a live broadcast.</p>
          </div>
        </div>
        <Button  label={'Join Now'} className={' bg-black my-2 text-white dark:bg-orange'} />
        <span className=" text-gray-300">4 mins ago</span>
       </div>
      </div>
        ):null}
      
    </nav>
  );
};
export default AdminNav;
