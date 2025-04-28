import React, {useState, createContext} from 'react'
import ComponentB from './ComponentB.jsx';

export const UserContext = createContext(); // Create a context object


function ComponentA() {

    const [user, setUser] = useState("Bob");


    return( <>
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}> {/* Provide the user value to the context */}
                <ComponentB/> {/* ComponentB will have access to the user value */}
                {/* You can add more components here that need access to the user value */}
                {/* <ComponentC/> */}
                {/* <ComponentD/> */}
            
            </UserContext.Provider>
        </div>
        
    </>)
}

export default ComponentA;