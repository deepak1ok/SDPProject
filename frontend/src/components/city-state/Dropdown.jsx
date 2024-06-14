import React,{useState} from 'react'
import {
    CitySelect,
    CountrySelect,
    StateSelect,
    LanguageSelect,
  } from "react-country-state-city";
  
  import "react-country-state-city/dist/react-country-state-city.css";
  import './Dropdown.css'
  
 
  
  function Dropdown({state,setState}) {

    const [countryid, setCountryid] = useState(101);
    const [stateid, setstateid] = useState(0);

    const [stateName,setStateName]=useState();
    const [cityName,setCityName]=useState();

    return (
        <>
      <div className="grid gap-8 grid-cols-3" style={{display:'flex',width:"100%"}}>
        <div className="basis-1/2">
        <span style={{fontSize:'15px',fontWeight:'bolder'}}>State</span> 
        <StateSelect
          countryid={countryid}
          onChange={(e) => {
            setstateid(e.id);
            setState({...state,state:e.name})
          }}
          placeHolder="Select State"
         
        />

         </div>

         <div className="basis-1/2">
         <span style={{fontSize:'15px',fontWeight:'bolder'}}>City</span> 
        <CitySelect
          countryid={countryid}
          stateid={stateid}
          onChange={(e) => {
            setCityName(e.name)
            setState({...state,city:e.name})
          }}
          placeHolder="Select City"
        />
        
        </div>
      </div>
      </>
    );
  }

  export default Dropdown;
