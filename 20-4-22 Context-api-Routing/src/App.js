import React from 'react';
import { AuthContext } from './context/AuthContextProvider';
import "./App.css";

import Login from './components/Login';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
