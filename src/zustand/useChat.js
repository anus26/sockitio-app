import { create } from "zustand";

const useChat = create((set) => ({
  selectedChat: null,
  setSelectedChat: (selectedChat) =>
    set({ selectedChat }),
  messages: [],
  setMessage: (messages) => set({ messages })
}));
export default useChat;




