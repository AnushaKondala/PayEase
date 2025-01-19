import { useEffect, useState } from "react"
import Button from "./Button"
import axios from "axios"
import { useNavigate } from "react-router-dom";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [searchedItem, setSearchedItem]=useState("");
  useEffect(()=>{
    axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${searchedItem}`,{
      headers:{
        'Authorization':'Bearer '+localStorage.getItem("token")
      }
    }).then((res)=>{
      setUsers(res.data.users);
    })
  },[searchedItem]);
  const handleChange=(e)=>{
    setSearchedItem(e.target.value);

  }
  return (
    <div className="m-5">
      <h2 className="font-semibold text-xl my-2">Users</h2>
      <input type="search" onChange={handleChange} name="" id="" placeholder="Search users..." className="w-full border border-slate-200 rounded px-2 py-1" />
      
        {users.map((user) => (
          <div key={user.firstName} className="m-2">
            <User user={user} />
          </div>
        ))}
   
    </div>
  )
}
function User({ user }) {
  const navigate=useNavigate();
  return <div className="w-full flex items-center justify-between m-2">
    <div className="flex items-center ">
      <span className="bg-slate-300 p-2 rounded-full w-10 h-10 flex items-center justify-center">{user.firstName[0]}</span>
      <p className="ml-2">{user.firstName} {user.lastName}</p>
    </div>
    <div>
      <Button onClick={()=>
        navigate("/send",{ state: {userId: user._id, firstName: user.firstName, lastName: user.lastName }})
      } label={"Send Money"} />
    </div>
  </div>

}
