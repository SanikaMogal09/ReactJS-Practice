// import { useRef } from "react"


// const App = () => {
//   const inputElement = useRef(null);

//   const focusInput = () => {
//     inputElement.current.focus();
//     inputElement.current.value = "Sanika";
//   }
  
//   return (
//     <div>
//       <input type="text" ref={inputElement} />
//       <button onClick={()=>focusInput()}>Focus and Write Sanika</button>
//     </div>
//   )
// }

// export default App

// Exrecise 
import FocusInput from "./components/FocusInput"
import Timer from "./components/Timer"

const App = () => {
  return (
    <div>
        <FocusInput/>
        <Timer/>
    </div>
  )
}

export default App