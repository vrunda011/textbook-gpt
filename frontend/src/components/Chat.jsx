import './Chat.css';
import React, { useState, useRef, useEffect } from 'react';

function Chat({ standardId ,handleToggle}) {
  const [inputValue, setInputValue] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [rows, setRows] = useState(1);
  const [messages, setMessages] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const userInputRef = useRef(null);
  const messagesRef = useRef(null);

  useEffect(() => {
    userInputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputValue(text);
    const words = text.trim().split(/\s+/).filter((word) => word!== '');
    setWordCount(words.length);
    const lines = text.split('\n').length; // count the number of lines
    setRows(Math.min(lines, 5));
  };

  const sendMessage = () => {
    const userInput = inputValue.trim();
    if (userInput === '') return;

    const userMessage = createUserMessage(userInput);
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    addToSearchHistory(userInput);

    // Simulate AI response (replace with your chatbot logic)
    const aiResponse = createAIResponse("This is a simulated response.");
    setMessages((prevMessages) => [...prevMessages, aiResponse]);

    // Clear the input field
    setInputValue('');
    updateWordCount();
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  };

  const createUserMessage = (text) => {
    return <div className="message user-message">{text}</div>;
  };

  const createAIResponse = (text) => {
    return <div className="message ai-message">{text}</div>;
  };

  const addToSearchHistory = (search) => {
    setSearchHistory((prevSearchHistory) => [...prevSearchHistory, search]);
  };

  const toggleHistory = () => {
    setIsSidebarOpen((prevIsSidebarOpen) =>!prevIsSidebarOpen);
  };

  return (
    <div className="container">
      <div className="sidebar" id="sidebar" style={{ display: handleToggle? 'block' : 'none' }}>
        <h3>Search History</h3>
        <ul id="search-history" className="search-history">
          {searchHistory.map((search, index) => (
            <li key={index}>{search}</li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <h1>Welcome to Standard {standardId}</h1>
        <div className="chat-box" id="chat-box">
          <div className="messages" id="messages" ref={messagesRef}>
            {messages}
          </div>
          <div className="input-box">
            <textarea
              type="text"
              id="user-input"
              placeholder="Ask a question (200-word limit)..."
              value={inputValue}
              onChange={handleInputChange}
              rows={rows}
              maxLength={200 * 5} // assuming 5 characters per word
              ref={userInputRef}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  sendMessage();
                }
              }}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
          <span className="word-limit-note" id="word-count">
            {wordCount}/200 words
          </span>
        </div>
      </div>
    </div>
  );
}

export default Chat;