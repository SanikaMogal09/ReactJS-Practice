import { useContext } from "react"

import { Data, Data1 } from "../App"


const CompC = () => {

  const username = useContext(Data);
  const age = useContext(Data1)

  return (
    <h1> My name is {username} and I'm {age} years old.</h1>
  )
}

export default CompC