import { useState } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import Personal from "./Personal";
import Donation from "./Donation";
import Location from "./Location";
import { StepperContext } from "./Context/StepperContext";
import Submit from "./Submit";
import NavBar from "../../components/NavBar/NavBar";
import "../Donations/Form.css";

function Form() {
  const [currentStep, setCurrentStep] = useState(1);

  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  const steps = [
    "Personal Information",
    "Donation Information",
    "Location",
    "Confirm",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Personal></Personal>;

      case 2:
        return <Donation></Donation>;

      case 3:
        return <Location></Location>;

      case 4:
        return <Submit></Submit>;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <>
      <NavBar></NavBar>
      <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
        <div className='container horizontal mt-5 '>
          <Stepper steps={steps} currentStep={currentStep}></Stepper>
        </div>

        <div>
          <StepperContext.Provider
            value={{ userData, setUserData, finalData, setFinalData }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>

        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        ></StepperControl>
      </div>
    </>
  );
}

export default Form;
