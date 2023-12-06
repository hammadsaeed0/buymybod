import React from "react";
import Button from "../Button";

import { Carousel } from "react-responsive-carousel";
import sliderImg_1 from "../../images/g1.png";
import sliderImg_2 from "../../images/g2.png";
import sliderImg_3 from "../../images/g3.png";
import { AiOutlineBank } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";
export default function AddMethods({
  showModal,
  setShowModal,
  deleteUser,
  setUsers,
}) {
  return (
    <>
      {showModal ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative  my-6  md:w-[70%]  w-[90%]">
              <span
                className=" text-white text-2xl float-right font-bold  cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                x
              </span>
              {/*content*/}
              <div className="border-0 rounded-lg  overflow-hidden shadow-lg relative flex flex-col w-full bg-white dark:bg-black  dark:border-[#1f1f1f] outline-none focus:outline-none">
                {/*body*/}
                <div className="">
                <div className=" px-3 py-3">
                <h2 className="   text-2xl font-semibold dark:text-white">Add a Method</h2>
                </div>
                      <hr/>

                      <div className=" flex justify-between items-center px-4 py-5">
                        <div className=" flex gap-2">
                        <AiOutlineBank   size={30} />
                           <div>
                           <h2 className="  text-lg font-semibold dark:text-white">Direct to Local Bank (USD)</h2>
                            <ul>
                                <li className=" dark:text-white"> . $0.99 USD per Withdrawal</li>
                                <li className=" dark:text-white">.  Deposit to your local bank account in USD</li>
                            </ul>
                           </div>
                        </div>
                        <div>
                            <Button label={'Set up'}  className={' bg-black  dark:bg-orange text-white'} />
                        </div>
                      </div>

                      <hr/>

                      <div className=" flex justify-between items-center px-4 py-5">
                        <div className=" flex gap-2">
                        <AiOutlineBank   size={30} />
                           <div>
                           <h2 className="  text-lg font-semibold dark:text-white">Payoneer</h2>
                            <ul>
                                <li className="dark:text-white"> . $0.99 USD per Withdrawal</li>
                                <li className="dark:text-white">.  Deposit to your local bank account in USD</li>
                            </ul>
                           </div>
                        </div>
                        <div>
                            <Button label={'Set up'}  className={' bg-black  dark:bg-orange text-white'} />
                        </div>
                      </div>
                      <hr/>

                      <div className=" flex justify-between items-center px-4 py-5">
                        <div className=" flex gap-2">
                        <AiOutlineBank   size={30} />
                           <div>
                           <h2 className="  text-lg font-semibold dark:text-white">PayPal</h2>
                            <ul>
                                <li className="dark:text-white"> . $0.99 USD per Withdrawal</li>
                                <li className="dark:text-white">.  Deposit to your local bank account in USD</li>
                            </ul>
                           </div>
                        </div>
                        <div>
                            <Button label={'Set up'}  className={' bg-black  dark:bg-orange text-white'} />
                        </div>
                      </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
