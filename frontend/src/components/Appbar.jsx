

export default function Appbar({title,user}) {
  return (
    <div className=" flex items-center justify-between m-5">
      <h2 className="font-bold text-4xl">{title}</h2>
      <div className="flex items-center gap-2">
      <p className="">Hello,</p>
      <span className="bg-slate-400 rounded-full w-10 h-10 flex items-center justify-center">{user}</span>
      </div>
    </div>
  )
}
