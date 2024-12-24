
"use client";
import { useContext } from "react";
import { addOns } from "../compsData/compsData";
import { SomeContext } from "../hooks/context";

const data = addOns;

const AddOns = () => {
  const { selected, setSelectedBtn,setSelected,name,emaill,phone_number,address, planPeriod } = useContext(SomeContext);
  if(!name||!emaill||!phone_number){
    setSelectedBtn(1)
  }
  if(!address.city||!address.country){
    setSelectedBtn(2)
  }
 
  const handle_for=()=>{
    setSelectedBtn(4)
  }
  const back_handle=()=>{
    setSelectedBtn(2)
  }
  const handelClickOns = (index) => {
   
    const newSelected = { ...selected, [index]: !selected[index] };
    setSelected(newSelected); 
  };

  return (
    <>
      <h1 className="title">{data.title}</h1>
      <p className="disc">{data.disc}</p>
      {data.ons.map((ele) => (
        <div key={ele[4]}>
          <div
            onClick={() => handelClickOns(ele[4])}
            className={`border-2 ${
              selected[ele[4]]
                ? "border-Purplish-blue bg-Light-blue bg-opacity-30"
                : "border-Cool-gray"
            } rounded-lg flex cursor-pointer items-center justify-between gap-3 p-2`}
          >
            <div className="flex items-center">
              <div
                className={`border-2 ${
                  selected[ele[4]]
                    ? "bg-Marine-blue"
                    : "border-Cool-gray bg-White"
                } m-2 w-6 h-6 flex items-center justify-center rounded-lg`}
              >
                <img
                 className="block"
                  src={selected[ele[4]] ? data.checkImg :data.checkImg }
                  alt="checkmark"
                />
              </div>
              <div>
                <h1>{ele[0]}</h1>
                <p className="text-sm">{ele[1]}</p>
              </div>
            </div>
            <p className="text-Purplish-blue">
              {planPeriod === "m" ? ele[2] : ele[3]}
            </p>
          </div>
        </div>
      ))}
         <div className="flex justify-between mt-5">
          <button
            onClick={back_handle}
            className="p-3 bg-Marine-blue text-White cursor-pointer font-bold rounded-lg"
          >
            Back
          </button>
          <button
            onClick={handle_for}
            className="p-3 bg-Marine-blue text-White cursor-pointer font-bold rounded-lg"
          >
            Next
          </button>
        </div>
    </>
  );
};

export default AddOns;
