import React from 'react'
import { Link } from 'react-router-dom'
export default function BottomWarning({label,to,text}) {
  return (
    <div>
       <span className='text-sm text-center'>{label}</span> <Link to={to} className='text-sm underline'>{text}</Link>
    </div>
  )
}
