import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, GalleryModal, Input } from "../../../components";
import { BsSearch } from "react-icons/bs";

import { motion, Variants } from "framer-motion";
import { TfiAngleDown } from "react-icons/tfi";
import Wrapper from '../../../layout/Wrapper'

const Dashboard = () => {
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const [modal, setModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [openCategory, setOpenCategory] = useState("popular");

  return (
    <>
     <Wrapper>
     <GalleryModal setShowModal={setModal} showModal={modal} />
      <section className=" sm:flex block justify-between  items-center">
        <div>
          <h2 className="main_title">Explore</h2>
          <p className=" text-gray-500">
            Dive into the world of creativity and explore the boundless talents
            of creators.
          </p>
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
          <div className=" md:flex block  items-center gap-2  ">
            <Button
              onClick={() => setOpenCategory("popular")}
              label={`Most Popular`}
              className={
                openCategory === "popular"
                  ? " bg-black dark:bg-orange md:mt-0 mt-2 w-full  text-white"
                  : " bg-[#F0F2F5] dark:bg-black w-full  border dark:border-[#1f1f1f] dark:text-white md:mt-0 mt-2  text-black"
              }
            />
            <Button
              onClick={() => setOpenCategory("recommended")}
              label={`Recommended`}
              className={
                openCategory === "recommended"
                  ? " bg-black dark:bg-orange w-full md:mt-0 mt-2  text-white"
                  : " bg-[#F0F2F5] dark:bg-black  w-full border dark:border-[#1f1f1f] dark:text-white md:mt-0 mt-2  text-black"
              }
            />
            <motion.nav
              initial={false}
              animate={isOpen ? "open" : "closed"}
              className="menu bg-[#F0F2F5] px-3 rounded-lg   md:mt-0 mt-2 "
            >
              <motion.button
                className=" flex items-center md:w-40 w-[100%]  justify-center py-2 rounded-xl"
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div>
                  <p className="font-medium"> Detailed Search</p>
                </div>
                <motion.div
                  className=" ml-3"
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ originY: 0.55 }}
                >
                  <TfiAngleDown />
                </motion.div>
              </motion.button>

              <motion.ul
                className="  bg-white dark:bg-black absolute w-full z-20  dark:border-[#1f1f1f] border   rounded-xl  left-0 mt-4  px-12 pt-7"
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
              >
                <div className=" md:flex block">
                  <div>
                    <ul className=" pt-6 flex gap-3 flex-wrap">
                      <li>
                        <p className=" bg-black text-white rounded-xl text-sm  font-semibold px-3">
                          Soccer
                        </p>
                      </li>
                      <li>
                        <p className=" bg-gray-200 text-black rounded-xl text-sm  font-semibold px-3">
                          Basketball
                        </p>
                      </li>
                      <li>
                        <p className=" bg-gray-200 text-black rounded-xl text-sm font-semibold px-3">
                          Skiing
                        </p>
                      </li>
                      <li>
                        <p className=" bg-gray-200 text-black rounded-xl text-sm font-semibold  px-3">
                          Tennis
                        </p>
                      </li>
                      <li>
                        <p className=" bg-gray-200 text-black rounded-xl font-semibold px-3">
                          Ice Skating
                        </p>
                      </li>
                      <li>
                        <p className=" bg-gray-200 text-black rounded-xl text-sm font-semibold  px-3">
                          American Football
                        </p>
                      </li>
                      <li>
                        <p className=" bg-gray-200 text-black rounded-xl text-sm font-semibold px-3">
                          Pilates
                        </p>
                      </li>
                      <li>
                        <p className=" bg-gray-200 text-black rounded-xl text-sm  font-semibold px-3">
                          Swimming
                        </p>
                      </li>
                      <li>
                        <p className=" bg-gray-200 text-black rounded-xl text-sm font-semibold px-3">
                          Weightlifting
                        </p>
                      </li>
                      <li>
                        <p className=" bg-gray-200 text-black rounded-xl text-sm font-semibold px-3">
                          Golf
                        </p>
                      </li>
                      <li>
                        <p className=" bg-gray-200 text-black rounded-xl text-sm font-semibold px-3">
                          Volleyball
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className=" md:flex block gap-20">
                      <div>
                        <p className=" font-semibold text-sm dark:text-white">Weight</p>

                        <div className=" flex items-center gap-3 mt-5 ">
                          <Input
                            className={
                              "bg-gray-200 w-14 rounded-xl font-semibold "
                            }
                            placeholder={"Min"}
                          />
                          <h6 className="dark:text-white">to</h6>
                          <Input
                            className={
                              "bg-gray-200 w-14 rounded-xl font-semibold"
                            }
                            placeholder={"Max"}
                          />
                        </div>
                      </div>
                      <div>
                        <p className=" font-semibold text-sm dark:text-white">Height</p>

                        <div className=" flex items-center gap-3 mt-5">
                          <Input
                            className={
                              "bg-gray-200 w-14 rounded-xl font-semibold"
                            }
                            placeholder={"Min"}
                          />
                          <h6 className="dark:text-white">to</h6>
                          <Input
                            className={
                              "bg-gray-200 w-14 rounded-xl font-semibold"
                            }
                            placeholder={"Max"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" mt-10">
                      <h1 className=" text-black dark:text-white  font-semibold">
                        Price Range
                      </h1>

                      <>
                        {/* between two numbers */}
                        <div className="flex w-64 items-center h-20 justify-center">
                          <div className="py-1 relative min-w-full">
                            <div className="h-2 bg-gray-200 rounded-full">
                              <div
                                className="absolute h-2 rounded-full bg-black dark:bg-orange w-0"
                                style={{ width: "24.1935%", left: "11.2903%" }}
                              />
                              <div
                                className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-black shadow dark:bg-orange border border-gray-300 -ml-2 top-0 cursor-pointer"
                                unselectable="on"
                                onselectstart="return false;"
                                style={{ left: "11.2903%" }}
                              >
                                <div className="relative -mt-2 w-1">
                                  <div
                                    className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                                    style={{ marginLeft: "-25px" }}
                                  >
                                    <div className="relative shadow-md">
                                      {/* <div className="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
                  $ 15
                </div> */}
                                      <svg
                                        className="absolute text-black dark:text-white w-full h-2 left-0 top-100"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 255 255"
                                        xmlSpace="preserve"
                                      >
                                        <polygon
                                          className="fill-current"
                                          points="0,0 127.5,127.5 255,0"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-black shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
                                unselectable="on"
                                onselectstart="return false;"
                                style={{ left: "35.4839%" }}
                              >
                                <div className="relative -mt-2 w-1">
                                  <div
                                    className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                                    style={{ marginLeft: "-25px" }}
                                  >
                                    <div className="relative shadow-md">
                                      {/* <div className="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
                  $ 30
                </div> */}
                                      <svg
                                        className="absolute text-black w-full h-2 left-0 top-100"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 255 255"
                                        xmlSpace="preserve"
                                      >
                                        <polygon
                                          className="fill-current"
                                          points="0,0 127.5,127.5 255,0"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute text-gray-800 -ml-1 -top-7 bottom-0 left-0 -mb-6 flex gap-1">
                                <p className=" text-gray-400  font-semibold">
                                  Form:
                                </p>{" "}
                                <p className=" text-black dark:text-white font-semibold">
                                  {" "}
                                  $ 20
                                </p>
                              </div>
                              <div className="absolute text-gray-800 -mr-1 -top-7 bottom-0 right-0 -mb-6 flex gap-1">
                                <p className=" text-gray-400  font-semibold">
                                  To:
                                </p>{" "}
                                <p className=" text-black dark:text-white font-semibold">
                                  {" "}
                                  $ 70
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    </div>
                  </div>
                </div>
              </motion.ul>
            </motion.nav>
          </div>
        </div>
      </section>

      {openCategory === "popular" ? (
        <section>
          <h2 className="main_title">Most Popular Creators</h2>

          <div className="   py-12  w-full  grid  grid-cols-1  xl:grid-cols-2 md:grid-cols-2 gap-5">
            <div className=" bg-white  dark:bg-black border dark:border-[#1f1f1f] p-2 rounded-xl">
              <div className=" h-48">
                <Image
                  src={require("../../../images/c1.png")}
                  className="mx-auto   object-cover  rounded-xl h-full w-full"
                  alt=""
                />
              </div>
              <div className="">
                <h2 className=" text-black dark:text-white text-xl font-bold mt-2">
                  Maximus Riggs
                </h2>
                <p className=" m-0 dark:text-[#4f4f4f]  text-blueGray-500 text-base leading-relaxed">
                  Football Coach
                </p>
                <p className=" m-0 dark:text-[#4f4f4f]  text-blueGray-500  text-base leading-relaxed">
                  BOD #345001
                </p>

                <div className=" flex gap-2 mt-4 flex-wrap">
                  <p className=" bg-[#F0F2F5] dark:bg-[#1f1f1f] dark:text-white  px-2 rounded-xl font-semibold">
                    Track & Field{" "}
                  </p>
                  <p className=" bg-[#F0F2F5] dark:bg-[#1f1f1f] dark:text-white px-2 rounded-xl font-semibold">
                    Basketball
                  </p>
                  <p className=" bg-[#F0F2F5] dark:bg-[#1f1f1f] dark:text-white px-2 rounded-xl font-semibold">
                    Tennis
                  </p>
                  <p className=" bg-[#F0F2F5] dark:bg-[#1f1f1f] dark:text-white px-2 rounded-xl font-semibold">
                    2 more
                  </p>
                </div>
              </div>

              <div className=" text-center mt-12 md:flex  block gap-2  items-center">
                <div className=" md:w-[80%] w-[100%] mx-auto">
                  <Button
                    label={`Go to Creator's Page`}
                    className={` bg-black   dark:bg-orange  w-full   text-white `}
                  />
                </div>

                <div className=" md:w-[50%] w-[100%] md:mt-0 mt-3 mx-auto">
                  <Button
                    Icons={
                      <Image src={require("../../../images/icon1.png")} alt="" />
                    }
                    label={`Send Message`}
                    className={` bg-[#F0F2F5]     text-black`}
                  />
                </div>
              </div>
            </div>
            <div className=" bg-white  dark:bg-black border dark:border-[#1f1f1f] p-2 rounded-xl">
              <div className=" h-48">
                <Image
                  src={require("../../../images/c2.png")}
                  className="mx-auto   object-cover  rounded-xl h-full w-full"
                  alt=""
                />
              </div>
              <div className="">
                <h2 className=" text-black dark:text-white text-xl font-bold mt-2">
                  Maximus Riggs
                </h2>
                <p className=" m-0 dark:text-[#4f4f4f]  text-blueGray-500 text-base leading-relaxed">
                  Football Coach
                </p>
                <p className=" m-0 dark:text-[#4f4f4f]  text-blueGray-500  text-base leading-relaxed">
                  BOD #345001
                </p>

                <div className=" flex gap-2 mt-4 flex-wrap">
                  <p className=" bg-[#F0F2F5] dark:bg-[#1f1f1f] dark:text-white  px-2 rounded-xl font-semibold">
                    Track & Field{" "}
                  </p>
                  <p className=" bg-[#F0F2F5] dark:bg-[#1f1f1f] dark:text-white px-2 rounded-xl font-semibold">
                    Basketball
                  </p>
                  <p className=" bg-[#F0F2F5] dark:bg-[#1f1f1f] dark:text-white px-2 rounded-xl font-semibold">
                    Tennis
                  </p>
                  <p className=" bg-[#F0F2F5] dark:bg-[#1f1f1f] dark:text-white px-2 rounded-xl font-semibold">
                    2 more
                  </p>
                </div>
              </div>

              <div className=" text-center mt-12 md:flex  block gap-2  items-center">
                <div className=" md:w-[80%] w-[100%] mx-auto">
                  <Button
                    label={`Go to Creator's Page`}
                    className={` bg-black   dark:bg-orange  w-full   text-white `}
                  />
                </div>

                <div className=" md:w-[50%] w-[100%] md:mt-0 mt-3 mx-auto">
                  <Button
                    Icons={
                      <Image src={require("../../../images/icon1.png")} alt="" />
                    }
                    label={`Send Message`}
                    className={` bg-[#F0F2F5]     text-black`}
                  />
                </div>
              </div>
            </div>
            <div className=" bg-white  dark:bg-black border dark:border-[#1f1f1f] p-2 rounded-xl">
              <div className=" h-48">
                <Image
                  src={require("../../../images/c3.png")}
                  className="mx-auto   object-cover  rounded-xl h-full w-full"
                  alt=""
                />
              </div>
              <div className="">
                <h2 className=" text-black dark:text-white text-xl font-bold mt-2">
                  Maximus Riggs
                </h2>
                <p className=" m-0 dark:text-[#4f4f4f]  text-blueGray-500 text-base leading-relaxed">
                  Football Coach
                </p>
                <p className=" m-0 dark:text-[#4f4f4f]  text-blueGray-500  text-base leading-relaxed">
                  BOD #345001
                </p>

                <div className=" flex gap-2 mt-4 flex-wrap">
                  <p className=" bg-[#F0F2F5] dark:bg-[#1f1f1f] dark:text-white  px-2 rounded-xl font-semibold">
                    Track & Field{" "}
                  </p>
                  <p className=" bg-[#F0F2F5] dark:bg-[#1f1f1f] dark:text-white px-2 rounded-xl font-semibold">
                    Basketball
                  </p>
                  <p className=" bg-[#F0F2F5] dark:bg-[#1f1f1f] dark:text-white px-2 rounded-xl font-semibold">
                    Tennis
                  </p>
                  <p className=" bg-[#F0F2F5] dark:bg-[#1f1f1f] dark:text-white px-2 rounded-xl font-semibold">
                    2 more
                  </p>
                </div>
              </div>

              <div className=" text-center mt-12 md:flex  block gap-2  items-center">
                <div className=" md:w-[80%] w-[100%] mx-auto">
                  <Button
                    label={`Go to Creator's Page`}
                    className={` bg-black   dark:bg-orange  w-full   text-white `}
                  />
                </div>

                <div className=" md:w-[50%] w-[100%] md:mt-0 mt-3 mx-auto">
                  <Button
                    Icons={
                      <Image src={require("../../../images/icon1.png")} alt="" />
                    }
                    label={`Send Message`}
                    className={` bg-[#F0F2F5]     text-black`}
                  />
                </div>
              </div>
            </div>
            
            <div className=" bg-white  dark:bg-black border dark:border-[#1f1f1f] p-2 rounded-xl">
              <div className=" h-48">
                <Image
                  src={require("../../../images/c4.png")}
                  className="mx-auto   object-cover  rounded-xl h-full w-full"
                  alt=""
                />
              </div>
              <div className="">
                <h2 className=" text-black dark:text-white text-xl font-bold mt-2">
                  Maximus Riggs
                </h2>
                <p className=" m-0 dark:text-[#4f4f4f]  text-blueGray-500 text-base leading-relaxed">
                  Football Coach
                </p>
                <p className=" m-0 dark:text-[#4f4f4f]  text-blueGray-500  text-base leading-relaxed">
                  BOD #345001
                </p>

                <div className=" flex gap-2 mt-4 flex-wrap">
                  <p className=" bg-[#F0F2F5] dark:bg-[#1f1f1f] dark:text-white  px-2 rounded-xl font-semibold">
                    Track & Field{" "}
                  </p>
                  <p className=" bg-[#F0F2F5] dark:bg-[#1f1f1f] dark:text-white px-2 rounded-xl font-semibold">
                    Basketball
                  </p>
                  <p className=" bg-[#F0F2F5] dark:bg-[#1f1f1f] dark:text-white px-2 rounded-xl font-semibold">
                    Tennis
                  </p>
                  <p className=" bg-[#F0F2F5] dark:bg-[#1f1f1f] dark:text-white px-2 rounded-xl font-semibold">
                    2 more
                  </p>
                </div>
              </div>

              <div className=" text-center mt-12 md:flex  block gap-2  items-center">
                <div className=" md:w-[80%] w-[100%] mx-auto">
                  <Button
                    label={`Go to Creator's Page`}
                    className={` bg-black   dark:bg-orange  w-full   text-white `}
                  />
                </div>

                <div className=" md:w-[50%] w-[100%] md:mt-0 mt-3 mx-auto">
                  <Button
                    Icons={
                      <Image src={require("../../../images/icon1.png")} alt="" />
                    }
                    label={`Send Message`}
                    className={` bg-[#F0F2F5]     text-black`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section id="most_popular" className="">
          <h2 className="main_title">Most Popular Contents</h2>

          <div className="   py-12  w-full  grid  grid-cols-2  xl:grid-cols-3 md:grid-cols-2 gap-5 md:gap-3">
            <div className=" relative">
              <Image
                onClick={() => setModal(true)}
                src={require("../../../images/g1.png")}
                alt=""
                className=" w-full"
              />

              <div className=" absolute top-3 right-2">
                <Image src={require("../../../images/Subtract.png")} alt="" />
              </div>
            </div>
            <div className=" relative">
              <Image
                onClick={() => setModal(true)}
                src={require("../../../images/g2.png")}
                alt=""
                className=" w-full"
              />

              <div className=" absolute top-3 right-2">
                <Image src={require("../../../images/Subtract.png")} alt="" />
              </div>
            </div>

            <div className=" relative">
              <Image
                onClick={() => setModal(true)}
                src={require("../../../images/g3.png")}
                alt=""
                className=" w-full"
              />

              <div className=" absolute top-3 right-2">
                <Image src={require("../../../images/Subtract.png")} alt="" />
              </div>
            </div>
            <div className=" relative">
              <Image
                onClick={() => setModal(true)}
                src={require("../../../images/g4.png")}
                alt=""
                className=" w-full"
              />

              <div className=" absolute top-3 right-2">
                <Image src={require("../../../images/Subtract.png")} alt="" />
              </div>
            </div>
            <div className=" relative">
              <Image
                onClick={() => setModal(true)}
                src={require("../../../images/g5.png")}
                alt=""
                className=" w-full"
              />

              <div className=" absolute top-3 right-2">
                <Image src={require("../../../images/Subtract.png")} alt="" />
              </div>
            </div>

            <div className=" relative">
              <Image
                onClick={() => setModal(true)}
                src={require("../../../images/g6.png")}
                alt=""
                className=" w-full"
              />

              <div className=" absolute top-3 right-2">
                <Image src={require("../../../images/Subtract.png")} alt="" />
              </div>
            </div>
          </div>
        </section>
      )}
     </Wrapper>
    </>
  );
};

export default Dashboard;
