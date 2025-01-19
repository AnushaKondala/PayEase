
export default function InputBox({label,type,placeholder, onChange, value}) {
  return (
  
      <label className="self-start w-full block">
      <span className='block text-left  text-sm font-medium'>{label}</span>
      <input type={type} onChange={onChange} name="" id="" value={value} placeholder={placeholder} className='peer w-full border border-slate-200 rounded px-2 py-1   m-2'/>
      </label>
  
  )
}
