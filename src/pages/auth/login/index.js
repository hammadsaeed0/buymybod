import Image from "next/image";
import React from "react";
import { Button, Input } from "../../../components";
import { motion } from "framer-motion";
import Link from "next/link";

const Login = ({ showModal, setShowModal, deleteUser, setUsers }) => {
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
            <div className="relative md:w-[70%] w-[80%]  my-6">
              {/*content*/}
              <div className="">
                {/*body*/}

                <div className=" flex">
                  <div className=" w-[50%] hidden md:block">
                    <Image
                      src={require("../../../images/log.png")}
                      className=" h-full w-full "
                      alt=""
                    />
                  </div>
                  <div className=" p-5 bg-white h-full md:w-[50%] w-[100%]">
                    <div className=" mb-9 cursor-pointer text-right">
                      <span
                        onClick={() => {
                          setShowModal(false);
                        }}
                        className=" font-bold  text-3xl font-primary"
                      >
                        x
                      </span>
                    </div>
                    <div>
                      <h2 className="  text-3xl   font-primary  font-semibold  uppercase ">
                        welcome back
                      </h2>
                      <h1 className="  text-6xl  font-bold font-primary uppercase">
                        your Account
                      </h1>
                    </div>

                    <div className=" md:w-96 w-[100%]">
                      <div className=" flex flex-col gap-6 mt-10">
                        <Input
                          placeholder={"EMAIL"}
                          className={"  border border-gray-400 w-full"}
                        />
                        <Input
                          placeholder={"PASSWORD"}
                          className={"  border border-gray-400 w-full"}
                        />
                      </div>

                      <div className=" flex items-center  justify-between my-5">
                        <Link href={"/Viewer-Dashboard/Dashboard"}>
                          <Button
                            label={"LOG IN"}
                            className={" bg-[#e3bc58]  w-40 text-white text-xl"}
                          />
                        </Link>
                        <Link
                          href={""}
                          className=" font-bold  text-xl font-primary"
                        >
                          FORGOT PASSWORD?
                        </Link>
                      </div>

                      <div className=" flex mt-12 mb-16 justify-between items-center">
                        <Link
                          href={""}
                          className=" font-bold text-2xl font-primary"
                        >
                          DON'T HAVE AN ACCOUNT?
                        </Link>

                        <Link
                          href={"/AccountCreation"}
                          className=" font-bold  text-base py-1"
                        >
                          SIGN UP
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Login;
