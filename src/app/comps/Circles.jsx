"use client";

import { useContext } from "react";
import { SomeContext } from "../hooks/context";

const Circles = ({ num }) => {
  const { selectedBtn, setSelectedBtn } = useContext(SomeContext); // Get selectedBtn and setSelectedBtn from context

  return (
    <>
      <p
        onClick={() => setSelectedBtn(num)} // Set selectedBtn to the current num
        className={`circles ${selectedBtn === num ? "bg-Light-blue text-Marine-blue border-Light-gray" : ""}`}
      >
        {num}
      </p>
    </>
  );
};

export default Circles;
