import { useState } from "react"

const Switcher = () => {
    const [sw, setSw] = useState(false)
  return (
    <div>
        {sw ? (
            <span
             style={{
            backgroundColor: "black",
            color: "white",
            padding: "20px",
            borderRadius: "8px",
            margin: "8px",
            display: "inline-block",
          }}>Dark</span>

        ):(
            <span
             style={{
            backgroundColor: "#cbd5e1", // slate-300
            color: "black",
            padding: "20px",
            borderRadius: "8px",
            margin: "8px",
            display: "inline-block",
          }}>Light</span>
        )}
        <br />

        <input type="text" key={sw ? "dark" : "light"}
        style={{
          border: "4px solid black",
          borderRadius: "6px",
          padding: "10px",
          marginTop: "10px",
        }}/>

        <button onClick={()=>setSw((s)=>!s)}
            style={{
          marginLeft: "10px",
          padding: "10px 15px",
          backgroundColor: "#2327ffff", // light blue
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}>Switch</button>
    </div>
  )
}

export default Switcher