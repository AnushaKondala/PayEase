import { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import axios from "axios";


export default function Dashboard() {
  const [balance,setBalance]=useState("");
  useEffect(()=>{
    async function fetchData() {
      await axios.get("http://localhost:3000/api/v1/account/balance", {
        headers:{
          'Authorization':'Bearer '+localStorage.getItem("token")
        }
      }).then((res)=>
          setBalance(res.data.balance)
      )
    }
    fetchData();
  },[])
  return (
    <div>
      <Appbar title={"PayEase"} user={"U"}/>
      <Balance balance={balance}/>
      <Users/>
    </div>
  )
}
