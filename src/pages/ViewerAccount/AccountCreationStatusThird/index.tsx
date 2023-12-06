'use client'
import { bodLogo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AccountCreationStatusThird = () => {
  return (
    <div className='flex justify-center items-center h-[75vh] px-2 py-10 w-[90%] sm:w-[65%] max-w-[700px] mx-auto'>
        <div className='flex flex-col justify-between h-full items-center w-full'>
          <Image src={bodLogo} alt='buy my bod logo'/>
          <div className='flex flex-col text-center items-center gap-y-2'>
            <h2 className="text-[40px] sm:text-[60px] uppercase leading-normal font-druk">Progress Completed</h2>
            <p className="text-[22px] font-[600] leading-normal font-druk-text uppercase">
            Create your first content now!
            </p>
          </div>
          <div className='w-full flex flex-col gap-y-2 items-center'>

            <Link  href={'/createContent'}  className=" w-[50%] border-2 px-4 py-2 font-[600] leading-normal font-druk-text uppercase text-center">
            Add Content 
            </Link>
         
        <button className=" w-[50%] border-2 px-4 py-2 font-[600] leading-normal font-druk-text uppercase text-center">
            Or do it later
        </button>
    
          </div>
        <Link href='/Viewer-Dashboard/Dashboard' className='text-gray-500'>NEXT</Link>
        </div>
    </div>
  )
}

export default AccountCreationStatusThird