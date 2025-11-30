//Parent component
// const App = () => {
//   return <User 
//   img = "https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg"
//   name="Sanika"
//   age={20}
//   ismarried ={false}
//   hobbies ={["Reading ","Music ","travelling "]}
//   />
// }

//child component
// const User = (props) =>{
  
//   return (
//     <div>
//       <h1>Name: {props.name}</h1>
//       <h1>Age: {props.age}</h1>
//       <h1>Is married: {props.ismarried}</h1>
//       <h4>Hobbies: {props.hobbies}</h4>
//       <img src={props.img} alt="dog" height={300} width={250}/>
//     </div>
//   )
// }
//prop destructuring
// const User = ({name,age,ismarried,hobbies,img}) =>{
  
//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <h1>Age: {age}</h1>
//       <h1>Is married: {ismarried}</h1>
//       <h4>Hobbies: {hobbies}</h4>
//       <img src={img} alt="dog" height={300} width={250}/>
//     </div>
//   )
// }
//Exercise
// import Person from "./components/Person"
// import Product from "./components/Product"
// const App = () => {
//   return (
//     <div>
//       <h1>Person</h1>
//       <Person name="Sanika" age={20}/>
//       <h1>Product</h1>
//       <Product name ="Laptop" price="$699"/>
//     </div>
//   )
// }

import Card from "./components/Card"
const App = () => {
  return (
    <div>
      <Card>
        <h1>This is my card</h1>
        <p>This is some content for card 1</p>
      </Card>
      <Card>
        <h1>This is my card</h1>
        <p>This is some content for card 2</p>
      </Card>
      <Card>
        <h1>This is my card</h1>
        <p>This is some content for card 3</p>
      </Card>
    </div>
  )
}


export default App
