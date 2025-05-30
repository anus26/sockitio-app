import axios from 'axios';
import React, { useState } from 'react'
import { BiLogOutCircle } from "react-icons/bi";
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
const Logout = () => {
  const [loading, setLoading]=useState(false)
  const handlelogout=async()=>{
setLoading(true)
try {
  const response=await axios.post(
     "https:grand-frankie-anusraza123bm-df134fa3.koyeb.app/user/logout"
            // "http://localhost:3000/user/logout"
    )
localStorage.removeItem("chatapp")
Cookies.remove("jwt")
setLoading(false)
console.log(response);


  toast.success("logout successfully")
  window.location.reload()
} catch (error) {
  console.log("Error",+error);
  
  toast.error("error ")
  
}
  }
  return (
 <>
 <div className='10vh'>  
<div>
  <button>
  <BiLogOutCircle  className='text-5xl text-white p-2 hover:bg-slate-700 rounded-full cursor-pointer ml-2 mt-2' onClick={handlelogout

  }/>
  </button>
</div>
 </div>
 </>
  )
}

export default Logout