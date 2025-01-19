import { useState } from 'react'
import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function SignUp() {
  const [fName,setFName]=useState("");
  const [lName,setLName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  const body={
    username:email,
    firstName: fName,
    lastName: lName,
    password:password

  }
  return (
    <div className='flex items-center justify-center h-screen '>
      <div className='flex flex-col border rounded-md p-5 w-[80%] sm:w-[45%] lg:w-[25%] shadow-lg text-center'>
        <Heading heading={"Sign Up"} />
        <SubHeading subHeading={"Enter your information to create an account"} />
        <InputBox value={fName} onChange={e=> setFName(e.target.value)} label={"First Name"} type={"text"} placeholder={"John"} />
        <InputBox value={lName} onChange={e=> setLName(e.target.value)} label={"Last Name"} type={"text"} placeholder={"Doe"} />
        <InputBox value={email} onChange={e=> setEmail(e.target.value)} label={"Email"} type={"email"} placeholder={"johndoe@example.com"} />
        <InputBox value={password} onChange={e=> setPassword(e.target.value)} label={"Password"} type={"password"} placeholder={""} />
        <Button onClick={ async()=>{
         // console.log("hello");
          await axios.post("http://localhost:3000/api/v1/user/signUp", body)
          .then(async (res)=>{
            // console.log(res);
            // await localStorage.setItem("token",res.data.token);
            navigate("/signIn");
            
          })
        }
        } label={"Sign Up"} />
        <BottomWarning label={"Already have an account?"} to={"/signIn"} text={"Sign In"} />
      </div>
    </div>
  )
}
