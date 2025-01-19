import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function SignIn() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col border p-5 text-center  lg:w-[30%] shadow-lg">
        <Heading heading={"Sign In"} />
        <SubHeading subHeading={"Enter your credentials to access your account"} />
        <InputBox onChange={e=> setEmail(e.target.value)} label={"Email"} type={"email"} placeholder={"johndoe@example.com"} />
        <InputBox onChange={e=> setPassword(e.target.value)} label={"Password"} type={"password"} placeholder={""} />
        <Button onClick={async()=>{
          await axios.post("http://localhost:3000/api/v1/user/signIn",{
            username:email,
            password
          }).then(async(res)=>{
            await localStorage.setItem("token",res.data.token);
            navigate("/dashboard");
          })
        }} label={"Sign In"} />
        <BottomWarning label={"Don't have an account?"} to={"/signUp"} text={"Sign Up"} />
      </div>
    </div>
  )
}
