import React, { useEffect, useState } from "react";
import Image from "next/image";
import Wrapper from '../../../layout/Wrapper'
const Dashboard = () => {
  return (
    <>
      <Wrapper>
        <section className=" sm:flex block justify-between  items-center">
          <div>
            <h2 className="main_title ">Welcome Libbie</h2>
            <p className=" text-gray-500">
              Get Ready to Dive into the World of Sports Excellence. 💪
            </p>
          </div>
          <div>
            <div className=" bg-white  dark:border-[#1f1f1f]  dark:bg-dark p-3  rounded-lg border flex gap-3">
              <div className=" w-10 h-10 bg-[#f0f2f5] rounded-full justify-center items-center flex">
                <Image src={require("../../../images/calendar.png")} alt="" />
              </div>
              <div>
                <p className=" text-sm dark:text-gray-300">Today's Date</p>
                <h2 className=" text-black dark:text-white font-bold text-lg">
                  24th Oct, 2023
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className=" py-4  w-full  sm:flex block gap-5">
            <div className="w-[100%] sm:w-[80%]">
              <div className="  bg-white dark:bg-dark border  dark:border-[#1f1f1f] rounded-xl p-5">
                <div className=" flex gap-2">
                  <div className=" relative">
                    <Image src={require("../../../images/m1.png")} alt="" />

                    <i className=" absolute bottom-0 right-0">
                      <Image
                        src={require("../../../images/Verified tick.png")}
                        alt=""
                      />
                    </i>
                  </div>
                  <div>
                    <h2 className=" text-black font-semibold">Maximus Riggs</h2>
                    <p className=" m-0 text-gray-600">Football Coach</p>
                    <p className=" m-0 text-gray-600">5 mins ago</p>
                  </div>
                </div>
                <div className=" pt-4">
                  <button className=" bg-[#f0f2f5]   dark:bg-[#1f1f1f] font-medium rounded-[24px] text-black dark:text-white px-3 text-sm">
                    Soccer
                  </button>
                </div>

                <button className=" bg-black  rounded-[24px] text-white px-3 text-sm mt-3">
                  Subscribers Only
                </button>
                <h2 className=" text-black   dark:text-white text-2xl font-bold mt-8">
                  The Soccer Spirit ⚽🏆
                </h2>

                <p className="param">
                  Hey everyone! It's time to talk about the world's most
                  electrifying sport – soccer! Watch my new drop...
                </p>

                <div className=" pt-5">
                  <Image
                    src={require("../../../images/blog.png")}
                    className=" rounded-md"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-[100%] sm:w-[35%]">
              <Image
                src={require("../../../images/right_img.png")}
                className=" w-full  hidden sm:block"
                alt=""
              />
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Dashboard;
