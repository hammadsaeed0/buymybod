import React from "react";
import Button from "../Button";

import { Carousel } from "react-responsive-carousel";
import sliderImg_1 from "../../images/g1.png";
import sliderImg_2 from "../../images/g2.png";
import sliderImg_3 from "../../images/g3.png";
import { motion } from "framer-motion";
import Image from "next/image";
export default function GalleryModal({
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
              <div className="border-0 rounded-lg overflow-hidden shadow-lg relative flex flex-col w-full bg-white dark:bg-black  dark:border-[#1f1f1f] outline-none focus:outline-none">
                {/*body*/}
                <div className="relative  block md:flex">
                  <div className=" bg-black  px-20 pt-10 md:w-[70%] w-[100%]">
                    {/* <Image
                      src={require("../../images/g1.png")}
                      className=" h-full w-full"
                      alt=""
                    /> */}
                    <Carousel
                      autoPlay
                      infiniteLoop
                      showStatus={false}
                      showIndicators={true}
                      showThumbs={true}
                      interval={3000}
                    >
                      <div className=" h-full">
                        <Image
                          priority
                          src={sliderImg_1}
                          className=" h-full"
                          alt=""
                        />
                      </div>
                      <div className=" h-full">
                        <Image src={sliderImg_2} className=" h-full" alt="" />
                      </div>
                      <div className=" h-full">
                        <Image src={sliderImg_3} className=" h-full" alt="" />
                      </div>
                    </Carousel>
                  </div>
                  <div className=" p-4   md:w-[40%] w-[100%]">
                    <div className=" bg-white dark:bg-black dark:border-[#1f1f1f] border p-2 rounded-xl">
                      <div className=" h-32">
                        <Image
                          src={require("../../images/g1.png")}
                          className="mx-auto   rounded-tl-xl rounded-tr-xl h-full w-full"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h2 className=" text-black dark:text-white text-xl font-bold">
                          Mae Garza
                        </h2>
                        <p className=" m-0 text-blueGray-500  dark:text-[#4f4f4f] text-base leading-relaxed">
                          Professional Climber
                        </p>
                        <p className=" m-0 text-blueGray-500  dark:text-[#4f4f4f] text-base leading-relaxed">
                          BOD #345001
                        </p>

                        <div className=" flex gap-2 mt-4 flex-wrap">
                          <p className=" bg-[#F0F2F5]  px-2 rounded-xl">
                            Track & Field{" "}
                          </p>
                          <p className=" bg-[#F0F2F5] px-2 rounded-xl">
                            Basketball
                          </p>
                          <p className=" bg-[#F0F2F5] px-2 rounded-xl">
                            Tennis
                          </p>
                          <p className=" bg-[#F0F2F5] px-2 rounded-xl">
                            2 more
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" text-center mt-10">
                      <Button
                        label={`Go to Creator's Page`}
                        className={` bg-black   dark:bg-orange w-full   text-white px-10`}
                      />

                      <div className=" w-[90%] mx-auto">
                        <Button
                          Icons={
                            <Image
                              src={require("../../images/icon1.png")}
                              alt=""
                            />
                          }
                          label={`Send Message`}
                          className={` bg-[#F0F2F5]    w-full   text-black mt-2`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
