"use client";
import { useState, useContext } from "react";
import Routes from "./comps/Routs";
import Circles from "./comps/Circles";
import useGlobalHook from "./hooks/globalHook";
import { stepsDate } from "./compsData/compsData";
import { SomeContext } from "./hooks/context";

export default function Home() {
  const {setSelectedBtn,selectedBtn } = useContext(SomeContext); 
  const [patternState, setPatternState] = useState({
    name: true,
    email: true,
    phoneNum: true,
  });
  return (
    <>
      <div
        className="relative md:h-[80%] font-ubuntu md:justify-between md:shadow-lg 
      md:p-3 md:flex-row  md:bg-White md:mx-auto md:w-[70%] md:rounded-lg md:items-stretch  
      flex flex-col   mt-6 gap-4  justify-center  items-center"
      >
        <SomeContext.Provider value={useGlobalHook()}>
          <div
            className=" flex md:items-start md:pl-6 md:pt-10 md:gap-10 
          md:justify-start gap-5 my-5 md:flex-col md:w-[30%] md:rounded-lg 
          md:bg-[url('/bg-sidebar-desktop.svg')] md:bg-cover md:bg-no-repeat
           text-White md:my-0 items-center justify-center"
          >
            {[1, 2, 3, 4].map((ele,index) => (
              <div key={index} className="flex gap-3">
                <Circles
                  selectedBtn={selectedBtn}
                  setSelectedBtn={setSelectedBtn}
                  num={ele}
                />
                <div className="hidden md:block">
                  <h1 className="text-Cool-gray text-sm">
                    {stepsDate[ele - 1][0]}
                  </h1>
                  <h1 className="text-sm">{stepsDate[ele - 1][1]}</h1>
                </div>
              </div>
            ))}
          </div>
          <div
            className="flex flex-col md:shadow-none md:w-[70%] shadow-lg
           bg-White w-96 py-12 p-6  gap-3 rounded-lg"
          >
            {
              <Routes
                patternState={patternState}
                setPatternState={setPatternState}
                selectedBtn={selectedBtn}
                setSelectedBtn={setSelectedBtn}
              />
            }
          </div>
        </SomeContext.Provider>
      </div>
    </>
  );
}
