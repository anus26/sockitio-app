import React from 'react'

const Singnup = () => {
  return (
<>
<div className='bg-black text-white h-screen flex items-center justify-center space-y-2'>
<form  className='border border-white px-4 py-2 rounded-md  w-80 '>

    <h1 className='text-2xl text-center '>Chat <span className='text-green-400 font-semibold'>App</span></h1>
    <h3 className='text-1xl font-bold'>Singnup</h3>
    <br />
    <input type="text" placeholder="fullname" className="input" />
    <br />
    <input type="email" placeholder="email" className="input" /><br />
    <input type="password" placeholder="password" className="input" /><br />

    <input type="confirmpassword" placeholder="confirmpassword" className="input" /><br />
    <div>
        <p>Have an account login</p>
        <input type="submit" value="singnup" />
    </div>


</form>
</div>
</>
  )
}

export default Singnup