"use client";

import { useContext } from "react";
import { SomeContext } from "../hooks/context";
import useResultData from "../compsData/resultData";

const FinishingUp = () => {
  const { selectedBtn, setSelectedBtn ,selected} = useContext(SomeContext);
  const { selectedOns, planPeriod, yourPlan, totalMon, totalYear } = useResultData();
  const { name, emaill, phone_number, address, selectedPlan } = useContext(SomeContext);
   if(!selected[1]&&!selected[2]&&!selected[3]){
    setSelectedBtn(3)
   }
   if(!name||!emaill||!phone_number){
    setSelectedBtn(1)
  }
  if(!address.city||!address.country){
    setSelectedBtn(2)
  }
  return (
    <>
      <h1 className="title">Finishing up</h1>
      <p className="disc">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-Magnolia p-4 flex flex-col gap-4 rounded-lg">
        {/* Your Plan Section */}
        <div className="flex items-center justify-between bg-Magnolia">
          <div>
            <h1 className="font-bold text-Marine-blue">
              {yourPlan && yourPlan[0]} ({planPeriod === "m" ? "Monthly" : "Yearly"})
            </h1>
            <p
              onClick={() => setSelectedBtn(2)}
              className="underline cursor-pointer text-Cool-gray"
            >
              Change
            </p>
          </div>
          <p className="font-bold text-Marine-blue">
            {yourPlan && planPeriod === "m"
              ? yourPlan[1]
              : yourPlan && yourPlan[2]}
          </p>
        </div>

        {/* Add-ons Section */}
        {selectedOns &&
          selectedOns.map((ele) => (
            <div
              key={crypto.randomUUID()}
              className="flex items-center justify-between"
            >
              <p className="text-Cool-gray">{ele[0]}</p>
              <p className="text-Marine-blue">
                {planPeriod === "m" ? ele[1] : ele[2]}
              </p>
            </div>
          ))}
      </div>

      {/* Total Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-Cool-gray">Total (per month)</h1>
        <p className="text-Purplish-blue font-bold">
          +$
          {yourPlan && planPeriod === "m"
            ? totalMon + Number(yourPlan[1].match(/\d+/g))
            : totalYear + Number(yourPlan && yourPlan[2].match(/\d+/g))}
          /mo
        </p>
      </div>

      {/* User Information Section */}
      <div className="flex flex-col gap-3 mt-4">
        <div className="flex justify-between">
          <h1 className="text-Cool-gray">Name:</h1>
          <p className="text-Marine-blue">{name}</p>
        </div>
        <div className="flex justify-between">
          <h1 className="text-Cool-gray">Email:</h1>
          <p className="text-Marine-blue">{emaill}</p>
        </div>
        <div className="flex justify-between">
          <h1 className="text-Cool-gray">Phone:</h1>
          <p className="text-Marine-blue">{phone_number}</p>
        </div>
        <div className="flex justify-between">
          <h1 className="text-Cool-gray">Address:</h1>
          <p className="text-Marine-blue">
            {address ? `${address.street}, ${address.city}, ${address.state} ${address.zip}` : "Not Provided"}
          </p>
        </div>
        <div className="flex justify-between">
          <h1 className="text-Cool-gray">Plan:</h1>
          <p className="text-Marine-blue">{yourPlan && yourPlan[0]}</p>
        </div>
      </div>
      <div className="flex justify-end mt-5">
          
          <button
            onClick={()=>setSelectedBtn(5)}
            className="p-3 bg-Marine-blue text-White cursor-pointer font-bold rounded-lg"
          >
            Submit
          </button>
        </div>
    </>
  );
};

export default FinishingUp;
