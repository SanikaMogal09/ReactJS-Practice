import { createContext } from "react"
import CompA from "./components/CompA"
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./UserContext";
import UpdateUser from "./components/UpdateUser";


export const Data  = createContext();
export const Data1  = createContext();

const App = () => {
  const name = 'Sanika'
  const age = 21
  return (
    <div>
      {/* <Data.Provider value={name}>
        <Data1.Provider value = {age}>
          <CompA/>
        </Data1.Provider>
      </Data.Provider> */}
      
      {/* Exercise */}
      <UserProvider>
        <UserProfile/>
        <UpdateUser/>
      </UserProvider>
    </div>
  )
}

export default App    