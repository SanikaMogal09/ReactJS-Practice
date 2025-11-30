// Inline styling
// const App = () => {
//   return (
//     <div>
//       <h1 style ={{ color:"white", backgroundColor:"black", padding:"2rem"}}>Inline style</h1>
//     </div>
//   )
// }

// Separate styles and then incorporate it  

// const App = () => {
//   const styles = {color:"white", backgroundColor:"teal", padding:"2rem"}
//   return (
//     <div>
//       <h1 style = {styles}>Inline Styles</h1>
//     </div>
//   )
// }

//Separate styling
// import './index.css'

// const App = () => {
//   return (
//     <div>
//       <h1>Separate file for styling</h1>
//     </div>
//   )
// }

//Icons 
// import { FaShoppingCart } from "react-icons/fa";
// import { MdComputer } from "react-icons/md";
// const App = () => {
//   return (
//     <div>
//       <h1>Cart <FaShoppingCart /> </h1>
//       <h1>Computer <MdComputer /></h1>
//     </div>
//   )
// }

// Exercise 1
import IconComponent from "./component/IconComponent"
import ProfileCard from "./component/ProfileCard"
import StyleCard from "./component/StyleCard"
const App = () => {
  return (
    <div>
      <StyleCard/>
      <ProfileCard/>
      <IconComponent/>
    </div>
  )
}


export default App