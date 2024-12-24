

"use client";

import { useState, useContext } from "react";
import { SomeContext } from "../hooks/context";

export default function Plans() {
  const { address,name,emaill,phone_number, setAddress, setSelectedBtn, selectedBtn } = useContext(SomeContext);
  if(!name||!emaill||!phone_number){
    setSelectedBtn(1)
  }

  const [city, setCity] = useState(address.city || "");
  const [state, setState] = useState(address.state || "");
  const [zip, setZip] = useState(address.zip || "");
  const [country, setCountry] = useState(address.country || "");

  const [correct, setCorrect] = useState({
    city: true,
    state: true,
    zip: true,
    country: true,
  });
  
  const handleCityChange = (e) => {
    setCity(e.target.value);
    setCorrect((prev) => ({
      ...prev,
      city: e.target.value.trim() !== "",
    }));
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
    setCorrect((prev) => ({
      ...prev,
      state: e.target.value.trim() !== "",
    }));
  };

  const handleZipChange = (e) => {
    setZip(e.target.value);
    const zipRegex = /^[0-9]{6}$/;
    setCorrect((prev) => ({
      ...prev,
      zip: zipRegex.test(e.target.value),
    }));
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setCorrect((prev) => ({
      ...prev,
      country: e.target.value.trim() !== "",
    }));
  };

  const handleSaveAddress = () => {
    if (correct.city && correct.state && correct.zip && correct.country) {
      setAddress({
        city,
        state,
        zip,
        country,
      });
      setSelectedBtn(3);
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  const back_handle = () => {
    setSelectedBtn(1);
  };

  return (
    <>
      <h1 className="title text-3xl font-bold mb-1">Enter Your Address</h1>
      <p className="disc text-center text-lg">Please fill in your address details below.</p>

      <div className="flex flex-col gap-2 ">
        <div className="mb-2">
          <label htmlFor="city" className="block font-semibold text-lg mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
            placeholder="Enter city"
            className="border-2 rounded-lg p-3 w-full"
          />
          {!correct.city && <p className="text-Strawberry-red text-sm mt-1">City is required</p>}
        </div>

        <div className="mb-2">
          <label htmlFor="state" className="block font-semibold text-lg mb-2">
            State
          </label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={handleStateChange}
            placeholder="Enter state"
            className="border-2 rounded-lg p-3 w-full"
          />
          {!correct.state && <p className="text-Strawberry-red text-sm mt-1">State is required</p>}
        </div>

        <div className="mb-2">
          <label htmlFor="zip" className="block font-semibold text-lg mb-2">
            ZIP Code
          </label>
          <input
            type="text"
            id="zip"
            value={zip}
            onChange={handleZipChange}
            placeholder="Enter ZIP code"
            className="border-2 rounded-lg p-3 w-full"
          />
          {!correct.zip && <p className="text-Strawberry-red text-sm mt-1">ZIP code must be 5 digits</p>}
        </div>

        <div className="mb-2">
          <label htmlFor="country" className="block font-semibold text-lg mb-2">
            Country
          </label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={handleCountryChange}
            placeholder="Enter country"
            className="border-2 rounded-lg p-3 w-full"
          />
          {!correct.country && <p className="text-Strawberry-red text-sm mt-1">Country is required</p>}
        </div>

        <div className="flex justify-between mt-5">
          <button
            onClick={back_handle}
            className="p-3 bg-Marine-blue text-White cursor-pointer font-bold rounded-lg"
          >
            Back
          </button>
          <button
            onClick={handleSaveAddress}
            className="p-3 bg-Marine-blue text-White cursor-pointer font-bold rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
