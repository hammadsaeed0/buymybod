import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import CreatorWrapper from "../../../layout/CreatorWrapper";

const ProfileSettings = () => {

  const {theme,setTheme}  = useTheme();
  return (
    <>

    <CreatorWrapper>
      <section className=" sm:flex block justify-between  items-center">
        <div>
          <h2 className="main_title">Profile Settings</h2>
        </div>
        <div>
          <div className=" bg-white dark:bg-dark p-3  dark:border-[#1f1f1f] rounded-lg border flex gap-3">
            <div className=" w-10 h-10 bg-[#f0f2f5] rounded-full justify-center items-center flex">
              <Image src={require("../../../images/calendar.png")} alt="" />
            </div>
            <div>
              <p className=" text-sm">Today's Date</p>
              <h2 className=" text-black dark:text-white font-bold text-lg">24th Oct, 2023</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" py-4  w-full  sm:flex block gap-5">
          <div className="w-[100%] sm:w-[80%]">
            <div className="  bg-white dark:bg-dark border dark:border-[#1f1f1f] rounded-xl">
              <div className=" p-5 flex justify-between">
                <h3 className=" text-xl font-semibold dark:text-white">Your Profile</h3>
                
                {theme==='light'?(
 <Image
 src={require("../../../images/pencile.png")}
 className=" object-contain"
 alt=""
/>
                ):(
                  <Image
                  src={require("../../../images/white_pencile.png")}
                  className=" object-contain"
                  alt=""
                />
                )}
               
              </div>
              <hr className="  dark:border-[#1f1f1f]" />
              <div className=" md:flex block items-center pb-7">
                <div className=" md:w-[35%] w-[100%]">
                  <div className=" px-5">
                    <Image
                      src={require("../../../images/Avatars.png")}
                      className=" w-20   h-20"
                      alt=""
                    />
                    <h1 className=" text-black dark:text-white  text-lg font-medium">
                      Libbie Georage
                    </h1>
                    <p className=" text-base text-gray-500">
                      l.george@gmail.com
                    </p>
                  </div>
                </div>
                <div className=" md:w-[65%] w-[100%] border-l-2 p-5">
                  <div className="flex justify-between   items-center">
                    <div>
                      <p className=" font-normal  dark:text-white ">Age</p>
                      <h4 className=" font-bold   dark:text-white text-lg">26 y/o</h4>
                    </div>

                    <div>
                      <p className=" dark:text-white ">Date of Birth</p>

                      <h4 className=" font-bold  dark:text-white   text-lg">15-05-1994</h4>
                    </div>

                    <div>
                      <p className=" dark:text-white ">Racial Background </p>

                      <h4 className=" font-bold  dark:text-white   text-lg">
                        White / Caucasian
                      </h4>
                    </div>
                  </div>

                  <div className=" pt-4">
                    <p className=" text-gray-600  dark:text-white  font-medium">Account Type</p>
                    <h2 className=" font-semibold  dark:text-white  text-xl">Viewer</h2>
                  </div>
                </div>
              </div>
            </div>

            <section>
              <div className=" w-full py-5  grid  grid-cols-2  xl:grid-cols-3 md:grid-cols-2 gap-5 md:gap-3">
                <div className=" bg-white dark:bg-dark border  dark:border-[#1f1f1f] rounded-2xl p-3 flex justify-between">
                  <div>
                    <p className=" font-normal dark:text-white">Weight</p>
                    <h3 className=" text-xl  font-bold dark:text-white">60kg</h3>
                  </div>
                  <div>
                    <Image src={require("../../../images/weight.png")} alt="" />
                  </div>
                </div>
                <div className=" bg-white   dark:bg-black border dark:border-[#1f1f1f] rounded-2xl p-3 flex justify-between">
                  <div>
                    <p className="font-normal dark:text-white">Height</p>
                    <h3 className=" text-xl  font-bold dark:text-white">60kg</h3>
                  </div>
                  <div>
                    <Image src={require("../../../images/height.png")} alt="" />
                  </div>
                </div>
                <div className=" bg-white dark:bg-black border  dark:border-[#1f1f1f] rounded-2xl p-3 flex justify-between">
                  <div>
                    <p className="font-normal dark:text-white">Desired Height</p>
                    <h3 className=" text-xl  font-bold dark:text-white">60kg</h3>
                  </div>
                  <div>
                    <Image src={require("../../../images/d_weight.png")} alt="" />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="  bg-white dark:bg-dark border dark:border-[#1f1f1f] rounded-xl">
                <div className=" p-5">
                  <h3 className=" text-xl font-semibold dark:text-white">Preferences</h3>
                </div>
                <hr />
                <div className=" p-5">
                  <p className=" mb-4 dark:text-gray-50">Body Type Search</p>

                  <ul className=" flex gap-3 flex-wrap">
                    <li>
                      <p className=" bg-black px-2   text-white dark:bg-orange text-base font-semibold  rounded-2xl">
                        Hourglass
                      </p>
                    </li>
                    <li>
                      <p className="  bg-gray-200 px-2  text-black dark:text-white   dark:bg-[#1f1f1f] font-semibold text-base  rounded-2xl">
                        V-Shaped
                      </p>
                    </li>
                    <li>
                      <p className="  bg-gray-200 px-2  text-black dark:text-white   dark:bg-[#1f1f1f] font-semibold text-base  rounded-2xl">
                        A-Shaped
                      </p>
                    </li>
                    <li>
                      <p className="  bg-gray-200 px-2  text-black dark:text-white   dark:bg-[#1f1f1f] font-semibold text-base  rounded-2xl">
                        Y-Shaped
                      </p>
                    </li>
                    <li>
                      <p className="  bg-gray-200 px-2  text-black  dark:text-white  dark:bg-[#1f1f1f] font-semibold text-base  rounded-2xl">
                        Rectangular
                      </p>
                    </li>
                    <li>
                      <p className="  bg-gray-200 px-2  text-black dark:text-white  dark:bg-[#1f1f1f]  font-semibold text-base  rounded-2xl">
                        X-Shaped
                      </p>
                    </li>
                    <li>
                      <p className="  bg-gray-200 px-2  text-black dark:text-white  dark:bg-[#1f1f1f]  font-semibold text-base  rounded-2xl">
                        O-Shaped
                      </p>
                    </li>
                  </ul>

                  <p className=" mb-4 mt-10 dark:text-white">Filter by Sport</p>

                  <ul className=" flex gap-3 flex-wrap">
                    <li>
                      <p className=" bg-black px-2  text-white  dark:bg-[#1f1f1f] text-base font-semibold  rounded-2xl">
                        Soccer
                      </p>
                    </li>
                    <li>
                      <p className="  bg-gray-200 px-2  dark:text-white  text-black dark:bg-[#1f1f1f]  font-semibold text-base  rounded-2xl">
                        Basketball
                      </p>
                    </li>
                    <li>
                      <p className="  bg-gray-200 px-2  dark:text-white  text-black  dark:bg-[#1f1f1f] font-semibold text-base  rounded-2xl">
                        Skiing
                      </p>
                    </li>
                    <li>
                      <p className="  bg-gray-200 px-2  dark:text-white  dark:bg-orange text-black  font-semibold text-base  rounded-2xl">
                        Tennis
                      </p>
                    </li>
                    <li>
                      <p className="  bg-gray-200 px-2  dark:text-white  text-black dark:bg-[#1f1f1f]  font-semibold text-base  rounded-2xl">
                        Ice Skating
                      </p>
                    </li>
                    <li>
                      <p className="  bg-gray-200 px-2 dark:text-white   text-black dark:bg-[#1f1f1f]    font-semibold text-base  rounded-2xl">
                        American Football
                      </p>
                    </li>
                    <li>
                      <p className="  bg-gray-200 px-2 dark:text-white   text-black dark:bg-[#1f1f1f]    font-semibold text-base  rounded-2xl">
                        Pilates
                      </p>
                    </li>
                    <li>
                      <p className="  bg-gray-200 px-2 dark:text-white   text-black dark:bg-[#1f1f1f]    font-semibold text-base  rounded-2xl">
                        Swimming
                      </p>
                    </li>
                    <li>
                      <p className="  bg-gray-200 px-2 dark:text-white  text-black  dark:bg-[#1f1f1f]   font-semibold text-base  rounded-2xl">
                        Weightlifting
                      </p>
                    </li>
                    <li>
                      <p className="  bg-gray-200 px-2  dark:text-white  text-black  dark:bg-[#1f1f1f]   font-semibold text-base  rounded-2xl">
                        Golf
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
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
      </CreatorWrapper>
    </>
  );
};

export default ProfileSettings;
