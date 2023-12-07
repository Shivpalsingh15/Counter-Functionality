import { useState } from "react";
export default function Counter() {
    const[count, setCount] = useState(0)

    let inCount= ()=>{
        setCount((prevValue) => prevValue+1);
    }

    let deCount = () => {
      setCount((prevValue) => prevValue - 1);
    };

    let reset =()=>{
        setCount(0)
    }
  return (
    <div className="count">
      <h2>Counter Functionality</h2>
      <p>Count: {count} </p>
      <button onClick={inCount}>Increase Counts</button>
      <button onClick={deCount}>Decrease Counts</button>
      <button onClick={reset}>Reset Counts Value</button>
    </div>
  );
}
