import { useState } from "react"

const Example1 = () => {
  
  //Passing callback function as an initial value
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  })

  const handleClick = () =>{setCount((prevCount)=>prevCount +1)}
  return (
    <div>
      {/* Rendering  */}
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Example1