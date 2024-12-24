import Plans from "./plans";
import AddOns from "./addOns";
import FinishingUp from "./finishingUp";
import ThankYou from "./thankYou";
import PersonalInfo from "./personal_info";
import { useContext, useState, useEffect } from "react";
import { SomeContext } from "../hooks/context";

const Routes = () => {
  const {
    selectedBtn,
    setSelectedBtn
  } = useContext(SomeContext);
  switch (selectedBtn) {
    case 2:
      return <Plans key={crypto.randomUUID()} />;

    case 3:
      return <AddOns key={crypto.randomUUID()} />;
    case 4:
      return (
        <FinishingUp
          key={crypto.randomUUID()}
          selectedBtn={selectedBtn}
          setSelectedBtn={setSelectedBtn}
        />
      );
    case 5:
      return <ThankYou key={crypto.randomUUID()} />;
    default:
      return (
        <PersonalInfo
          key={crypto.randomUUID()}
        />
      );
  }
};

export default Routes;
