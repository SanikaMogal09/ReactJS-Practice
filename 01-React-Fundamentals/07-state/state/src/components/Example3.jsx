import { useState, useEffect } from "react"
const Example3 = () => {
    // We passed a function into useState, not a direct value.
    // That function runs only once (on first render). This is called   lazy initialization
    const [name, setName] = useState(()=>{
        const savedName = localStorage.getItem('name');
        return savedName ? JSON.parse(savedName) : ""
        // JSON.parse(string)
        // Converts JSON string → JS value
    })

//  JSON = JavaScript Object Notation
//  It’s just a string format for data.


    useEffect(()=>{
        // localStorage can only store strings, not objects directly.
        localStorage.setItem('name',JSON.stringify(name))
        // JSON.stringify(value)
        // Converts JS value → JSON string
    },[name])

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleClear =()=>{
        setName("")
    }
  return (
    <div>
        <h1>Your Name: {name}</h1>
        <input 
        type="text" 
        value={name} 
        onChange={handleChange} 
        placeholder="Enter your name"
        />
        <button onClick={handleClear}>Clear Name </button>
    </div>
  )
}

export default Example3