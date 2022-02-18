import React from 'react';

import { useCount } from '../context/Count';

export default function Mirror() {
  
  const { count } = useCount();

  return (
    <div className="count">
      <p>Count: </p>
      {count}
    </div>
  )
}
