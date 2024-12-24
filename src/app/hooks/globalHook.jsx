"use client";
import { useState } from "react";

export default function useGlobalHook() {
  const [planPeriod, setPlanPeriod] = useState("m");
  const [selectedPlan, setSelectedPlan] = useState("1");
  const [selected, setSelected] = useState({
    1: false,
    2: false,
    3: false,
  });

  const [isPattern, setIsPattern] = useState({
    name: false,
    email: false,
    phoneNum: false,
  });
  const [address, setAddress] = useState({
    city: "",
    postalCode: "",
    country: "",
  });

  const [selectedBtn, setSelectedBtn] = useState(1);
  const [name, upDateName] = useState("");
  const [emaill, setemaill] = useState("");
  const [phone_number, setphone_number] = useState("");

 
  return {
    emaill,
    setemaill,
    phone_number,
    setAddress,
    address,
    setphone_number,
    name,
    upDateName,
    selectedBtn,
    isPattern,
    setIsPattern,        
    setSelectedBtn,
    selected,
    setSelected,
    planPeriod,
    setPlanPeriod,
    selectedPlan,
    setSelectedPlan,
  };
}
