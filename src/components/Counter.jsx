import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)
  return ( 
    <>
    <div className="count">
      <p>Count: </p>
      {count}
    </div>
    <br />
    <button onClick={() => setCount(count+1)}>Increase</button>
    </>
   );
}
 
export default Counter;