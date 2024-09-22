// src/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the CSS file

function Register() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password_hash: '',
    verified_email: false,
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('email', user.email);
    formData.append('password_hash', user.password_hash);
    formData.append('verified_email', user.verified_email);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);
      navigate('/users');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert('User already exists. Please try a different email or username.');
      } else {
        console.error('Error registering user:', error);
        alert('An error occurred during registration. Please try again.');
      }
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password_hash" placeholder="Password" onChange={handleChange} required />
        <input type="file" onChange={handleImageChange} accept="image/*" required className="file-input" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
