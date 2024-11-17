import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0); // Initialize state to track count

    return (
        <div style={{ textAlign: 'center', margin: '20px', padding: '10px', border: '1px solid lightgray' }}>
            <p style={{ fontSize: '20px' }}>Current Count: {count}</p>
            <button 
                onClick={() => setCount(count + 1)} 
                style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
            >
                Increment
            </button>
            <button 
                onClick={() => setCount(count - 1)} 
                style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
            >
                Decrement
            </button>
            <button 
                onClick={() => setCount(0)} 
                style={{ margin: '5px', padding: '10px 20px', fontSize: '16px', backgroundColor: 'lightcoral', color: 'white' }}
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;