import React from 'react'

function StepperControl({handleClick,currentStep,steps}) {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
     {currentStep!==steps.length && <button  onClick={()=>handleClick()} className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer
      border-2 border-slate-300 hover:bg-slate-700 hover:text-white transititon duration-200 ease-in-out ${currentStep===1?"opacity-50 cursor-not-allowed":""}`}>Previous</button>}

    {currentStep!==steps.length && <button onClick={()=>handleClick("next")} className='bg-green-500 text-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer
     hover:bg-slate-700 hover:text-white transititon duration-200 ease-in-out' >{currentStep!==steps.length-1?"Next":"Confirm"}</button>}
    </div>
  )
}

export default StepperControl
