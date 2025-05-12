const useConversation = ((set) => ({
  selectedConversation: null,
  setSelectedConversation: (conv) => set({ selectedConversation: conv }),
  messages: [],
  setMessages: (msgs) => set({ messages: msgs }),
}));

export  default useConversation

