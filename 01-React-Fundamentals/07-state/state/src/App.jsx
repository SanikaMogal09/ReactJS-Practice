// import { useState } from "react"

// const App = () => {
  // const counter = useState(0);
  // console.log(counter);

  //now using array destructuring to extract these values
  // const [apple,setApple] = useState(0); convention

  //Example 1 Number
  // const [count,setCount] = useState(0); // 0 is the initial value
  
  // const increment = () => setCount(count+1)
  // const decrement = () => setCount(count-1)
  // return (
  //   <div>
  //     <h1>{count}</h1>
  //     <button onClick={increment}> Increment</button>
  //     <button onClick={decrement}> Decrement</button>
  //   </div>
  // )

  // Example 2 Array
  // const [friend,setFriend] = useState(['Alex','John']); // 0 is the initial value

  // const addFrnd = () => setFriend([...friend,'Sanika'])
  // const removeFrnd = () => setFriend(friend.filter(f=>f !== "John"))
  // const updateFrnd = () => {
  //   setFriend(friend.map(f=>f==='Alex'?'Alex Smith': f))
  // }

  // return (
  //   <div>
  //     {friend.map(f=>(
  //       <li key={Math.random()}>{f}</li>
  //     )
  //   )}

  //   <button onClick={addFrnd}>Add One Friend</button>
  //   <button onClick={removeFrnd}>Remove One Friend</button>
  //   <button onClick={updateFrnd}>Update One Friend</button>
  //   </div>
  // )

// }

// export default App

// =========================================================================
//Example 3 objects
// import { useState } from "react"

// const App = () => {
//   const [movie, setMovie] = useState({
//     title:'Equalizer 3',
//     ratings: 7,
//   })

//   const handleClick = () =>{
//     // const copyMovie = {
//     //   ...movie,
//     //   ratings:5
//     // }
//     // setMovie(copyMovie)
//     setMovie({...movie,ratings:5})
//   }

//   return (
//     <div>
//       <h1>Title: {movie.title}</h1>
//       <p>Rating: {movie.ratings}</p>
//       <button onClick={handleClick}>Change Ratings </button>
//     </div>
//   )
// }

// export default App

// 
// import { useState } from "react"

// const App = () => {
//   const [movie, setMovie] = useState({
//     title:'Equalizer 3',
//     ratings: 7,
//   })

//   const handleClick = () =>{
//     // const copyMovie = {
//     //   ...movie,
//     //   ratings:5
//     // }
//     // setMovie(copyMovie)
//     setMovie({...movie,ratings:5})
//   }

//   return (
//     <div>
//       <h1>Title: {movie.title}</h1>
//       <p>Rating: {movie.ratings}</p>
//       <button onClick={handleClick}>Change Ratings </button>
//     </div>
//   )
// }

// export default App

//========================================================================
//Example 4 Array of objects
// import { useState } from "react"

// const App = () => {

//   const[movies,setMovies] = useState([
//     {id:1,title:'Spider Man',ratings:3},
//     {id:2,title:'Superman',ratings:6}
//   ]);

//   const handleClick = ()=>{
//     setMovies(
//       movies.map((m)=>(m.id===1 ? {...movies,title:"John Wick 4"} :m ))
//     )
//   }

//   return (
//     <div>
//       {movies.map(m=>(
//         <li key={Math.random()}>{m.title}</li>
//       ))}

//       <button onClick={handleClick}>Change Name</button>
//     </div>
//   )
// }

// export default App

//Example 5 Sharing State
// import { useState } from "react"
// import Comp1 from "./components/Comp1";
// import Comp2 from "./components/Comp2";

// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <Comp1 count={count} onClickHandler = {()=>setCount(count+1)}/>
//       <Comp2 count={count} onClickHandler = {()=>setCount(count+1)}/>
//     </div>
//   )
// }

// export default App

//==================================================================================

//Example 6 Passing function as a value
import Example1 from "./components/Example1"
import Example2 from "./components/Example2"
import Example3 from "./components/Example3"
import Counter from "./components/Counter"
import Profile from "./components/Profile"
import TodoList from "./components/TodoList"
import ShoppingList from "./components/ShoppingList"


const App = () => {
  return (
    <div>
      {/* <Example1/>
      <Example2/>
      <Example3/> */}

      {/* Exercise */}
      <Counter/>
      <TodoList/>
      <Profile/>
      <ShoppingList/>

    </div>
  )
}

export default App