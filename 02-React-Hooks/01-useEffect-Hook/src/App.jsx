// useEffect hook to run some code WHEN
//    Component renders for the (First Time)
//    & WHENEVER it re-renders
//    & some data in our component changed.

// useEffect(callback fuction,dependency array)

import { useState, useEffect } from "react";

// 1. Without the empty array
// const App = () => {
//   const [value, setValue] = useState(0);
//       useEffect(() => {
//         console.log("calling useEffect");
//         document.title = 'Increment ${value}' 
//       });
//       return(
//         <div>
//           <h2>{value}</h2>
//           <button onClick={()=>setValue(value+1)}>Increment</button>
//         </div>
//       )
// }

// 2. With the empty array
// const App = () => {
//   const [value, setValue] = useState(0);
//       useEffect(() => {
//         console.log("calling useEffect");
//         document.title = 'Increment ${value}' 
//       },[]);
//       return(
//         <div>
//           <h2>{value}</h2>
//           <button onClick={()=>setValue(value+1)}>Increment</button>
//         </div>
//       )
// }

//3. useEffect - Dependency List
// const App = () => {
//   const [value, setValue] = useState(0);
//   const [something, setSomething] = useState(0);
//       useEffect(() => {
//         console.log("calling useEffect");
//         document.title = `Increment ${value} `
//       },[value,something]);
//       return(
//         <div>
//           <h2>{value}</h2>
//           <h2>{something}</h2>

//           <button onClick={()=>setValue(value+1)}>Increment</button>
//           <button onClick={()=>setSomething(value+1)}>Increment By Something</button>
//         </div>
//       )
// }


// 4. useEffect - Conditional
// You cannot wrap hook with conditional statement
// If you want logic you'll have to put it inside your hook.
// const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log("call useEffect");
//     if (value > 0) {
//       document.title = `Increment ${value}`;
//     }
//   });

//   return (
//     <>
//       <h2>{value}</h2>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//     </>
//   );
// };

// 5.Fetching Data

// const App = () =>{
//   const [data, setData] = useState([])

//   useEffect(() => {
//     async function getData() {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//       const data = await response.json()

//       if(data && data.length) setData(data)
//     }

//     getData();
//   }, [])
  

//   return(
//     <div>
//       <h1>To Do's</h1>
//       <ul>
//         {data.map((todo)=>(
//           <section key={todo.id}>
//             <li>Title: {todo.title}</li>
//             <li>Body: {todo.body}</li>
//           </section>
//         ))}
//       </ul>
//     </div>
//   )
// }


// Exercise 

import BasicEffect from "./components/BasicEffect";
import CounterEffect from "./components/CounterEffect";
import FetchDataEffect from "./components/FetchDataEffect";


const App = () => {
  return (
    <div>
      <BasicEffect/>
      <CounterEffect/>
      <FetchDataEffect/>
    </div>
  )
}


export default App