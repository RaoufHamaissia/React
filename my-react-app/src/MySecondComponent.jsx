
import React, {useState} from "react";


function MySecondComponent() {
    
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");
    
    

    const handleNameChange = (event) => {
        //const {value} = event.target.value; // destructuring assignment to extract value from the event target
        setName(event.target.value); // update the name state with the new value
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value); // update the quantity state with the new value
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value); // update the comment state with the new value
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value); // update the payment state with the new value
    }

    const handleShippingChange = (event) => {
        setShipping(event.target.value); // update the shipping state with the new value
    }

    return (
        <div>
            
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank">Bank Transfer</option>
                <option value="cash on delivery">Cash</option>
            </select>
            <p>Payment: {payment}</p>

            <label >
                <input type="radio" value="Pick Up"
                    checked={shipping === "Pick Up"}
                    onChange={handleShippingChange} />
                Pick Up
            </label>
            <br/>
            <label >
                <input type="radio" value="Delivery"
                checked={shipping === "Delivery"}
                onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
            
                    
        </div>
        
        
        
        
    );

};


export default MySecondComponent;