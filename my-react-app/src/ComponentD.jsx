import React, {useContext} from 'react'
import {UserContext} from './ComponentA.jsx'; // Import the context from ComponentA

function ComponentD() {

    const user = useContext(UserContext); // Use the context to get the user value

    return( <>
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{`Bye ${user}`}</h2>

        </div>
    
    </>)
}

export default ComponentD;