import { useState } from 'react';
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import { useLocation } from "react-router-dom"
import axios from 'axios';
export default function SendMoney() {
  const location = useLocation();
  const data = location.state;
  const [amount, setAmount] = useState(0);
  const initiateTransfer = async () => {
    await axios.post("http://localhost:3000/api/v1/account/transfer", {
      to: data.userId,
      amount
    }, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col items-center border rounded-md w-[80%]  sm:w-[45%] lg:w-[30%] p-5 shadow-lg'>
        <Heading heading={"Send Money"} />
        <div className='flex items-center m-5'>
          <span className='bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center'>{data.firstName[0]}</span>
          <p className='text-xl font-semibold ml-2'>{data.firstName} {data.lastName}</p>
        </div>
        <InputBox onChange={(e) => setAmount(e.target.value)} label={"Amount (in Rs)"} type={"text"} placeholder={"Enter amount"} />
        <button onClick={initiateTransfer} className='bg-green-500 text-white rounded-md w-full py-2 mt-2 hover:cursor-pointer hover:bg-green-300 hover:text-gray-700 hover:border border-green-700 '>Initiate Transfer</button>
      </div>
    </div>
  )
}
