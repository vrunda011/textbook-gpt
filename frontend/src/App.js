import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nevbar/Navbar'; // Ensure this path is correct
import Chat from './components/ChatInterface/Chat'; // Ensure this path is correct
import Home from './components/Home/Home';
import LoginSignup from './components/SignUp/SignUp';
import Standard from './components/Standard/Standard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/standard' element={<Standard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
