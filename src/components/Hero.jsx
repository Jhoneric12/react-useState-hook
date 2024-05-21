import React, { useState } from 'react'
import '../styles/Hero.css'

function Hero() {
    
    var [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    }

    const decrement = () => {
      if (count == 0) {
        count = 0;
      }
      else {
        setCount(count - 1);
      }
    }

  return (
    <div className='hello-container'>
        <div>
            <h1>Hello React, from hero component</h1>
            <h1>{count}</h1>
            <button onClick={handleCount}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    </div>
  )
}

export default Hero