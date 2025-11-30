
// const App = ()=> {
//   return <section id="section">
//     <h1>My website</h1>
//     <article>
//       <h2>Welcome to react</h2> 
//       <p className="text">Paragraph</p>
//     </article>
//   </section>
// }

// JSX Exercise 1
// import WelcomeMessage from "./components/WelcomeMessage"
// const App = () => {
//   return (
//     <div>
//       <WelcomeMessage/>
//     </div>
//   )
// }

// JSX exercise 2
// import JSXRules from "./components/JSXRules"
// const App = () => {
//   return (
//     <div>
//       <JSXRules/>
//     </div>
//   )
// }

//JSX Expressions
// import JSXExpressions from "./components/JSXExpressions"
// const App = () => {
//   return (
//     <div>
//       <JSXExpressions/>
//     </div>
//   )
// }

//JSX Exercise 3
// import Greetings from "./components/Greetings"
// import ProductInfo from "./components/ProductInfo"
// const App = () => {
//   return (
//     <div>
//       <Greetings/>
//       <ProductInfo/>
//     </div>
//   )
// }

//Lists

//Example 1
// const App = () => {
//   const numbers = [1,2,3,4,5,6]

//   return (
//     <div>
//       {numbers.map(number => (
//         <ul key = {number}>

//           <li>{number}</li>
//         </ul>
//       ))}
//     </div>
//   )
// }

//Example 2

// const App = () => {
//   const usersInfo = [
//     {
//       username: "Sanika",
//       email: "test@gmail.com",
//       location: "USA",
//     },
//     {
//       username: "John",
//       email: "jd@gmail.com",
//       location: "Arab",
//     },
//     {
//       username: "Alex",
//       email: "alexmersion@gmail.com",
//       location: "India",
//     },
//   ];
//   // return (
//   //   <div>
//   //     {usersInfo.map(user =>(
//   //       <ul key = {Math.random()}>
//   //         <li>{user.username}</li>
//   //         <li>{user.email}</li>
//   //         <li>{user.location}</li>
//   //       </ul>
//   //     ) )}
//   //   </div>
//   // )
//   return (
//     <div>
//       {usersInfo.map(({username,email,location}) =>(
//         <ul key = {Math.random()}>
//           <li>{username}</li>
//           <li>{email}</li>
//           <li>{location}</li>
//         </ul>
//       ) )}
//     </div>
//   )
// }

// Exercise
import UserList from "./components/UserList"
import ProductList from "./components/ProductList"
const App = () => {
  return (
    <div>
      <h1>Users</h1>
      <UserList/>
      <h1>Products</h1>
      <ProductList/>
    </div>
  )
}

export default App
