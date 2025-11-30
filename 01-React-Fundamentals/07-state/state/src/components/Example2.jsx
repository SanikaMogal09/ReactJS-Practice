import { useState } from "react"

const Example2 = () => {
    //Passing callback function as an initial value
    const [randomNumber, setRandomNumber] = useState(()=>
        Math.floor(Math.random()*100) //0-100
);
const genNum = ()=>{
    const newNum = Math.floor(Math.random()*100)
    setRandomNumber(newNum)
}
  return (
    <div>
        <h1>Random Number:{randomNumber}</h1>
        <button onClick={genNum}>Generate new Number</button>
    </div>
  )
}

export default Example2