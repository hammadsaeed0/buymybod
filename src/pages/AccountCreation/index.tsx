"use client";
import React, { useState } from "react";
import Image from "next/image";
// import { bodLogo } from "@/assets";
import Link from "next/link";

const CreateAccount = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button:any) => {
    setSelectedButton(button);
  };

  return (
    <main className="flex flex-col items-center">
      <div className="flex justify-center w-full h-[90vh]">
        <div className="flex flex-col items-center text-center justify-evenly">
          <div className="flex flex-col items-center">
            {/* <Image src={bodLogo} alt="buymybod_logo" /> */}
            <h1 className="text-[40px] font-primary text-7xl font-[700] uppercase leading-normal font-druk">
              Create an account
            </h1>
          </div>
          <div className="text-center gap-y-6">
            <h3 className="text-[25px] font-[700] leading-normal font-druk-text">
              FIRST, CHOOSE YOUR ACCOUNT TYPE
            </h3>
            <p className="text-[14px] font-[400] leading-normal font-inter">
              Buy My Bod offers you the opportunity to share your self-produced
              content with your fans, or follow
              <br /> the content of the creators you are a fan of.
            </p>
          </div>
          <div className="flex gap-x-8">
            <Link href="/CreatorAccount/GeneralInfo">
              <button
                className={`w-[344px] h-[59px] border border-[#D9D9D9] text-[20px] font-bold leading-normal font-druk-text ${
                  selectedButton === "creator" ? "bg-[#FCA311]" : ""
                }`}
                onClick={() => handleButtonClick("creator")}
              >
                BECOME A CREATOR
              </button>
            </Link>
            <Link href="/ViewerAccount/GeneralInformation">
              <button
                className={`w-[344px] h-[59px] border border-[#D9D9D9] text-[20px] font-bold leading-normal font-druk-text ${
                  selectedButton === "viewer" ? "bg-[#FCA311]" : ""
                }`}
                onClick={() => handleButtonClick("viewer")}
              >
                BECOME A VIEWER
              </button>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
      <Link href="/create-account/creator-account/general-information">
        <button className="w-[344px] h-[59px] bg-[#EDEDED] border border-[#D9D9D9] text-[20px] font-bold leading-normal mt-auto">
          Let's begin
        </button>
      </Link>
    </main>
  );
};

export default CreateAccount;
