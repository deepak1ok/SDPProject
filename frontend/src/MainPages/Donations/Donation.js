import React,{useState,useContext} from 'react'
import { StepperContext } from './Context/StepperContext';

function Donation() {

    const [foodItem,setFoodItem]=useState([]);
    const [name,setName]=useState('');
    const [quantity,setQuantity]=useState(0);

    const inputRef = React.useRef(null);
   const formRef = React.useRef(null);

    const {userData,setUserData}=useContext(StepperContext);

    const handleClick=(e)=>
    {
        setFoodItem([
            ...foodItem,
            {
                name:name,
                quantity:quantity
            }
            
        
        ])

        console.log(foodItem);
    }

    

    const handleSubmit=(e)=>
    {
        console.log(userData)
      setUserData({...userData,items:foodItem,date:new Date() })
      
      
    }
  return (

    <>
   
    <div className='grid grid-cols-3 gap-4'>
        <div style={{marginTop:'40px'}}>
          <label for="FoodItem" class="block text-sm font-medium leading-6 text-gray-900 text-2xl">Food Item</label>
          <div>
            <input type="text" name="FoodItem" id="FoodItem" autocomplete="given-name" class="block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-42" onChange={(e)=>setName(e.target.value)}/>
          </div>
        </div>

        
        <div style={{marginTop:'40px'}}>
          <label for="number" class="block text-sm font-medium leading-6 text-gray-900 text-2xl">Quantity</label>
          <div>
            <input id="Quantity" name="quantity" type="number" autocomplete="number" class="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-42" min="1" max="5" onChange={(e)=>setQuantity(e.target.value)}/>
          </div>
        </div>

        <div  style={{marginTop:'60px'}}> 
        <button onClick={handleClick} style={{border:'1px solid black'}}>Add</button>
        </div>

       

     


{/*         
        <button onClick={handleSubmit}>
            Submit
        </button> */}
    </div>



          <div style={{marginTop:'10px',fontSize:'15px',textAlign:'center'}}>
            List of Items

            <div>
              {foodItem.map((item,index)=>{
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <p>{item.quantity}</p>
                    </div>
                )
              })} 
            </div>

           
           
           </div>


</>
  )
}

export default Donation
