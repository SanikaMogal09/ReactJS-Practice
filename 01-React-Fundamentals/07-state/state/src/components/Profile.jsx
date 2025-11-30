import { useState } from "react"

useState
const Profile = () => {
    // Initialize state with an object containing name and age
    const [profile, setProfile] = useState({name:"",age:""});

    const handleChange = (e)=>{
        const{name,value} =e.target;
        setProfile((prevprofile)=>(
            {...prevprofile, [name]:value}
        ))
    };

  return (
    <div>
       <div>
         <h1>User Profile</h1>
        <label>
            Name:  
            <input type="text"
            name="name"
            value={profile.name}
            onChange={handleChange} />
        </label>
       </div>
       <br />
       <div>
         <label>
            Age: 
            <input type="number"
            name="age"
            value={profile.age}
            onChange={handleChange} />
        </label>
       </div>
       <h3>Profile Information</h3>
       <p>Name: {profile.name}</p>
       <p>Age: {profile.age}</p>

    </div>
  )
}

export default Profile;