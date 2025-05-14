import React from 'react';
import Users from './Users';
import useGetAllUser from '../../context/useGetAllUser.jsx';

const User = () => {

  const [alluser,loading]=useGetAllUser()
  // console.log(alluser,loading);
  
  return (
    <>
    <div className='h-10vh'>

      <h1 className="px-8 py-4 text-white rounded-full bg-slate-800 font-semibold">
        Message
      </h1>

     <div  style={{maxHeight:"calc(84vh - 10vh)"}} className='flex-1 overflow-y-auto'>
{alluser.map((user,index)=>{
  return <Users key={index} user={user}/>
})}

     </div>
    </div>
    </>
  );
};

export default User;
