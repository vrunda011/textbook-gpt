import './Chat.css';
import {useLocation} from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';

const chatApiBaseUrl =  "http://localhost:5000/api/chat/"

function Chat(props) {
  const location = useLocation();
  const [inputValue, setInputValue] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [rows, setRows] = useState(1);
  const [messages, setMessages] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
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

  const sendMessage = async () => {
    const userInput = inputValue.trim();
    if (userInput === '') return;

    const userMessage = createUserMessage(userInput);
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    addToSearchHistory(userInput);

    // Make API call to Flask server
    const response = await fetch(chatApiBaseUrl + `${userInput}`);

    // Check for successful response
    if (response.ok) {
      const apiResponse = await response.json();
      const aiResponse = createAIResponse(apiResponse);
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    } else {
      console.error('Error fetching response from API');
      // Handle error gracefully, e.g., display an error message
    }

    // Clear the input field
    setInputValue('');
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

  return (
    <div className="container" style={{backgroundImage:`url('/images/standard${location.state.id}.jpg')`,backgroundSize:'cover'}}>
      <div className="sidebar" id="sidebar" >
        <h3>Search History</h3>
        <ul id="search-history" className="search-history">
          {searchHistory.slice().reverse().map((search, index) => (
            <li key={index}>{search}</li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <h1>Welcome to Standard {location.state.id}</h1>
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