// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Login,{Profile,Setting, UserKey} from "./components/UserComponent";
// import Main from "./components/Main";

// import Exercise,{Image, Items} from "./components/Exercise";

// function App() {
//   const UserName = "Sanika";
//   return ( <div>
//     <Header/>
//     <Main/>
//     <Footer/>
//     {/* <Fruit/> */}
//     <Login/>
//     <Profile/>
//     <Setting/>
//     <h1>Hello {UserName}</h1>
//     <h3>{UserKey}</h3>
//     <button onClick={()=>alert("Hello")}>Click Me</button>
//   </div>
//   )
// };

// const App = () =>{
//   return <h1>Hello World</h1>;
// }

// function Fruit() {
//   return (
//     <h1>Apple</h1>
//   )
// }

//Exercise
// function App() {
//   return ( <div>
//     <Exercise/>
//     <Image/>
//     <Items/>
//   </div>
//   )
// };

//JSX with curly braces 
function App(){
  // const name = "Sanika";
  const name = undefined;
  let x = 10;
  let y = 20;
  function fruit(){
    return "Apple"
  }
  function sum(a,b){
    return a+b
  }

  function operation(a,b,op){
    if(op=="+"){
      return a+b
    }
    else if(op=="-") {
      return a-b
    }
    else if(op=="*") {
      return a*b
    }
    else{
      return a/b
    }
  }
  //Oject
  const userObj={
    name:"Sanika",
    age:20,
    email:"sanika@gmail.com"
  }

  //Array
  const userArray = ["sam","dan","bruce","peter"];

  //html tags
  const path = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg";

  return (
    <div>
      <h1>Jsx with curly braces</h1>
      <h2>{name?name:"user not found"}</h2>
      <h3>{x+y}</h3>
      <h2>{fruit()}</h2>
      <h1>{sum(40,50)}</h1>
      <h1>{operation(40,50,"*")}</h1>
      <h1>{userObj.email}</h1>
      <h1>{userArray[0]}</h1>
      <input type="text" value={name} /><br /><br />
      <img 
      src={path}
      height={200}
      width={300}
       />
    </div>
  )
}

export default App;