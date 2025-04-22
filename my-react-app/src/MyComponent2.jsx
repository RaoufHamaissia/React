
import React,{useState} from 'react';
// import { useState } from 'react';
    
    
    
    
    
    function MyComponent() {

        const [cars, setCars] = useState([]);
        const [carYear, setCarYear] = useState(new Date().getFullYear());
        const [carMake, setCarMake] = useState("");
        const [carModel, setCarModel] = useState("");


        const handleAddCar = () => {

            const newCar = {
                year: carYear,
                make: carMake,
                model: carModel
            };
            setCars(c => [...c, newCar]);

            setCarYear(new Date().getFullYear());
            setCarMake("");
            setCarModel("");                 

        }
        

        const handleRemoveCar = (index) => {
            setCars(c => c.filter((_,i) => i !== index));
        }

        const handleYearChaned = (event) => {
            setCarYear(event.target.value);
        }

        const handleMakeChaned = (event) => {
            setCarMake(event.target.value);
        }

        const handleModelChaned = (event) => {
            setCarModel(event.target.value);
        }

        return(
            
            <div>
               <h2>List of Car Objects</h2>
               <ul>
                    {cars.map((car,index) =>
                        <li key={index} onClick={() => handleRemoveCar(index)}>

                            {car.year} {car.make} {car.model}
                        </li>
                    )}
               </ul>
                <input type="number" id='carYear' value={carYear} onChange={handleYearChaned} /><br/>
                <input type="text" id='carMake' value={carMake} placeholder='Enter car make' onChange={handleMakeChaned} /><br/>
                <input type="text" id='carModel' value={carModel} placeholder='Enter car model' onChange={handleModelChaned} /><br/>
                <button onClick={handleAddCar}>Add Car</button>

            </div>


        );




    };

    export default MyComponent;