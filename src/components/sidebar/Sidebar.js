

import Link from "next/link";
import { BiCoinStack } from "react-icons/bi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineAccountBalanceWallet } from "react-icons/md"
import { FiSearch } from "react-icons/fi";
import { MdCollections } from "react-icons/md";
import { VscDiffAdded } from "react-icons/vsc";
import { BiLike } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "../Theme/ThemeToggle";
import { useTheme } from "next-themes";
const Sidebar = ({ side, closeSidebar }) => {
  const { theme, setTheme } = useTheme();
  const [activeNav, setActiveNav] = useState("/");



    console.log(side,'+++++++++++++dskalfgkdsa alk;kfka');

  console.log(theme);

  return (
    <div

    
      className={`fixed top-0 m-0 md:m-2 ${side} md:left-0 w-64  md:h-[97vh] h-screen  rounded-lg border  dark:bg-dark dark:border-[#1f1f1f]    bg-white   z-40 transition-all`}
    >
      <i
        className="bi bi-x-lg absolute text-white top-4 right-4 sm:hidden block cursor-pointer text-lg"
        onClick={closeSidebar}
      ></i>
      <div className="  pt-10 px-5 flex gap-2">
        <div>
          <Image src={require("../../images/Avatars.png")} alt="" />
        </div>
        <div>
          <h1 className=" text-black  dark:text-white text-lg font-medium">
            Libbie Georage
          </h1>
          <p className=" text-base">BOD#401292</p>
        </div>
      </div>

      <ul className=" p-1 mt-4">
        <li
          onClick={() => {
            closeSidebar;
            setActiveNav("/");
          }}
          className={`px-4 cursor-pointer dark:text-white    ${
            activeNav === "/" ? "bg-[#FCA311]" : ""
          } transition-all py-1 rounded-md text-black  flex items-center hover:bg-[#FCA311]`}
        >
          <i className="mr-2 inline-block text-lg">
            <GoHome size={20} />
          </i>
          <Link href="/" className="text-base capitalize  font-semibold">
            Your Feed
          </Link>
        </li>

        {/* <li
          onClick={() => {
            closeSidebar;

            setActiveNav("/addContent");
          }}
          className={`px-4 cursor-pointer ${
            activeNav === "/addContent" ? "bg-[#FCA311] text-black" : ""
          } transition-all py-1 my-1 text-black  dark:text-white flex items-center rounded-md hover:bg-[#FCA311]`}
        >
          <i className=" mr-2 inline-block text-lg">
         
            <VscDiffAdded size={20} />
          </i>{" "}
          <Link href="/addContent" className="text-base capitalize font-semibold">
            Add Content
          </Link>
        </li> */}


        <li
          onClick={() => {
            closeSidebar;

            setActiveNav("/explore");
          }}
          className={`px-4 cursor-pointer ${
            activeNav === "/explore" ? "bg-[#FCA311] text-black" : ""
          } transition-all py-1 my-1 text-black  dark:text-white flex items-center rounded-md hover:bg-[#FCA311]`}
        >
          <i className=" mr-2 inline-block text-lg">
            <FiSearch size={20} />
          </i>{" "}
          <Link href="/Viewer-Dashboard/explore" className="text-base capitalize font-semibold">
            Explore
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-1 my-1 text-black dark:text-white   flex items-center rounded-md hover:bg-[#FCA311]">
          {theme === "dark" ? (
            <Image
              src={require("../../images/message_n.png")}
              className=" mr-2"
              alt=""
            />
          ) : (
            <Image
              src={require("../../images/bell.png")}
              className=" mr-2"
              alt=""
            />
          )}

          <Link href="/Viewer-Dashboard/messages" className="text-base capitalize font-semibold">
            Messages
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-1 my-1 text-black  dark:text-white  flex items-center rounded-md hover:bg-[#FCA311]">
          {theme === "dark" ? (
            <Image
              src={require("../../images/light_n.png")}
              className=" mr-2"
              alt=""
            />
          ) : (
            <Image
              src={require("../../images/icon1.png")}
              className=" mr-2"
              alt=""
            />
          )}

          <Link href="/Viewer-Dashboard/notifications" className="text-base capitalize font-semibold">
            Notifications
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-1 my-1 text-black dark:text-white  flex items-center rounded-md hover:bg-[#FCA311]">
          <i className="mr-2 inline-block text-lg">
            <BiLike />
          </i>

          <Link
            href="/Viewer-Dashboard/subscriptions"
            className="text-base capitalize font-semibold"
          >
            Subscriptions
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-1 my-1 text-black dark:text-white  flex items-center rounded-md hover:bg-[#FCA311]">
          <i className=" mr-2 inline-block text-lg">
            <MdCollections size={20} />
          </i>{" "}
          <Link href="/Viewer-Dashboard/Collections" className="text-base capitalize font-semibold">
            Collections
          </Link>
        </li>
        {/* <li  onClick={() => {
            closeSidebar;

            setActiveNav("/getPaid");
          }} className={`px-4 cursor-pointer ${
            activeNav === "/getPaid" ? "bg-[#FCA311] text-black" : ""
          } transition-all py-1 my-1 text-black  dark:text-white flex items-center rounded-md hover:bg-[#FCA311]`}>
          <i className=" mr-2 inline-block text-lg">
           
        
            <MdOutlineAccountBalanceWallet size={20}   color={'black'}  />
          </i>{" "}
          <Link href="/getPaid" className="text-base capitalize font-semibold">
            Get Paid
          </Link>
        </li> */}
      </ul>
      <hr />

      <ul className="mt-4 p-1">
        <li className="px-4 cursor-pointer transition-all py-3 text-black dark:text-white  flex items-center">
          <ThemeToggle />
          
          <Link href="#" className="text-base capitalize font-semibold">
            {theme==='light'?'Light':'Dark'} Mode
          </Link>
        </li>
        <li
          onClick={() => {
            setActiveNav("/settings");
          }}
          className={`px-4 cursor-pointer ${
            activeNav === "/settings" ? "bg-[#FCA311]" : ""
          } transition-all py-1 my-1 text-black dark:text-white  flex items-center rounded-md hover:bg-[#FCA311]`}
        >
          <i className="bi bi-gear mr-2 inline-block text-lg"></i>{" "}
          <Link href="/Viewer-Dashboard/settings" className="text-base capitalize font-semibold">
            Settings
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-1 my-1 text-black dark:text-white  flex items-center rounded-md hover:bg-[#FCA311]">
          <i className="mr-2">
            <IoMdHelpCircleOutline size={20} />
          </i>
          <Link href="#" className="text-base capitalize font-semibold">
            Help
          </Link>
        </li>
        {theme === "dark" ? (
          <Image
            src={require("../../images/dark_logo.png")}
            className=" ml-5 mt-5"
            alt=""
          />
        ) : (
          <Image
            src={require("../../images/logo2.png")}
            className=" ml-5 mt-5"
            alt=""
          />
        )}
      </ul>
    </div>
  );
};
export default Sidebar;
