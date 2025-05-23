import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import useGetAllUser from '../../context/useGetAllUser.jsx';
import useChat from '../../zustand/useChat';
import toast from 'react-hot-toast';

const Search = () => {
  const [search, setSearch] = useState("");
  const [users] = useGetAllUser();
  const { setSelectedChat } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ Prevent page reload
    if (search !== "") {
      const chat = users.find((users) => {
        return users.fullname.toLowerCase() === search.toLowerCase();
      });
      if (chat) {
        setSelectedChat(chat);
        setSearch(""); // optional: clear the input
      } else {
        toast.error("User not found!"); // optional message
      }
    }
  };

  return (
    <div className="px-6 py-4">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search user"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input w-full rounded-[10px] p-3"
        />
        <button type="submit">
          <FaSearch className="text-3xl hover:bg-gray-600 rounded-full duration-300" />
        </button>
      </form>
    </div>
  );
};

export default Search;
