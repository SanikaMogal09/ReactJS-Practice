//Example 1
// const ValidPwd = () => <h1>Valid Password</h1> //component
// const InvalidPwd = () => <h1>Invalid Password</h1> //component

// //component 
// const Password = ({isValid}) =>{
//   // if (isValid) {
//   //   return <ValidPwd/>
//   // }
//   // else{
//   //   return <InvalidPwd/>
//   // }
//   return isValid ? <ValidPwd/> : <InvalidPwd/>;
// };

// const App = () => {
//   return (
//     <div>
//       <Password isValid = {true}/>
//       <Password isValid = {false}/>
//       {/* here isValid is a prop*/}
//     </div>
//   )
// }

// export default App

// Example 2
// const Cart = () =>{

//   const items =  ["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"];
//   return(
//     <div>
//       <h1>Cart 🛒</h1>
//       {items.length>0 &&  <h2> You have {items.length} items in your Cart</h2>}

//       <ul>
//         <h4>Products</h4>

//         {items.map(item=>(
//           <li key={Math.random}> {item}</li>
//         ))}
//       </ul>
      
//     </div>
//   )
// }


// const App = () => {
//   return (
//     <div>
//       <Cart/>
//     </div>
//   )
// }

//Exercise 1
import Greetings from "./components/Greetings"
import UserStatus from "./components/UserStatus"
import Weather from "./components/Weather"
const App = () => {
  return (
    <div>
      <Weather/>
      <UserStatus loggedIn = {true} isAdmin={false}/>
      <Greetings timeOfDay ="morning"/>
    </div>
  )
}

export default App
