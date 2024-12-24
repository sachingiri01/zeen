import { useContext } from "react";
import { SomeContext } from "../hooks/context";

const Navigation = ({
  selectedBtn,
  setSelectedBtn,
  patternState,
  setPatternState,
}) => {
  const { isPattern } = useContext(SomeContext);
  console.log(isPattern);
  
  return (
    <div
      className={`fixed left-0 bottom-0 md:static md:px-0 md:bg-White md:w-auto bg-Light-gray w-full flex ${
        selectedBtn !== 1 ? "justify-between" : "justify-end"
      } py-4 content-center px-10`}
    >
      {selectedBtn !== 1 && (
        <h1
          onClick={() => setSelectedBtn(selectedBtn - 1)}
          className="text-Cool-gray my-auto cursor-pointer font-bold"
        >
          Go Back
        </h1>
      )}
      <h1
        onClick={() => {
          if (isPattern && !isPattern.isAllTrue() && selectedBtn === 1) {
            setPatternState(isPattern);
            return;
          }
          setSelectedBtn((e) => {
            e = (e + 1) % 6;
            if (e === 0) e = 1;
            return e;
          });
        }}
        className="p-3 bg-Marine-blue text-White cursor-pointer font-bold rounded-lg"
      >
        {selectedBtn === 4 ? "Confirm" : "Next Step"}
      </h1>
    </div>
  );
};

export default Navigation;
