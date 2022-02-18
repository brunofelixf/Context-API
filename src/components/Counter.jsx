import React from 'react';

import { useCount } from '../context/Count';

export default function Counter(){
  
  const {count, setCount} = useCount();
  
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