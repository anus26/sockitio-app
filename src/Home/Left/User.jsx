import React from 'react';
import Users from './Users';
import useGetAllUser from '../../context/useGetAllUser.jsx';

const User = () => {
  const [users, loading] = useGetAllUser();

  if (loading) {
    return <p className="text-white p-4">Loading…</p>;
  }

  // **Debug tip**: uncomment this to verify it’s an array
  // console.log('allUsers is array?', Array.isArray(allUsers), allUsers);

  return (
    <div className="h-10vh">
      <h1 className="px-8 py-4 text-white rounded-full bg-slate-800 font-semibold">
        Messages
      </h1>
      <div
        style={{ maxHeight: 'calc(84vh - 10vh)' }}
        className="flex-1 overflow-y-auto"
      >
        {users.length === 0 ? (
          <p className="text-gray-400 p-4">No other users to chat with.</p>
        ) : (
          users.map(user => (
            <Users key={ user._id} user={user } />
          ))
        )}
      </div>
    </div>
  );
};

export default User;
