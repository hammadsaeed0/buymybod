"use client";
import React from "react";
import Image from "next/image";
import { bodLogo, femaleImage, maleImage } from "@/assets";
import { kycStepOneImage, arrowDown, arrowUp } from "@/assets";
import Link from "next/link";

const BodyType = () => {
  const [selectedGender, setSelectedGender] = React.useState(null);

  const handleGenderSelection = (gender:any) => {
    setSelectedGender(gender);
  };
  return (
    <main className="min-h-[100vh] flex ">
      <Image
        src={kycStepOneImage}
        alt="kycStepOneImage"
        className="hidden md:flex object-cover w-[25%]"
      />
      <div className="w-[10%] md:w-[5%] flex flex-col justify-center gap-y-4 p-1">
        <Image src={arrowDown} alt="kycStepOneImage" />
        <Image src={arrowUp} alt="kycStepOneImage" />
      </div>
      <div className="flex justify-center w-[90%] md:w-[70%] m-2 border-black">
        <div className="flex flex-col justify-evenly md:w-[70%] lg:w-[50%]">
          <div className="flex flex-col items-center gap-y-6 mb-4">
            <h1 className="text-[40px] sm:text-[60px] uppercase leading-normal font-druk">
              Become a creator
            </h1>
            <h3 className="sm:text-[22px] font-[600] leading-normal font-druk-text uppercase">
              Choose your body type
            </h3>
          </div>
          <div className="text-center gap-y-6">
          <div className="flex flex-col items-start gap-y-4">
            <div className="flex flex-col gap-y-8 sm:gap-y-0 sm:flex-row justify-between items-center w-full sm:gap-x-4">
              <div
                className={`w-[50%] border-2 flex justify-start items-start p-2 gap-x-[35%] ${
                  selectedGender === "male" ? "bg-[#F9FAFB] border-2 border-[#D9D9D9]" : ""
                }`}
                onClick={() => handleGenderSelection("male")}
              >
                <input type="radio" checked={selectedGender === "male"} readOnly />
                <Image src={maleImage} alt="buymybodMaleModel" className="object-cover" />
              </div>
              <div
                className={`w-[50%] border-2 flex justify-start items-start p-2 gap-x-[35%] ${
                  selectedGender === "female" ? "bg-[#F9FAFB] border-2 border-[#D9D9D9]" : ""
                }`}
                onClick={() => handleGenderSelection("female")}
              >
                <input type="radio" checked={selectedGender === "female"} readOnly />
                <Image src={femaleImage} alt="buymybodMaleModel" className="object-cover" />
              </div>
            </div>
              <div className="flex flex-col justify-center w-full gap-y-2">
              <h3 className="sm:text-[22px] font-[600] leading-normal font-druk-text uppercase">
              Physical Profile Information
            </h3>
            <div className="flex justify-between items-start">
                <div>
                    <select name="" id="" className="py-3 px-12 outline-none border-2 rounded-md">
                        <option value="feet">FEET</option>
                        <option value="feet">FEET</option>
                        <option value="feet">FEET</option>
                        <option value="feet">FEET</option>
                    </select>
                </div>
                <div className="flex gap-x-2">
                    <span className="border-2 rounded-md py-2 px-4 font-[700] text-[20px]">+</span>
                    <span className="border-2 rounded-md font-[700] text-[20px] py-2 px-20">0</span>
                    <span className="border-2 rounded-md py-2 px-4 font-[700] text-[20px]">-</span>
                </div>
            </div>
            <div className="flex justify-between items-start ">
                <div>
                    <select name="" id="" className="py-3 px-10 outline-none border-2 rounded-md">
                        <option value="feet">STONE</option>
                        <option value="feet">STONE</option>
                        <option value="feet">STONE</option>
                        <option value="feet">STONE</option>
                    </select>
                </div>
                <div className="flex gap-x-2">
                    <span className="border-2 rounded-md py-2 px-4 font-[700] text-[20px]">+</span>
                    <span className="border-2 rounded-md font-[700] text-[20px] py-2 px-20">0</span>
                    <span className="border-2 rounded-md py-2 px-4 font-[700] text-[20px]">-</span>
                </div>
            </div>
            <div className="w-full">
                <select name="" id="" className="py-3 px-10 outline-none border-2 rounded-md w-full">
                    <option value="RACIAL BACKGROUND">RACIAL BACKGROUND</option>
                    <option value="RACIAL BACKGROUND">RACIAL BACKGROUND</option>
                    <option value="RACIAL BACKGROUND">RACIAL BACKGROUND</option>
                    <option value="RACIAL BACKGROUND">RACIAL BACKGROUND</option>
                </select>
            </div>
            <div className="w-full">
                <select name="" id="" className="py-3 px-10 outline-none border-2 rounded-md w-full">
                    <option value="RACIAL BACKGROUND">DESIGNED BUILD TYPE</option>
                    <option value="RACIAL BACKGROUND">DESIGNED BUILD TYPE</option>
                    <option value="RACIAL BACKGROUND">DESIGNED BUILD TYPE</option>
                    <option value="RACIAL BACKGROUND">DESIGNED BUILD TYPE</option>
                </select>
            </div>

              </div>

              <div className="flex justify-start items-start gap-x-1">
                <input type="checkbox" className="mt-[5px]" />
                <p>
                  I agree to the{" "}
                  <span className="border-b-2 border-black">
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="border-b-2 border-black">
                    Terms & Conditions
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-[6rem]">
              <Link href='/CreatorAccount/AccountCreationStatusFirst'>
              <button className="font-druk-text font-[700] border-b-2 border-black">
                CREATE MY ACCOUNT
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BodyType;
