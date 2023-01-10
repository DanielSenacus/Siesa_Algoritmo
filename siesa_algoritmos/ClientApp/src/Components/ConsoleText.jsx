import React, { useState, useEffect } from "react";
import "./ConsoleText.css";
import UseWrite from "./UseWrite";
import UseInput from "./UseInput";

const colors = ["lightblue"];

const ConsoleText = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className='console-container'>
      {step === 1 && (
        <UseWrite nextStep={nextStep} words={["Hello, world!"]}></UseWrite>
      )}
      {step === 2 && (
        <UseWrite nextStep={nextStep} words={["Hello, papi!"]}></UseWrite>
      )}
      {step === 3 && (
        <UseWrite nextStep={nextStep} words={["Hello, noggi!"]}></UseWrite>
      )}
      {step === 4 && <UseInput nextStep={nextStep}></UseInput>}
    </div>
  );
};

export default ConsoleText;
