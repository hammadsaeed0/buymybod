"use client";
import React from "react";
import Image from "next/image";
import { bodLogo } from "@/assets";
import { kycStepOneImage, arrowDown, arrowUp,viewerCreateAccountImage } from "@/assets";
import Link from "next/link";

const PersonalInformation = () => {
  return (
    <main className="h-[100vh] flex ">
      <Image src={viewerCreateAccountImage} alt="kycStepOneImage" className="hidden md:flex object-cover w-[25%]"/>
      <div className="w-[10%] md:w-[5%] flex flex-col justify-center gap-y-4 p-1">
        <Image src={arrowDown} alt="kycStepOneImage" />
        <Image src={arrowUp} alt="kycStepOneImage" />
      </div>
      <div className="flex justify-center w-[90%] md:w-[70%] m-2 border-black">
        <div className="flex flex-col justify-evenly md:w-[70%] lg:w-[50%]">
          <div className="flex flex-col items-center gap-y-6 mb-4">
            <h1 className="text-[40px] font-primary sm:text-[60px] uppercase leading-normal">
             Become a viewer
            </h1>
            <h3 className="text-[22px] font-[600] leading-normal font-druk-text">
              Personal Information
            </h3>
          </div>
          <div className="text-center gap-y-6">
            <div className="flex flex-col items-start gap-y-4">
                <input type="text" className="rounded-md border px-2 py-3 w-full" placeholder="NAME SURNAME"/>
                <input type="text" className="rounded-md border px-2 py-3 w-full" placeholder="BIRTH YEAR"/>
                <input type="text" className="rounded-md border px-2 py-3 w-full" placeholder="ADDRESS"/>
                <input type="text" className="rounded-md border px-2 py-3 w-full" placeholder="COUNTRY"/>
                <div className="flex justify-start items-start gap-x-1">
                    <input type="checkbox" className="mt-[5px]"/>
                    <p>I agree to the <span className="border-b-2 border-black">Privacy Policy</span> and <span className="border-b-2 border-black">Terms & Conditions</span></p>
                </div>
            </div>
            <div className="mt-[6rem]">
                <Link href='/ViewerAccount/BodyType'>
                <button className="font-druk-text font-[700] border-b-2 border-black">NEXT STEP-PHYSICAL PROFILE INFORMATION</button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PersonalInformation;
