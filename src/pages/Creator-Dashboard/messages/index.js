import Image from "next/image";
import React from "react";
import CreatorWrapper from "../../../layout/CreatorWrapper";

const index = () => {
  return (
    <>

      <CreatorWrapper>
      <section className=" sm:flex block justify-between  items-center">
        <div>
          <h2 className="main_title ">Messages</h2>
        </div>
        <div>
          <div className=" bg-white  dark:border-[#1f1f1f]  dark:bg-dark p-3  rounded-lg border flex gap-3">
            <div className=" w-10 h-10 bg-[rgb(240,242,245)] rounded-full justify-center items-center flex">
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

      {/* This is an example component */}
      <div className="container mx-auto mt-4 rounded-lg">
        {/* Chatting */}
        <div className="flex flex-row gap-3 justify-between">
          {/* chat list */}
          <div className="flex flex-col w-3/5  pt-5 overflow-y-auto border dark:border-[#1f1f1f] bg-white dark:bg-dark  rounded-xl">
            {/* user list */}
            <div className="flex flex-row py-4 px-3 justify-center items-center">
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <div className="text-lg font-semibold dark:text-white">
                    Luis1994
                  </div>
                  <span className="text-gray-500">Pick me at 9:00 Am</span>
                </div>
                <div className="">
                  <div>
                    <span className=" text-orange  font-medium">12.30</span>
                  </div>
                  <span className=" bg-orange px-2  rounded-xl font-semibold">
                    10
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-row py-4 px-3 justify-center items-center">
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <div className="text-lg font-semibold dark:text-white">
                    Luis1994
                  </div>
                  <span className="text-gray-500">Pick me at 9:00 Am</span>
                </div>
                <div className="">
                  <div>
                    <span className=" text-orange  font-medium">12.30</span>
                  </div>
                  <span className=" bg-orange px-2  rounded-xl font-semibold">
                    10
                  </span>
                </div>
              </div>
            </div>

            {/* end user list */}
          </div>
          {/* end chat list */}
          {/* message */}
          <div className="w-full px-5 flex flex-col pt-5 justify-between bg-white  dark:border-[#1f1f1f]  dark:bg-black rounded-xl border">
            <div className="flex flex-col mt-5">
              <div className="flex justify-end mb-4">
                <div>
                  <div className="mr-2 py-3 px-4 bg-[#1671D9] dark:bg-orange rounded-bl-xl rounded-tl-xl rounded-tr-xl text-white">
                    Welcome to group everyone !
                  </div>
                  <p className="mt-2 text-sm">Olivia White . 4:59 PM </p>
                </div>
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
              </div>
              <div className="flex justify-start w-[70%] mb-4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
                <div>
                  <div className="ml-2 py-3 px-4 bg-[#F0F2F5] rounded-br-xl rounded-tr-xl rounded-bl-xl text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat at praesentium, aut ullam delectus odio error sit
                    rem. Architecto nulla doloribus laborum illo rem enim dolor
                    odio saepe, consequatur quas?
                  </div>
                  <p className="mt-2  text-sm">Olivia White . 4:59 PM </p>
                </div>
              </div>

              <div className="flex justify-start w-[70%] mb-4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
                <div>
                  <div className="ml-2  bg-[#F0F2F5] rounded-br-xl rounded-tr-xl overflow-hidden rounded-bl-xl text-black">
                    <Image
                      src={require("../../../images/g1.png")}
                      className=" w-full"
                      alt=""
                    />
                  </div>
                  <p className="mt-2  text-sm">Olivia White . 4:59 PM </p>
                </div>
              </div>
            </div>
            <div className="py-5">
              <input
                className="w-full bg-gray-300 py-4 px-3 rounded-xl"
                type="text"
                placeholder="type your message here..."
              />
            </div>
          </div>
          {/* end message */}
        </div>
      </div>

      </CreatorWrapper>
    </>
  );
};

export default index;
