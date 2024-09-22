// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import UserList from './pages/UserList';

function App() {
  return (
    <Router>
      <div>
        <h1>User Management</h1>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/" element={<h2>Welcome to User Management</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
