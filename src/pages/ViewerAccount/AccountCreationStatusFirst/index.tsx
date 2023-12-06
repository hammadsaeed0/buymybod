'use client'
import { bodLogo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AccountCreationStatus = () => {
  return (
    <div className='flex justify-center items-center h-[75vh] px-2 py-10 w-[90%] sm:w-[65%] max-w-[700px] mx-auto'>
        <div className='flex flex-col justify-between h-full items-center w-full'>
          <Image src={bodLogo} alt='buy my bod logo'/>
          <div className='flex flex-col items-center gap-y-2 text-center'>
            <h2 className="text-[40px] sm:text-[60px] uppercase leading-normal font-druk">Please Wait...</h2>
            <p className="text-[22px] font-[600] leading-normal font-druk-text uppercase">Your dashboard is being created now!</p>
          </div>
          <div className='w-full'>
          <div className='h-[40px] w-full border-2'></div>
          <p className="text-[22px] font-[600] leading-normal font-druk-text uppercase text-center">100%</p>
          </div>
        <Link href='/ViewerAccount/AccountCreationStatusSecond' className='text-gray-500'>NEXT</Link>
        </div>
    </div>
  )
}

export default AccountCreationStatus