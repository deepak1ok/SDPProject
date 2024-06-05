import { useState } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { StepperContext } from "./Context/StepperContext";
import Submit from "./Submit";
import NavBar from "../NavBar/NavBar";
import NGOForm from "./NGOForm";
import MoreInfo from "./MoreInfo";
import Location from "./Map/Location";
import EmailCheck from "./EmailCheck";

function NGOPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const [userData, setUserData] = useState("");

  const steps = [
    "Check Email",
    "NGO Information",
    "More Information",
    "Location",
    "Confirm",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <EmailCheck></EmailCheck>;

      case 2:
        return <NGOForm></NGOForm>;

      case 3:
        return <MoreInfo></MoreInfo>;

      case 4:
        return <Location></Location>;

      default:
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
      <div style={{ minHeight: "100vh" }}>
        <NavBar></NavBar>
        <h1 className='text-center mb-5'>NGO Registation</h1>
        <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
          <div className='container horizontal mt-5 '>
            <Stepper steps={steps} currentStep={currentStep}></Stepper>
          </div>

          <div style={{ margin: "5em" }}>
            <StepperContext.Provider value={{ userData, setUserData }}>
              {displayStep(currentStep)}
            </StepperContext.Provider>
          </div>

          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          ></StepperControl>
        </div>
      </div>
    </>
  );
}

export default NGOPage;
