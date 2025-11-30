
const UserList = () => {
    const user = [
        {
            id:1,
            name:"Alice",
            age: 25

        },
        {
            id:2,
            name:"Max",
            age: 30

        },
        {
            id:3,
            name:"Carmen",
            age: 35

        }
    ];
  return (
    <div>
        {user.map(({id,name,age})=>(
            <ul key={Math.random()}>
                <li>{id}</li> 
                <li>{name}</li> 
                <li>{age}</li> 
            </ul>
        ))}
    </div>
  )
}

export default UserList