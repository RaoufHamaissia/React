    import React, {useState} from 'react';

    function Counter() {

        const [count, setCount] = useState(0);

        const increment = () => {
            setCount(c => c + 1); // using functional update to avoid stale state
            // setCount(count + 1); // this will work but it is not recommended as it can lead to stale state issues
            
        }

        const decrement = () => {
            if (count === 0) {
                return;
            }
            setCount(c => c - 1); // using functional update to avoid stale state
            // setCount(count - 1); // this will work but it is not recommended as it can lead to stale state issues
        }

        const reset = () => {
            setCount(0); 
        }
        return (
            <div className='counter-container'>
                <h1 className='count-display'>Counter: {count}</h1>
                <button className='counter-button' onClick={increment} >Increment</button>
                <button className='counter-button' onClick={reset}>Reset</button>
                <button className='counter-button' onClick={decrement}>Decrement</button>
                
            </div>
        )

    }

    export default Counter;