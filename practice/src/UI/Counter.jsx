import './Counter.css';
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0)
    
  return (
    <>
    <div className='divButton'>
    <button className="button" onClick={() => setCounter(counter - 1)}>-</button>
    <button className="button" onClick={() => setCounter(counter + 1)}>+</button>
    </div>
    <div className='compteur'>
      Un compteur : {counter}
    </div>
    </>
    )
  }
  
  export default Counter;