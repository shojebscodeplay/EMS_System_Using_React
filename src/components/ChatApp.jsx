import React, { useState, useRef, useEffect } from "react";

const ChatApp = ({ onBack }) => {
  const [messages, setMessages] = useState([]); // Each message: { sender: 'user' | 'assistant', text: string }
  const inputRef = useRef(null);
  const chatBoxRef = useRef(null);

  // Scroll chat to bottom on new messages
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const appendMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const sendMessage = async (message) => {
    appendMessage("user", message);
    try {
      const response = await fetch("https://llm-backend-pnae.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      if (response.ok) {
        appendMessage("assistant", data.response);
      } else {
        appendMessage("assistant", `Error: ${data.error}`);
      }
    } catch (error) {
      appendMessage("assistant", `Error: ${error.message}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = inputRef.current.value.trim();
    if (message) {
      sendMessage(message);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-xl shadow-lg flex flex-col h-[80vh] border border-gray-200 sm:h-[70vh]">
      {/* Header with Back Button */}
      <header className="bg-gradient-to-r from-orange-400 to-yellow-300 text-black p-4 sm:p-6 text-center font-bold rounded-t-xl flex justify-between items-center">
        <span className="text-base sm:text-xl">SHOJEBthings Chatbot</span>
        <button
          onClick={onBack}
          className="text-xs sm:text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
        >
          Back
        </button>
      </header>

      {/* Note Banner */}
      <div className="bg-blue-100 text-blue-800 p-2 sm:p-3 text-center text-xs sm:text-sm">
        Please ask relevant questions about the company. Note: The first response may take some time.
      </div>

      {/* Chat Box */}
      <div
        className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-3 bg-gray-100"
        ref={chatBoxRef}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg shadow-md max-w-[90%] sm:max-w-[75%] ${
                msg.sender === "user"
                  ? "bg-gradient-to-r from-orange-400 to-yellow-300 text-black"
                  : "bg-gradient-to-r from-blue-400 to-green-300 text-white"
              }`}
            >
              <p className="text-xs sm:text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <form
        className="p-2 sm:p-4 flex border-t border-gray-200"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Type your message..."
          ref={inputRef}
          required
          className="flex-1 p-2 sm:p-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400 text-xs sm:text-sm"
        />
        <button
          type="submit"
          className="ml-2 bg-orange-400 hover:bg-yellow-400 text-black font-bold px-3 py-2 sm:px-4 sm:py-3 rounded-full transition text-xs sm:text-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatApp;
