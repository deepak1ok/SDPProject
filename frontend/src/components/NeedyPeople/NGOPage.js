import {useState} from 'react'
import Stepper from './Stepper'
import StepperControl from './StepperControl'
import { StepperContext } from './Context/StepperContext'
import Submit from './Submit'
import NavBar from '../NavBar/NavBar'
import NGOForm from './NGOForm'
import MoreInfo from './MoreInfo'
import Location from './Map/Location'


function NGOPage() {

    const [currentStep,setCurrentStep]=useState(1);

    const [userData,setUserData]=useState('');

    const steps=[
        "NGO Information",
        "More Information",
        "Location",
        "Confirm"

    ]

    const displayStep=(step)=>
    {
        switch(step)
        {
            case 1:
                return <NGOForm></NGOForm>

            case 2:
                return <MoreInfo></MoreInfo>
            
            case 3:
                return <Location></Location>
            
            default:
                return <Submit></Submit>
                
        }
    }

    const handleClick=(direction)=>
    {
        let newStep=currentStep;

        direction==="next"?newStep++:newStep--;

        newStep>0 && newStep<=steps.length && setCurrentStep(newStep);
    }
  return (
   <>
    <NavBar></NavBar>
    <h1>NGO Registation</h1>
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
        <div className='container horizontal mt-5 '>
            <Stepper steps={steps} currentStep={currentStep}></Stepper>
        </div>

        <div>
            <StepperContext.Provider value={{userData,setUserData}}>
                {displayStep(currentStep)}
            </StepperContext.Provider>
        </div>
      
      <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps}></StepperControl>
    </div>

    </>
   
  )
}
 
export default NGOPage
