import { element } from 'prop-types';
import React,{useState} from 'react';
// import { useState } from 'react';
    
    
    
    
    
    function MyComponent() {

        const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);
        

        const handelAddFood = () => {
            const newFood = document.getElementById("foodInput").value;
            document.getElementById("foodInput").value = "";

            setFoods(f => [...f, newFood]);
            // setFoods([...foods, newFood]);
            // setFoods((prevFoods) => [...prevFoods, newFood]);
        }

        /*
        const handelRemoveFood = () => {
            const foodToRemove = document.getElementById("foodInput").value;
            document.getElementById("foodInput").value = "";
            setFoods(f => f.filter(food => food !== foodToRemove));
            // setFoods(foods.filter(food => food !== foodToRemove));
        }
        */

        const handelRemoveFood = (index) => {

                setFoods(f => f.filter((_, i) => i !== index));
                // _ is a placeholder for the first argument of the filter function, which is the current element. and is not used in this case.
                // setFoods(foods.filter((element, i) => i !== index));
        }

        return(
            
            <div>
                <h2>List of Food</h2>
                <ul>
                    {foods.map((food, index) => 
                        <li key={index} onClick={() => handelRemoveFood(index)}>
                            {food}
                        </li>)}
                        
                            
                </ul>
                <input type="text" id="foodInput" placeholder='Enter food name' /><br/>
                
                <button onClick={handelAddFood}>Add Food</button>
                <button onClick={handelRemoveFood}>Remove Food</button>
            </div>


        );




    };

    export default MyComponent;