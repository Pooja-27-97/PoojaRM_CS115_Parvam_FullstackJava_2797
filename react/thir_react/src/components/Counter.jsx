import React, { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button><br /><br />
        </>
    );
};