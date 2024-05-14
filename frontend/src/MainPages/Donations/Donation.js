import React, { useState, useContext } from "react";
import { StepperContext } from "./Context/StepperContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Donation() {
  const [foodItem, setFoodItem] = useState([]);
  const [name, setName] = useState("");
  const [typeOfFood, setTypeOfFood] = useState("raw");
  const [quantity, setQuantity] = useState(0);

  const inputRef = React.useRef(null);
  const formRef = React.useRef(null);

  const { userData, setUserData } = useContext(StepperContext);

  const handleClick = (e) => {
    setFoodItem([
      ...foodItem,
      {
        name: name,
        quantity: quantity,
        typeOfFood: typeOfFood,
      },
    ]);

    console.log(foodItem);
  };

  const handleSubmit = () => {
    console.log(userData);
    setUserData({ ...userData, items: foodItem, date: new Date() });
  };


  return (
    <>
      <div className=' grid grid-cols-3 gap-4'>
        <div style={{ marginTop: "40px" }}>
          <label
            for='FoodItem'
            class='block text-sm font-medium leading-6 text-gray-900 text-2xl'
          >
            Food Item
          </label>
          <div>
            <input
              type='text'
              name='FoodItem'
              id='FoodItem'
              autocomplete='given-name'
              class='block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-42'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <label
            for='number'
            class='block text-sm font-medium leading-6 text-gray-900 text-2xl'
          >
            Quantity
          </label>
          <div>
            <input
              id='Quantity'
              name='quantity'
              type='number'
              autocomplete='number'
              class='block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-42'
              min='1'
              max='5'
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <label
            for='number'
            class='block text-sm font-medium leading-6 text-gray-900 text-2xl'
          >
            Type of Food
          </label>
          <div>
            <select
              name='typeOfFood'
              id='typeOfFood'
              onChange={(e) => setTypeOfFood(e.target.value)}
              class='block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-42'
              value={typeOfFood}
            
            >
              <option value='raw'>Raw Food</option>
              <option value='cooked'>Cooked Food</option>
            </select>
          </div>
        </div>

        <div style={{ marginTop: "60px" }}>
          <button
            onClick={handleClick}
            style={{
              border: "1px solid black",
              padding: "3px 25px",
              backgroundColor: "brown",
              borderRadius: "6px",
              color: "aliceblue",
            }}
          >
            Add
          </button>
        </div>

                
        <div style={{ marginTop: "60px" }}>
          <button
            onClick={handleSubmit}
            style={{
              border: "1px solid black",
              padding: "3px 25px",
              backgroundColor: "brown",
              borderRadius: "6px",
              color: "aliceblue",
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div style={{ marginTop: "10px", fontSize: "15px", textAlign: "center" }}>
        List of Items
        <div>
          <table>
            <thead>
              <tr>
                {/* <th></th> */}
                <th>Food Items</th>
                <th>Quantity</th>
                <th>Type of Food</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {foodItem.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      {/* <td></td> */}
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.typeOfFood}</td>
                     <td> 
                        <FontAwesomeIcon
                          icon={faTimes}
                          size='lg'
                          color='red'
                          cursor='pointer'
                        />
                      </td>
                    </tr>

                    {/* <div key={index}>
                <p>{item.name}</p>
                <p>{item.quantity}</p>
              </div> */}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Donation;
