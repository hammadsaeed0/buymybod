import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, GalleryModal, Input } from "../../../components";
import { BiLike } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import CreatorWrapper from "../../../layout/CreatorWrapper";
const Subscriptions = () => {
  return (
    <>

    <CreatorWrapper>
      <section className=" sm:flex block justify-between  items-center">
        <div>
          <h2 className="main_title ">Subscriptions</h2>
          
        </div>
        <div>
          <div className=" bg-white  dark:border-[#1f1f1f]  dark:bg-dark p-3  rounded-lg border flex gap-3">
            <div className=" w-10 h-10 bg-[#f0f2f5] rounded-full justify-center items-center flex">
              <Image src={require("../../../images/calendar.png")} alt="" />
            </div>
            <div>
              <p className=" text-sm dark:text-gray-300">Today's Date</p>
              <h2 className=" text-black dark:text-white font-bold text-lg">24th Oct, 2023</h2>
            </div>
          </div>
        </div>
      </section>



      
      <section id="filter_section" className=" my-6">
        <div className=" bg-white dark:bg-black dark:border-[#1f1f1f] border  rounded-2xl relative  p-2 block md:flex justify-between">
          <div className="  md:w-[30%] w-[100%]">
            <div className=" w-full bg-gray-100   dark:bg-black dark:border-[#1f1f1f] border flex items-center rounded-xl p-1">
              <BsSearch color="black" className=" font-medium" />
              <Input
                className={"bg-transparent ml-2 font-medium"}
                placeholder={"Search creator"}
              />
            </div>
          </div>
        
        </div>
      </section>

      <section className=" flex flex-col gap-4 pb-6">
        
            <div className="  bg-white dark:bg-dark border  flex justify-between  items-center dark:border-[#1f1f1f] rounded-xl p-5">
              <div className=" flex  items-center gap-2">
                <div className=" relative">
                  <Image src={require("../../../images/m1.png")} alt="" />

                
                </div>
                <div>
                  <h2 className=" text-black font-semibold  dark:text-white">Maximus Riggs</h2>
                  <p className=" m-0 text-gray-600">Football Coach</p>
                 
                </div>
              </div>
              <div>
              <div className=" pt-4 flex items-center gap-6">

                <div>
                  <h2 className=" font-semibold  text-lg">followers</h2>
                  <span className=" text-gray-700">112</span>
                </div>
                <div>
                  <h2 className=" font-semibold  text-lg">Subscriptions</h2>
                  <span className=" text-gray-700">112</span>
                </div>
              
               <Button  label={"Go to Creator's Page"} className={' bg-black dark:bg-orange     w-52 text-white'}  />
               <Button
                   
                    label={`Unsubscribe`}
                    className={` bg-[#F0F2F5]   w-52   text-black`}
                  />
              </div>
              </div>
             
              
            </div>

            <div className="  bg-white dark:bg-dark border  flex justify-between  items-center dark:border-[#1f1f1f] rounded-xl p-5">
              <div className=" flex  items-center gap-2">
                <div className=" relative">
                  <Image src={require("../../../images/m1.png")} alt="" />

                
                </div>
                <div>
                  <h2 className=" text-black font-semibold  dark:text-white">Maximus Riggs</h2>
                  <p className=" m-0 text-gray-600">Football Coach</p>
                 
                </div>
              </div>
              <div>
              <div className=" pt-4 flex items-center gap-6">

                <div>
                  <h2 className=" font-semibold  text-lg">followers</h2>
                  <span className=" text-gray-700">112</span>
                </div>
                <div>
                  <h2 className=" font-semibold  text-lg">Subscriptions</h2>
                  <span className=" text-gray-700">112</span>
                </div>
              
               <Button  label={"Go to Creator's Page"} className={' bg-black dark:bg-orange     w-52 text-white'}  />
               <Button
                   
                    label={`Unsubscribe`}
                    className={` bg-[#F0F2F5]   w-52   text-black`}
                  />
              </div>
              </div>
             
              
            </div>
            <div className="  bg-white dark:bg-dark border  flex justify-between  items-center dark:border-[#1f1f1f] rounded-xl p-5">
              <div className=" flex  items-center gap-2">
                <div className=" relative">
                  <Image src={require("../../../images/m1.png")} alt="" />

                
                </div>
                <div>
                  <h2 className=" text-black font-semibold  dark:text-white">Maximus Riggs</h2>
                  <p className=" m-0 text-gray-600">Football Coach</p>
                 
                </div>
              </div>
              <div>
              <div className=" pt-4 flex items-center gap-6">

                <div>
                  <h2 className=" font-semibold  text-lg">followers</h2>
                  <span className=" text-gray-700">112</span>
                </div>
                <div>
                  <h2 className=" font-semibold  text-lg">Subscriptions</h2>
                  <span className=" text-gray-700">112</span>
                </div>
              
               <Button  label={"Go to Creator's Page"} className={' bg-black dark:bg-orange     w-52 text-white'}  />
               <Button
                   
                    label={`Unsubscribe`}
                    className={` bg-[#F0F2F5]   w-52   text-black`}
                  />
              </div>
              </div>
             
              
            </div>
            <div className="  bg-white dark:bg-dark border  flex justify-between  items-center dark:border-[#1f1f1f] rounded-xl p-5">
              <div className=" flex  items-center gap-2">
                <div className=" relative">
                  <Image src={require("../../../images/m1.png")} alt="" />

                
                </div>
                <div>
                  <h2 className=" text-black font-semibold  dark:text-white">Maximus Riggs</h2>
                  <p className=" m-0 text-gray-600">Football Coach</p>
                 
                </div>
              </div>
              <div>
              <div className=" pt-4 flex items-center gap-6">

                <div>
                  <h2 className=" font-semibold  text-lg">followers</h2>
                  <span className=" text-gray-700">112</span>
                </div>
                <div>
                  <h2 className=" font-semibold  text-lg">Subscriptions</h2>
                  <span className=" text-gray-700">112</span>
                </div>
              
               <Button  label={"Go to Creator's Page"} className={' bg-black dark:bg-orange     w-52 text-white'}  />
               <Button
                   
                    label={`Unsubscribe`}
                    className={` bg-[#F0F2F5]   w-52   text-black`}
                  />
              </div>
              </div>
             
              
            </div>
            <div className="  bg-white dark:bg-dark border  flex justify-between  items-center dark:border-[#1f1f1f] rounded-xl p-5">
              <div className=" flex  items-center gap-2">
                <div className=" relative">
                  <Image src={require("../../../images/m1.png")} alt="" />

                
                </div>
                <div>
                  <h2 className=" text-black font-semibold  dark:text-white">Maximus Riggs</h2>
                  <p className=" m-0 text-gray-600">Football Coach</p>
                 
                </div>
              </div>
              <div>
              <div className=" pt-4 flex items-center gap-6">

                <div>
                  <h2 className=" font-semibold  text-lg">followers</h2>
                  <span className=" text-gray-700">112</span>
                </div>
                <div>
                  <h2 className=" font-semibold  text-lg">Subscriptions</h2>
                  <span className=" text-gray-700">112</span>
                </div>
              
               <Button  label={"Go to Creator's Page"} className={' bg-black dark:bg-orange     w-52 text-white'}  />
               <Button
                   
                    label={`Unsubscribe`}
                    className={` bg-[#F0F2F5]   w-52   text-black`}
                  />
              </div>
              </div>
             
              
            </div>
            
  
      </section>
      </CreatorWrapper>
    </>
  );
};

export default Subscriptions;
