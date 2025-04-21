import React,{useState} from 'react';
// import { useState } from 'react';
    
    
    
    
    
    function MyComponent() {

        const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});

        const handelYearChange = (event) => {
            setCar(c => ({...c, year: event.target.value}));
        }
        const handelMakeChange = (event) => {
            setCar(c => ({...c, make: event.target.value}));
        }
        const handelModelChange = (event) => {
            setCar(c => ({...c, model: event.target.value}));
        }
        
        return(
            
            <div>
                <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

                <input type="number" value={car.year} onChange={handelYearChange}/><br/>
                <input type="text" value={car.make} onChange={handelMakeChange}/><br/>
                <input type="text" value={car.model} onChange={handelModelChange}/><br/>
            </div>


        );




    };

    export default MyComponent;