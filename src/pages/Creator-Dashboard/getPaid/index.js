import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../../../components";
import AddMethods from "../../../components/methods/addMethods";
import CreatorWrapper from "../../../layout/CreatorWrapper";

const GetPaid = () => {
    const [modal, setModal] = useState(false);
  return (

    <>

     <CreatorWrapper>

<AddMethods setShowModal={setModal} showModal={modal} />

      <section className=" sm:flex block justify-between  items-center">
        <div>
          <h2 className="main_title ">Get Paid</h2>
         
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

      <section>
        <div className=" py-4  w-full  sm:flex block gap-5">
          <div className="w-[100%] sm:w-[80%]">
            <div className="  bg-white dark:bg-dark border  dark:border-[#1f1f1f] rounded-xl">
           <div className=" px-4 py-4">
           <h3 className=" font-semibold text-lg dark:text-white">Available Balance</h3>
           </div>
              
             <hr  className=" dark:border-[#1f1f1f]" />

             <div className=" flex justify-between px-4 py-8">
                <div>
                    <h3 className=" text-4xl text-green-500  font-semibold">$1200.00</h3>
                </div>
                <div>
                    <Button label={'Get Paid Now'} className={' dark:bg-orange bg-black text-white'} />
                </div>
             </div>
            </div>


            <div className="  mt-4 bg-white dark:bg-dark border  dark:border-[#1f1f1f] rounded-xl">
           <div className=" px-4 py-4 flex justify-between  items-center">
          <div>
          <h3 className=" font-semibold text-lg dark:text-white">Withdrawal Methods</h3>
          </div>
          <div>
            <Button label={' + Add a Method'} className={' bg-gray-200 dark:bg-orange py-1'}  onClick={() => setModal(true)} />
          </div>
           </div>
              
             <hr className=" dark:border-[#1f1f1f]" />

             <div className=" flex justify-between px-4 py-8">
                <div>
                    <h3 className=" text-base dark:text-white text-black font-semibold">Direct to Local Bank (USD) - Account ending in 000</h3>
                </div>
                <div className=" flex  gap-2">
                 <h4 className=" text-black dark:text-white  text-sm font-medium">Edit</h4>
                 <h4 className=" text-black dark:text-white text-sm font-medium">Remove</h4>
                </div>
             </div>
            </div>
          </div>
          <div className="w-[100%] sm:w-[35%]">
           
          </div>
        </div>
      </section>
      </CreatorWrapper>
    </>
  );
};

export default GetPaid;
