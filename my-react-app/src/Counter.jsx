    import React, {useState} from 'react';

    function Counter() {

        const [count, setCount] = useState(0);

        const increment = () => {
            setCount(count + 1);
        }

        const decrement = () => {
            if (count === 0) {
                return;
            }
            setCount(count - 1);
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