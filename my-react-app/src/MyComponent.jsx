import React,{useState} from 'react';
// import { useState } from 'react';
    
    
    
    
    
    function MyComponent() {

        const [name, setName] = useState("Guest");
        const [age, setAge] = useState(0);
        const [isEmployed, setIsEmployed] = useState(false);

        const updateName = () => {
            const input = document.querySelector('input[type="text"]');          
            const {value} = input;
            setName(value);
            //setName("John Doe");
        }

        const incrementAge = () => {
            setAge(age + 1);
        }

        const decrementAge = () => {
            if (age === 0) {               
                return;
            }
            setAge(age - 1);
        }

        const resetAge = () => {
            setAge(0);
        }

        const toggleEmployedStatus = () => {
            setIsEmployed(!isEmployed);
        }
        return(
        <div>
            <p>Name: {name}</p>
            <input type="text" placeholder="enter your name"  />
            <button onClick={updateName}>Set Name</button>

            <br />
            
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increase Age</button>
            <button onClick={resetAge}>Reset Age</button> 
            <button onClick={decrementAge}>Decrease Age</button>
            
            <br />
            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Employment</button>
           
        
        
        </div>)




    }

    export default MyComponent;