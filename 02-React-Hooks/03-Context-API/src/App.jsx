import { createContext } from "react"
import CompA from "./components/CompA"


export const Data  = createContext();
export const Data1  = createContext();

const App = () => {
  const name = 'Sanika'
  const age = 21
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value = {age}>
          <CompA/>
        </Data1.Provider>
      </Data.Provider>
    </div>
  )
}

export default App    