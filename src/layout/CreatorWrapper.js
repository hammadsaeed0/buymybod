import { useState } from "react";
import Sidebar from "../components/Creator/sidebar/Sidebar";
import AdminNav from "../components/Creator/adminNav/AdminNav";
import Image from "next/image";
const CreatorWrapper = ({ children }) => {
  const [side, setSide] = useState("-left-64 md:left-0");

  console.log(side);
  const openSidebar = () => {
    setSide("left-0 md:-left-64");
  };
  const closeSidebar = () => {
    setSide("-left-64 md:left-0");
  };

  return (
    <>
      <Sidebar side={side} closeSidebar={closeSidebar} />
      <AdminNav
        openSidebar={openSidebar}
        closeSidebar={closeSidebar}
        side={side}
      />
      <section
        id="wrapper"
        style={{ paddingTop: "100px", marginLeft: "265px" }}
        className={`ml-0 ${
          side === "left-0 md:-left-64" ? "ml-0 " : "ml-0 md:ml-64"
        }   min-h-screen pt-24 `}
      >
        <div className=" text-black px-10">{children}</div>
      </section>
    </>
  );
};
export default CreatorWrapper;
