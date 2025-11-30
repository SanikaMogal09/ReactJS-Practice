
// const Greetings = (props) => {
  
//     if(props.timeOfDay == "morning"){
//         return <h1>Good morning</h1>
//     } else if (props.timeOfDay == "afternoon"){
//         return <h1>Good afternoon</h1>
//     } else if (props.timeOfDay == "evening"){
//         return <h1>Good evening</h1>
//     } else{
//         return <h1>Good night</h1>
//     }
// }
const Greetings = ({timeOfDay}) => {
  
    return timeOfDay === "morning"?(<h1>Good morning</h1>):(<h1>Good afternoon</h1>)
}

export default Greetings