import { useEffect } from "react";

const BasicEffect = () => {

    useEffect(()=>{
        console.log("Called useEffect")

    },[])
  return (
    <div>
        <h2>Check console to see the message</h2>
    </div>
  )
}

export default BasicEffect