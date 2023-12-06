"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { arrowDown, arrowUp, viewerCreateAccountImage } from '@/assets';

const viewerPreferences = [
  'soccer',
  'basketball',
  'skiing',
  'tennis',
  'ice skating',
  'americal football',
  'pilates',
  'swimming',
  'weightlifting',
  'golf',
  'track & field',
  'volleyball',
  'horse riding',
  'cycling',
];

const Preferences: React.FC = () => {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);

  const handlePreferenceClick = (preference: string) => {
    // Toggle the selection status of the preference
    const updatedPreferences = selectedPreferences.includes(preference)
      ? selectedPreferences.filter((selected) => selected !== preference)
      : [...selectedPreferences, preference];

    setSelectedPreferences(updatedPreferences);
  };

  return (
    <main className="h-[100vh] flex">
      <Image src={viewerCreateAccountImage} alt="kycStepOneImage" className="hidden md:flex w-[25%]" />
      <div className="w-[10%] md:w-[5%] flex flex-col justify-center gap-y-4 p-1">
        <Image src={arrowDown} alt="kycStepOneImage" />
        <Image src={arrowUp} alt="kycStepOneImage" />
      </div>
      <div className="flex justify-center w-[90%] md:w-[70%] m-2 border-black">
        <div className="flex flex-col justify-evenly md:w-[70%] lg:w-[50%]">
          <div className="flex flex-col items-center gap-y-6 mb-4">
            <h1 className="text-[40px] font-primary sm:text-[60px] uppercase leading-normal font-druk">
              Become a viewer
            </h1>
            <h3 className="text-[22px] font-[600] leading-normal font-druk-text uppercase">
              select categories you are interested in
            </h3>
          </div>
          <div className="text-center gap-y-6">
            <div className="flex flex-col items-start gap-y-4">
              <div className="flex flex-wrap gap-2">
                {viewerPreferences.map((preference, index) => (
                  <button
                    key={index}
                    className={`uppercase border-2 px-5 py-2 font-[700] text-[16px] ${
                      selectedPreferences.includes(preference) ? 'bg-[#FCA311]' : ''
                    }`}
                    onClick={() => handlePreferenceClick(preference)}
                  >
                    {preference}
                  </button>
                ))}
              </div>
              <div className="flex justify-start items-start gap-x-1">
                <input type="checkbox" className="mt-[5px]" />
                <p>
                  I agree to the{' '}
                  <span className="border-b-2 border-black">Privacy Policy</span> and{' '}
                  <span className="border-b-2 border-black">Terms & Conditions</span>
                </p>
              </div>
            </div>
            <div className="mt-[6rem]">
              <Link href="/ViewerAccount/AccountCreationStatusFirst">
                <button className="font-druk-text font-[700] border-b-2 border-black uppercase">
                  Create Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Preferences;
