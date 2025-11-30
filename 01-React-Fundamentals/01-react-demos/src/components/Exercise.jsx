

const Exercise = () => {
  return (
    <div>
        <h1>Sanikas Todos</h1>
    </div>
  )
}

export function Image() {
    return (
        <div>
            <img src="src\components\dog.jpg" height={200} width={300}/>
        </div>
    )
}

export function Items() {
    return (
       <div>
        <ul>
            <li>Invent new traffic lights </li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum technology</li>
        </ul>
        <button onClick={()=>alert("Function Called")}>click me</button>
       </div> 
    )
}

export default Exercise