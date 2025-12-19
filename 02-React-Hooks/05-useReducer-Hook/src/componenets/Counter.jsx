import { useReducer,useState } from "react"
import { counterReducer,initialState } from "../counterReducer"

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer,initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleInc = () =>dispatch({type:"increment"})
  const handleDec = () =>dispatch({type:"decrement"})

  const handleIncByAmt = () => {
    dispatch ({type:'incrementByAmount',payload:Number(inputValue)});
    setInputValue(0);
  }
  const handleDecByAmt = () => {
    dispatch ({type:'decrementByAmount',payload:Number(inputValue)});
    setInputValue(0);
  }



  return (
    <div>
      <h2> Count: {state.count}</h2>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>

      <div>
        <input type="number" value={inputValue} onChange = {e=>setInputValue(e.target.value)}  />
        <button onClick= {handleIncByAmt}>Add</button>
        <button onClick = {handleDecByAmt}>Subtract</button>

      </div>
    </div>
  )
}

export default Counter