

export default function Balance({balance}) {
  return (
    <div className="flex m-5 pt-10 items-center">
        <div className=" text-xl font-medium px-2">Your balance</div>
        <div className="text-xl font-thin">Rs {balance}</div>
      
    </div>
  )
}
