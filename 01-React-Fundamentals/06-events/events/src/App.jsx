// Example 1
const Button = () =>{
  const handleClick=()=>console.log(Math.round(Math.random()*10))
  return <button onClick={handleClick}> click me</button>
}

//Example 2
const Copy = () => {
  const copyHandler = () => {
    console.log('Stop stealing my content');
    
  }
  return (
    <div>
      {/* OnCopy runs the fuction when we try to copy the content */}
      <p onCopy={copyHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis a nemo cumque, ipsa odit unde temporibus minima nostrum consectetur eius.
      </p>
    </div>
  )
}

//Example 3
const Move = () =>{
function moveHandler() {
  alert("Mouse Move event fired")
  console.log("mouse moved");
  
}

  return(
    <div>
      <p onMouseMove={moveHandler()}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ratione omnis ut. Laboriosam modi quas tempora dolore ipsam cupiditate quo aliquam vitae officiis ex! Possimus corrupti dolores eaque eveniet saepe!
      </p>
    </div>
  )
}
const App = () => {
  return (
    <div>
      {/* <Button/> */}
      {/* <Copy/> */}
      <Move/>
    </div>
  )
}

export default App