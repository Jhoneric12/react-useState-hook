import React, { useState } from 'react'
import '../styles/Hero.css'

function Hero() {
    
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    }

  return (
    <div className='hello-container'>
        <div>
            <h1>Hello React, from hero component</h1>
            <button onClick={handleCount}>Count number is {count}</button>
        </div>
    </div>
  )
}

export default Hero