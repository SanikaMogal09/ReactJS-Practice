import { useState,useEffect } from "react"

const CounterEffect = () => {

    const [value, setValue] = useState(0)
    useEffect(()=>{
        document.title = `Increment (${value})`
    },[value])
  return (
    <div>
        <h2>{value}</h2>
        <button onClick={()=>setValue(value+1)}>Increment</button>
    </div>
  )
}

export default CounterEffect