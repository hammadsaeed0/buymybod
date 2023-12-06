import React from "react";
import Button from "../Button";
import { IoEye } from "react-icons/io5";
import { Carousel } from "react-responsive-carousel";
import sliderImg_1 from "../../images/g1.png";
import sliderImg_2 from "../../images/g2.png";
import sliderImg_3 from "../../images/g3.png";
import { AiOutlineBank } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";
import Input from "../Input";
export default function CreateSchedule({
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
            <div className="relative    md:w-[70%]  w-[90%]">
              <span
                className=" text-white text-2xl float-right font-bold  cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                x
              </span>
              {/*content*/}
              <div className="border-0 rounded-lg overflow-hidden shadow-lg relative flex flex-col w-full bg-white dark:bg-black  dark:border-[#1f1f1f] outline-none focus:outline-none">
                {/*body*/}
                <div className="">
                <div className=" px-3 py-3">
                <h2 className="   text-2xl font-semibold uppercase">create schedule</h2>
                </div>
                  
                   <div className=" px-4 py-5 flex gap-4">
                    <div className=" flex flex-col gap-4   w-52">
                        <button className=" bg-orange px-2 rounded-xl font-semibold">Sunday -</button>
                        <button className=" bg-orange px-2 rounded-xl font-semibold">monday +</button>
                        <button className=" bg-orange px-2 rounded-xl font-semibold">tuesday +</button>
                        <button className=" bg-orange px-2 rounded-xl font-semibold">wednesday +</button>
                        <button className=" bg-orange px-2 rounded-xl font-semibold">thursday +</button>
                        <button className=" bg-orange px-2 rounded-xl font-semibold">friday +</button>
                        <button className=" bg-orange px-2 rounded-xl font-semibold">saturday +</button>
                    </div>
                    <div className=" w-72">
                        <div className=" bg-gray-100 p-3">
                            <p className=" text-gray-400">Breakfast</p>
                            <Input Icon={<IoEye />} placeholder={'Meal Name'} className={' border  placeholder:text-black border-l-2   border-l-black font-semibold'}  label={''} />
                            <Button label={'+ Add'} className={' border justify-start w-full mt-2 bg-white  '} />
                    
                        </div>

                        <div className=" bg-gray-100 p-3">
                            <p className=" text-gray-400">Dinner</p>
                            <Input Icon={<IoEye />} placeholder={'Meal Name'} className={' border  placeholder:text-black border-l-2   border-l-black font-semibold'}  label={''} />
                            <Button label={'+ Add'} className={' border justify-start w-full mt-2 bg-white  '} />
                    
                        </div>


                        <div className=" bg-gray-100 p-3 mt-2">
                            <p className=" text-gray-400">Snack</p>
                            <Input Icon={<IoEye />} placeholder={`Greek Yogurt with Berries`} className={' border  placeholder:text-black border-l-2   border-l-black font-semibold'}  label={''} />
                            <Button label={'+ Add'} className={' border justify-start w-full mt-2 bg-white  '} />
                    
                        </div>


                        <div className=" bg-gray-100 p-3 mt-2">
                            <p className=" text-gray-400">Lunch</p>
                            
                            <Button label={'+ Add'} className={' border justify-start w-full mt-2 bg-white  '} />
                    
                        </div>
                    </div>
                    <div className=" border   rounded-xl p-6 w-full">

                        <h1 className=" text-black  text-xl font-bold">ADD MEAL</h1>



                        <Input placeholder={'Meal Name'}  label={''} />

                     
                         <div className=" flex justify-between">
                         <Input placeholder={'Add Ingredient'}  label={''} />
                         <p className=" text-black font-semibold  text-sm">Add Ingredient</p>
                         </div>
                      
                        <div className=" flex justify-between">
                            <div>
                                <p className=" text-black">   1 cup of frozen mango chunks</p>
                            </div>

                            <Image src={require('../../images/del.png')} className=" object-contain" alt=""  />
                        </div>

                        

                        <div className=" flex justify-between">
                            <div>
                                <p className=" text-black">   1 cup of frozen mango chunks</p>
                            </div>

                            <Image src={require('../../images/del.png')} className=" object-contain" alt=""  />
                        </div>
                        

                        <div className=" flex justify-between">
                            <div>
                                <p className=" text-black">   1 cup of frozen mango chunks</p>
                            </div>

                            <Image src={require('../../images/del.png')} className=" object-contain" alt=""  />
                        </div>
                        

                        <div className=" flex justify-between">
                            <div>
                                <p className=" text-black">   1 cup of frozen mango chunks</p>
                            </div>

                            <Image src={require('../../images/del.png')} className=" object-contain" alt=""  />
                        </div>
                        

                        <div className=" flex justify-between">
                            <div>
                                <p className=" text-black">   1 cup of frozen mango chunks</p>
                            </div>

                            <Image src={require('../../images/del.png')} className=" object-contain" alt=""  />
                        </div>

                        {/* <h6 className=" mt-5 font-normal">Description</h6> */}

<textarea

   
  rows={4}
  placeholder="Write Instructions"
  className=" w-full  mt-14"
></textarea>

<hr />

<Button label={'Add Meal'}  className={' bg-black text-white  mt-14 w-36'} />

                    </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
