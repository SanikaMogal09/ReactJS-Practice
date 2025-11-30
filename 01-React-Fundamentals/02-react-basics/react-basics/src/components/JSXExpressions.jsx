

const JSXExpressions = () => {
    const myName = "Sanika"
    const multiply = (a,b)=>a*b
    const specialClass = "simple-class"
  return (
    <div>
        <h1>2+2={2+2}</h1>
        <h1>My name is {myName}</h1>
        <p>My friends list : {["Alex","Max","Dan","Jordan"]}</p>
        <p>2*3={multiply(2,3)}</p>
        <p className={specialClass}>This is a special class</p>
    </div>
  )
}

export default JSXExpressions