// const Card = (props) =>{
//     return(
//         <div>
//             {props.children}
//         </div>
//     )
// }
//destructuring
const Card = ({children}) =>{
    return(
        <div>
            {children}
        </div>
    )
}
export default Card;

