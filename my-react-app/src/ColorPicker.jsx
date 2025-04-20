import React, { useState } from 'react';

function ColorPicker() {
    const [color, setColor] = useState('#ffffff'); // Default color is white

    const handelColorChange = (event) => {
        setColor(event.target.value); // Update the color state with the selected color

    };

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className='color-display' style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color :</label>
            <input type="color" value={color} onChange={handelColorChange} />
            
        </div>
    );
};

export default ColorPicker;
