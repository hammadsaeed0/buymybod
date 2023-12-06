import React from "react";
import { Button, Input } from "../../components";
import Image from "next/image";
import { LuPencil } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
const AddContent = () => {
  return (
    <section className=" mx-auto" id="">
      <div className="  w-[80%] mx-auto">
        <div className=" md:w-[80%] w-[100%] ml-auto">
          <Image
            src={require("../../images/logo2.png")}
            className=" mx-auto my-4"
            alt=""
          />
          <div className=" md:w-[70%] w-[100%]">
            <h1 className="  sm:text-7xl md:text-6xl text-5xl  dark:text-white uppercase   font-extrabold font-primary ">
              add your first contnet
            </h1>

            <div className=" mx-auto text-center">
              <a
                href=""
                className="   text-gray-300    font-bold mt-3   border-b"
              >
                OR DO IT LATER
              </a>
            </div>

            <div className=" my-6">
              <h2 className=" uppercase text-2xl dark:text-white mb-4  font-bold font-primary ">
                Choose your content type
              </h2>
              <div className=" flex  gap-2">
                <Button
                  label={"subscribers only"}
                  className={
                    " bg-orange-400  font-primary  uppercase  text-2xl  font-[800]  w-full text-white"
                  }
                />

                <Link href={'/layout'} >

                <Button

                  
                  label={"collection"}
                  className={
                    " bg-white uppercase   font-primary      text-2xl border  w-full  font-[800] text-black"
                  }
                />
                </Link>
                
              </div>
            </div>

            {/* general inforamtion */}
            <div>
              <h2 className=" uppercase dark:text-white  mb-4 mt-14 font-bold font-primary text-2xl">
                general inforamtion
              </h2>

              <div>
                <Input
                  className={" border-2 p-3 w-full   uppercase"}
                  placeholder={"title"}
                />
                <textarea
                  rows={6}
                  className=" w-full border-2 rounded-md p-3 uppercase mt-4"
                  placeholder="info"
                ></textarea>
              </div>
            </div>
          </div>
          {/* choose a category */}
          <div>
            <h2 className=" uppercase  text-2xl dark:text-white font-bold font-primary  mb-4 mt-2">
              choose a category
            </h2>
            <div className=" flex  gap-2 flex-wrap">
              <Button
                label={"soccer (football)"}
                className={
                  " bg-white 	tracking-wide	 text-xl uppercase  font-primary border    font-[800]  text-black  w-auto"
                }
              />
              <Button
                label={"basketball"}
                className={
                  " bg-white uppercase text-xl tracking-wide  border font-primary   font-[800]  text-black w-auto"
                }
              />
              <Button
                label={"sking"}
                className={
                  " bg-white uppercase  text-xl border  tracking-wide font-primary  font-[800] text-black w-auto"
                }
              />
              <Button
                label={"tennis"}
                className={
                  " bg-white uppercase text-xl  border tracking-wide font-primary  font-[800] text-black w-auto"
                }
              />
              <Button
                label={"ice skating"}
                className={
                  " bg-white uppercase text-xl  tracking-wide font-primary border  font-[800] text-black w-auto"
                }
              />
              <Button
                label={"american football"}
                className={
                  " bg-white  text-xl tracking-wide font-primary uppercase  border  font-[800] text-black w-auto"
                }
              />
              <Button
                label={"pilates"}
                className={
                  " bg-white uppercase text-xl tracking-wide font-primary  border   font-[800]  text-black w-auto"
                }
              />
              <Button
                label={"swimming"}
                className={
                  " bg-white uppercase text-xl tracking-wide font-primary  border   font-[800] text-black w-auto"
                }
              />
              <Button
                label={"weightlifting"}
                className={
                  " bg-white uppercase  tracking-wide text-xl  font-primary border   font-[800] text-black w-auto"
                }
              />
              <Button
                label={"golf"}
                className={
                  " bg-white uppercase  border tracking-wide  text-xl font-primary  font-[800] text-black w-auto"
                }
              />
              <Button
                label={"track & field"}
                className={
                  " bg-white uppercase  tracking-wide text-xl  font-primary border  font-[800] text-black w-auto"
                }
              />
              <Button
                label={"volleyball"}
                className={
                  " bg-white uppercase tracking-wide text-xl border font-primary   font-[800] text-black w-auto"
                }
              />
              <Button
                label={"hores riding"}
                className={
                  " bg-white uppercase tracking-wide text-xl border font-primary   font-[800] text-black w-auto"
                }
              />
              <Button
                label={"cycling"}
                className={
                  " bg-white uppercase tracking-wide border text-xl  font-primary  font-[800] text-black w-auto"
                }
              />
            </div>
          </div>
        </div>
        {/* add images */}
        <div className=" flex gap-5 justify-end mt-20">
          <div className="flex gap-1">
            <div>
              <Image
                src={require("../../images/pencile.png")}
                className=" object-contain  w-4"
                alt=""
              />
            </div>
            <p className=" text-black    text-xs font-medium">Edit</p>
          </div>
          <div className="flex gap-1 ">
            <div>
              <Image
                src={require("../../images/del.png")}
                className=" object-contain w-2"
                alt=""
              />
            </div>
            <p className=" text-black    text-xs font-medium">Clear</p>
          </div>
        </div>
        <div className=" my-5 md:flex block">
          <div className="  md:w-[20%] w-[100%]">
            <Button
              label={" + Add image"}
              className={
                " bg-white uppercase  tracking-wide	  font-primary    text-xl mb-4 border   font-[900] text-black w-auto"
              }
            />
          </div>
          <div className=" w-[80%]">
            <div className=" flex  gap-3">
              <div className=" w-44 relative">
                <Image
                  src={require("../../images/s1.png")}
                  className=" w-full h-full"
                  alt=""
                />

                <div className=" absolute top-2 flex justify-between w-full  px-2">
                  <div className="border border-white w-4 h-4 rounded-sm"></div>
                  <LuPencil color="#fff" size={20} />
                </div>
              </div>
              <div className=" w-44">
                <Image
                  src={require("../../images/s2.png")}
                  className=" w-full h-full"
                  alt=""
                />
              </div>

              <div className=" w-44 relative">
                <Image
                  src={require("../../images/s1.png")}
                  className=" w-full h-full"
                  alt=""
                />

                <div className=" absolute top-2 flex justify-between w-full  px-2">
                  <div className="border border-white w-4 h-4 rounded-sm"></div>
                  <LuPencil color="#fff" size={20} />
                </div>
              </div>
              <div className=" w-44">
                <Image
                  src={require("../../images/s2.png")}
                  className=" w-full h-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* add video */}

        <div className=" my-12 md:flex block gap-12">
          <div className=" ">
            <Button
              label={" + Add video"}
              className={
                " bg-white uppercase tracking-wide text-xl	  font-primary mb-4  border  font-[900] text-black w-auto"
              }
            />
          </div>
          <div className=" ">
            <div className=" md:flex block gap-5">
              <div className=" flex  gap-3 p-4  border rounded-md">
                <div className=" w-44  h-40">
                  <Image
                    src={require("../../images/g1.png")}
                    className=" rounded-lg w-full h-full"
                    alt=""
                  />
                </div>
                <div className=" w-72">
                  <h2 className=" text-lg   font-semibold">Title.mp4</h2>
                  <p className=" text-gray-400">250 MB . 28 Oct, 2023</p>
                </div>
              </div>
              <div className=" flex gap-5">
                <div className="flex gap-1">
                  <div>
                    <Image
                      src={require("../../images/pencile.png")}
                      className=" object-contain  w-4"
                      alt=""
                    />
                  </div>
                  <p className=" text-black    text-xs font-medium">Edit</p>
                </div>
                <div className="flex gap-1 ">
                  <div>
                    <Image
                      src={require("../../images/del.png")}
                      className=" object-contain w-2"
                      alt=""
                    />
                  </div>
                  <p className=" text-black    text-xs font-medium">Clear</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* add video */}

        <div className=" my-12 md:flex block gap-12">
          <div className=" ">
            <Button
              label={" + Add playlist"}
              className={
                " bg-white uppercase tracking-wide text-xl	  font-primary  mb-4  border  font-[900] text-black w-auto"
              }
            />
          </div>
          <div className=" ">
            <div className=" md:flex block gap-5">
              <div className=" flex  gap-3     w-[80%]  border rounded-md">
                <Image
                  src={require("../../images/play.png")}
                  className=" rounded-lg w-full h-full"
                  alt=""
                />
              </div>
              <div className=" flex gap-5">
                <div className="flex gap-1">
                  <div>
                    <Image
                      src={require("../../images/pencile.png")}
                      className=" object-contain  w-4"
                      alt=""
                    />
                  </div>
                  <p className=" text-black    text-xs font-medium">Edit</p>
                </div>
                <div className="flex gap-1 ">
                  <div>
                    <Image
                      src={require("../../images/del.png")}
                      className=" object-contain w-2"
                      alt=""
                    />
                  </div>
                  <p className=" text-black    text-xs font-medium">Clear</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* add meal plan */}

        <div className=" my-12 md:flex block gap-6">
          <div className="  md:w-[22%] w-[100%]">
            <Button
              label={"+ Add meal plan"}
              className={
                " bg-white uppercase tracking-wide text-xl	  font-primary  border  mb-4  font-[900] text-black w-auto"
              }
            />
          </div>
          <div className=" md:w-[80%] w-[100%] ">
            <div className=" border  border-dashed p-3 bg-white dark:bg-black  rounded-md">
              <div className=" md:flex block    gap-8">
                <div className=" md:w-[42%] w-[100%]     h-72  justify-center items-center  flex rounded-md bg-[#f9fafb]">
                  <div className=" text-center w-36">
                    <div className=" w-16 mx-auto  h-16 bg-white rounded-full flex justify-center items-center">
                      <Image
                        src={require("../../images/upload.png")}
                        className=""
                        alt=""
                      />
                    </div>
                    <h5 className=" text-orange-400  font-medium">
                      Click to upload
                    </h5>
                    <h6 className=" text-black  font-semibold">
                      or drag and drop
                    </h6>
                    <p className=" text-gray-400">
                      JPEG,WEBP or JPG (max. 3MB)
                    </p>
                  </div>
                </div>
                <div className=" pt-4 md:w-[80%] w-[100%]">
                  <p className=" font-medium  dark:text-white">Meal Plan Name</p>
                  <hr />
                  <h6 className=" mt-5 font-normal">Choose a Body Type</h6>
                  <ul className=" flex  gap-4 mt-2">
                    <li>
                      <p className=" bg-black  px-3 text-white rounded-xl  font-medium text-center">
                        Male
                      </p>
                    </li>
                    <li>
                      <p className=" bg-gray-100 px-3  text-black font-medium rounded-xl  text-center">
                        Female
                      </p>
                    </li>
                  </ul>

                  <h6 className=" mt-5 font-normal">Choose a Body Shape</h6>
                  <ul className=" flex mt-3  gap-4 flex-wrap">
                    <li>
                      <p className=" bg-black  px-3 text-white rounded-xl  font-medium text-center">
                        Slim
                      </p>
                    </li>
                    <li>
                      <p className=" bg-black px-3  text-white rounded-xl font-medium  text-center">
                        Authletic
                      </p>
                    </li>
                    <li>
                      <p className=" bg-black px-3  text-white rounded-xl font-medium text-center">
                        Curvy
                      </p>
                    </li>
                    <li>
                      <p className=" bg-black px-3  text-white rounded-xl font-medium  text-center">
                        Petite
                      </p>
                    </li>
                    <li>
                      <p className=" bg-gray-100 px-3  text-black rounded-xl  font-medium text-center">
                        Stocky
                      </p>
                    </li>
                    <li>
                      <p className=" bg-gray-100 px-3  text-black rounded-xl font-medium  text-center">
                        Toned
                      </p>
                    </li>
                    <li>
                      <p className=" bg-gray-100 px-3  text-black rounded-xl  font-medium text-center">
                        Hourglass
                      </p>
                    </li>
                  </ul>

                  <h6 className=" mt-5 font-normal">Description</h6>

                  <textarea
                    rows={4}
                    placeholder=""
                    className=" w-full "
                  ></textarea>

                  <hr />

                  <Button
                    label={"Create Schedule"}
                    className={" bg-black  dark:bg-orange text-white w-56 mt-12"}
                  />
                </div>
              </div>
            </div>
            <div className=" border mt-5 px-3 py-6 bg-white  dark:bg-black rounded-md">
              <div className=" md:flex block ">
                <div className=" w-[42%]">
                  <Image
                    src={require("../../images/vagetables.png")}
                    className=" w-full"
                    alt=""
                  />
                </div>
                <div className=" md:w-[80%] w-[100%] pt-4 p-8">
                  <div className=" flex justify-between">
                    <div>
                      <p className=" font-medium text-2xl dark:text-white">
                        Energizing Meal Plan
                      </p>
                      <ul className=" flex  gap-4 mt-4">
                        <li>
                          <p className="  bg-gray-200  px-3 text-black font-semibold rounded-xl  text-center">
                            Male
                          </p>
                        </li>
                        <li>
                          <p className="  bg-gray-200  px-3 text-black font-semibold rounded-xl  text-center">
                            Female
                          </p>
                        </li>
                        <li>
                          <p className="  bg-gray-200  px-3 text-black font-semibold rounded-xl  text-center">
                            Athletic
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <Image
                        src={require("../../images/pencile.png")}
                        className=" object-contain"
                        alt=""
                      />
                    </div>
                  </div>

                  <p className=" mt-8  text-gray-500  font-normal">
                    This meal plan designed to help you maintain a balanced and
                    nutritious diet while savoring a variety of flavors. This
                    meal plan incorporates a combination of wholesome
                    ingredients to satisfy your taste buds and provide your body
                    with essential nutrients. Whether you're looking to shed a
                    few pounds, maintain your current weight, or simply eat more
                    mindfully, this meal plan has got you covered.
                  </p>

                  <Button
                    label={"View Schedule"}
                    className={" bg-black  dark:bg-orange  text-white   w-56  mt-12"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddContent;
