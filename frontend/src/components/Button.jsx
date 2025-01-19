

export default function Button({label, onClick}) {
  return (
    <button onClick={onClick} className='bg-gray-800 hover:bg-gray-700 text-white font-medium hover:cursor-pointer focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-md py-2 m-2 px-2'>{label}</button>
  )
}
