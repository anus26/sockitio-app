import React from 'react'
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
<>
<div className='h-10vh'>

<div className='px-6 py-4'>
<div className='flex space-x-3'>
<input type="text" placeholder="Type here" className="input w-[80%] rounded-[10px] p-3"  />
<button><FaSearch  className='text-5xl px-2 hover:bg-gray-600 rounded-full duration-300'/></button>
</div>
<div/>
</div>
</div>
</>
  )
}

export default Search