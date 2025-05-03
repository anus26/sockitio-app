import React from 'react';
import Users from './Users';

const User = () => {
  return (
    <>
    <div className='h-10vh'>

      <h1 className="px-8 py-4 text-white rounded-full bg-slate-800 font-semibold">
        Message
      </h1>

     <div  style={{maxHeight:"calc(84vh - 15vh)"}} className='flex-1 overflow-y-auto'>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>

     </div>
    </div>
    </>
  );
};

export default User;
