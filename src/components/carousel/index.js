import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Button, Input } from "../../components";
import Link from "next/link";
import Login from "../../pages/auth/login";
export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  const [modal, setModal] = useState(false);
  const sliders = [
    require("../../images/slide1.png"),
    require("../../images/slide2.png"),
    require("../../images/slide3.png"),
    require("../../images/slide4.png"),
  ];

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index) => {
    setCurr(index);
  };

  return (
    <div className="overflow-hidden relative">

        
<Login setShowModal={setModal} showModal={modal} />
      <div
        className="flex transition-transform ease-out duration-500 h-screen	 w-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {/* {sliders?.map((s) => (
          <> */}
        <div className=" flex-none  w-full h-full relative">
          <Image
            src={require("../../images/slide1.png")}
            alt=""
            className=" w-full h-full  object-cover"
          />

          <div className=" absolute  left-0 right-0     top-0 bg-[rgba(0,0,0,0.4)] w-full h-full text-center pt-4">
            <Image
              src={require("../../images/dark_logo.png")}
              alt=""
              className=" mx-auto"
            />

            <div className=" h-full justify-center items-center flex ">
              <div>
                <button className=" uppercase  mt-6  text-white font-primary  font-extrabold  text-2xl py-1 w-52 rounded-md ">
                  Choose your path
                </button>
                <h1 className="  text-8xl text-white  dark:text-white uppercase   font-extrabold font-primary ">
                  connecting creators to their audience
                </h1>
              </div>
              {/* <Button  label={'Subscribe'} className={' bg-orange uppercase w-52 mx-auto mt-4'} /> */}
            </div>
          </div>
        </div>
        <div className=" flex-none  w-full h-full relative">
          <Image
            src={require("../../images/slide2.png")}
            alt=""
            className=" w-full h-full  object-cover"
          />

          <div className=" absolute  top-0 bg-[rgba(0,0,0,0.4)] w-full h-full text-center pt-4">
            <Image
              src={require("../../images/dark_logo.png")}
              alt=""
              className=" mx-auto"
            />

            <div className="  h-full flex justify-center items-center">
              <div>
                <h1 className="  text-white text-8xl  dark:text-white uppercase   font-extrabold font-primary ">
                  buy my bod
                </h1>
                {/* <Button  label={'Subscribe'} className={' bg-orange uppercase w-52 mx-auto mt-4'} /> */}
                {/* <Link href={'/auth/login'}> */}
                <button  onClick={()=>{setModal(true)}} className=" uppercase bg-[#634a09] mt-6  text-black font-primary  font-extrabold  text-2xl py-1 w-52 rounded-md mix-blend-screen">
                  Subscribe
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-none  w-full h-full relative">
          <Image
            src={require("../../images/slide3.png")}
            alt=""
            className=" w-full h-full  object-cover"
          />

          <div className=" absolute  top-0 bg-[rgba(0,0,0,0.4)] w-full h-full text-center pt-4">
            <Image
              src={require("../../images/dark_logo.png")}
              alt=""
              className=" mx-auto"
            />

            <div className=" justify-center items-center  flex h-full">
              <div>
                <h1 className=" text-white  text-8xl  dark:text-white uppercase   font-extrabold font-primary ">
                  buy my bod gear
                </h1>
                {/* <Button  label={'Subscribe'} className={' bg-orange uppercase w-52 mx-auto mt-4'} /> */}
                {/* <Link href={'/AccountCreation'}> */}
                <button   onClick={()=>{setModal(true)}} className=" uppercase bg-[#634a09] mt-6  text-black font-primary  font-extrabold  text-2xl py-1 w-52 rounded-md mix-blend-screen">
                  go to store
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-none  w-full h-full relative">
          <Image
            src={require("../../images/slide4.png")}
            alt=""
            className=" w-full h-full  object-cover"
          />

          <div className=" absolute  top-0 bg-[rgba(0,0,0,0.4)] w-full h-full text-center pt-4">
            <Image
              src={require("../../images/dark_logo.png")}
              alt=""
              className=" mx-auto"
            />

            <div className=" flex h-full justify-center items-center">
              <div>
                <h1 className=" text-white  text-8xl  dark:text-white uppercase   font-extrabold font-primary ">
                  bod mode
                </h1>
                {/* <Button  label={'Subscribe'} className={' bg-orange uppercase w-52 mx-auto mt-4'} /> */}
               {/* <Link href={'/AccountCreation'}> */}
               <button  onClick={()=>{setModal(true)}} className=" uppercase bg-[#634a09] mt-6  text-black font-primary  font-extrabold  text-2xl py-1 w-52 rounded-md mix-blend-screen">
                  live stream
                </button>
               {/* </Link> */}
               
              </div>
            </div>
          </div>
        </div>

        {/* </>
        ))} */}
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <FaArrowLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
        <FaArrowRight  size={40} />
        </button>
      </div> */}

      <div className="absolute bottom-10 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {sliders.map((_, i) => (
            <div
              key={i}
              onClick={() => goToSlide(i)}
              className={`
              transition-all w-12 h-12 overflow-hidden bg-white rounded-full
              ${curr === i ? " w-14 h-14" : "bg-opacity-50"}
            `}
            >
              <Image
                src={_}
                alt=""
                className=" w-full h-full   object-center  "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
