
"use client";
import { useContext, useState, useEffect } from "react";
import { personalInfo } from "../compsData/compsData";
import { SomeContext } from "../hooks/context";

const data = personalInfo;

export default function PersonalInfo({
}) {
  const {
    name,
    upDateName,
    selectedBtn,
    setemaill,
    setSelectedBtn,
    setphone_number,
    emaill,
    phone_number,
  } = useContext(SomeContext);

  const [nn, setnn] = useState(name);
  const [emm, setemm] = useState(emaill);
  const [phh, setphh] = useState(phone_number);

  const [correct, setCorrect] = useState({
    name: true,
    email: true,
    phoneNum: true,
  });

  const checkName = (e) => {
    const nameValue = e.target.value;
    setnn(nameValue);
    setCorrect((prev) => ({
      ...prev,
      name: nameValue.trim() !== "",
    }));
  };

  const checkEmail = (e) => {
    const emailValue = e.target.value;
    setemm(emailValue);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setCorrect((prev) => ({
      ...prev,
      email: emailRegex.test(emailValue),
    }));
  };

  const checkPhoneNum = (e) => {
    const phoneValue = e.target.value;
    setphh(phoneValue);
   
    const phoneRegex = /^[0-9]{10}$/;
    setCorrect((prev) => ({
      ...prev,
      phoneNum: phoneRegex.test(phoneValue),
    }));
  };

 
  const handleNextStep = () => {
    if (correct.name && correct.email && correct.phoneNum) {
       setemaill(emm)
       upDateName(nn)
       setphone_number(phh)
       
      setSelectedBtn(2);
      console.log(selectedBtn);
      
    } else {
      alert("Please fill in all fields correctly before proceeding.");
    }
  };

  return (
    <>
      <h1 className="title">{data.title}</h1>
      <p className="disc">{data.description}</p>

      <div>
        <label htmlFor="Name" className="block">
          Name
        </label>
        <input
          type="text"
          value={nn}
          onChange={checkName}
          name="Name"
          id="Name"
          placeholder={data.nameInput}
        />
        {!correct.name && <p className="text-Strawberry-red">Name is required</p>}
      </div>

      <div>
        <label htmlFor="EmailAddress" className="block">
          Email Address
        </label>
        <input
          type="text"
          value={emm}
          onChange={checkEmail}
          placeholder={data.emailAddress}
          name="EmailAddress"
          id="EmailAddress"
        />
        {!correct.email && <p className="text-Strawberry-red">Invalid email format</p>}
      </div>

      <div>
        <label htmlFor="PhoneNumber" className="block">
          Phone Number
        </label>
        <input
          type="text"
          value={phh}
          onChange={checkPhoneNum}
          name="PhoneNumber"
          id="PhoneNumber"
          placeholder={data.phoneInput}
        />
        {!correct.phoneNum && <p className="text-Strawberry-red">Phone number must be 10 digits</p>}
      </div>

      <div
        className={`fixed left-0 bottom-0 md:static md:px-0 md:bg-White md:w-auto bg-Light-gray w-full flex ${"justify-end"} py-4 content-center px-10`}
      >
        <h1
          
          onClick={handleNextStep}
          className="p-3 bg-Marine-blue text-White cursor-pointer font-bold rounded-lg"
        >
          Next Step
        </h1>
      </div>
    </>
  );
}
