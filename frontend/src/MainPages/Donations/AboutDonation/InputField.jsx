import React,{useState} from 'react'

function InputField({quantity,name,typeOfFood,setItems,items,index}) {
    const [value,setValue]=useState(0);

    const handleInput=(e,i)=>
        {
            setValue(e.target.value)

            const newState = [...items];
            
            newState[i] = {
              name:name,
              quantity: e.target.value,
              typeOfFood: typeOfFood
            };

            console.log(newState);
            setItems(newState);
          
        }

  return (
    <div>
      <input type="number" value={value} style={{width:'100px',height:'20px '}} onChange={(e)=>handleInput(e,index)}/>

    </div>
  )
}

export default InputField
