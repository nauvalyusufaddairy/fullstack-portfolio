"use client";
import { useState } from "react";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
export default function Homepage() {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <>
      <div className={`${darkmode ? "dark" : ""}`}>
        <div className="w-screen flex justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
          <div className="w-[1024px] min-h-screen dark:bg-slate-800 bg-white dark:text-white text-slate-800">
            <Navbar
              darkmode={darkmode}
              setDarkmode={() => setDarkmode(!darkmode)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Navbar({
  darkmode,
  setDarkmode,
}: {
  darkmode: boolean;
  setDarkmode: <T extends boolean>(V: T) => void;
}) {
  const genericHamburgerLine = `w-[65%] h-[0.25rem] dark:bg-white bg-slate-800  my-[2px]  transition ease transform duration-300`;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="hidden md:block ">
        {/* Navbar */}
        <div className="flex flex-col max-w-[1024px] ">
          <div className="px-[16px]">
            <div className=" dark:bg-slate-800 bg-white w-full m-0 h-[72px] text-[22px] flex flex-row items-center py-[5px]">
              {/* Navbar logo  */}
              <div className=" w-[50%]  flex flex-row space-x-3 items-center  ">
                <div className="rounded-[50%] h-[54px] w-[54px] flex items-center justify-center ~~~ dark:bg-white bg-slate-800 dark:text-slate-800 text-white  ~~~~">
                  <h1>md</h1>
                </div>
                <div> Nauval Yusuf Addairy</div>
              </div>{" "}
              {/* Darkmode Toogle */}
              <div className="w-[60%] h-[100px] flex flex-row items-center  justify-end space-x-[20px] mr-[10px]">
                <div onClick={() => setDarkmode(!darkmode)} className="">
                  {" "}
                  <div
                    className={`w-[28px] h-[28px] bg-slate-800/40 dark:bg-white/40 rounded-2xl flex items-center flex-row px-[2px] transition duration-500 ease-in-out`}
                  >
                    <div className={`h-[24px] w-[24px] rounded-[50%]`}>
                      {darkmode ? (
                        <MoonIcon className="h-[24px] w-[24px] text-yellow-400" />
                      ) : (
                        <SunIcon className="h-[24px] w-[24px] text-yellow-400" />
                      )}
                    </div>
                  </div>
                </div>
                {/* menu bar */}
                <div className="">about</div>
                <div className="">project</div>
                <div className="">blogs</div>
                <div className=" py-[2px] px-[8px] rounded-md text-white  animate-pulse bg-gradient-to-tr from-green-800 via-blue-600 to-purple-700 dark:from-green-600 dark:via-blue-500 dark:to-purple-600 ">
                  Contact
                </div>
              </div>
            </div>
            {/* About section for md */}

            <div className="hidden md:block ">
              <div className="w-full h-[500px] mt-[42px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-300 to-purple-400 rounded-xl ">
                <div className="w-full h-full dark:bg-slate-800/25 bg-white/25 backdrop-blur-sm px-[8px] py-[6px] rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:hidden md:hidden lg:hidden">
        <div className="w-full h-[42px] flex flex-row px-[12px] py-[8px] items-center">
          <div className="w-[65%] flex flex-row space-x-[8px] items-center">
            <div className=" w-[36px] h-[36px] rounded-[50%] dark:bg-white bg-slate-800 dark:text-slate-800 text-white  flex items-center justify-center">
              ADW
            </div>
            <span>Nauval Yusuf Affa</span>
          </div>
          <div onClick={() => setDarkmode(!darkmode)} className="w-[25%]">
            <div
              className={`w-[55%] h-[24px] rounded-2xl bg-slate-800/50 flex flex-row p-[2px] dark:bg-white/50 items-center ${
                darkmode ? "justify-end" : "justify-start"
              }`}
            >
              {darkmode ? (
                <MoonIcon className="w-[24px] h-[24px] text-yellow-400" />
              ) : (
                <SunIcon className="w-[24px] h-[24px] text-yellow-300" />
              )}
            </div>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="w-[10%] h-[36px] flex flex-col justify-center items-center  group"
          >
            <div
              className={`${genericHamburgerLine} ${
                open
                  ? "rotate-45 translate-y-[0.5rem] opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                open ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                open
                  ? "-rotate-45 -translate-y-[0.5rem] opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </div>
        </div>
        {open ? (
          <>
            <div className="w-full h-[100px] dark:bg-white/25 bg-slate-800/10 flex flex-col items-center  justify-around transition animate-tray">
              <div className=" animate-tray">about</div>
              <div className=" animate-tray">project</div>
              <div className=" animate-tray">blogs</div>
              <div className=" animate-tray">contact</div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
