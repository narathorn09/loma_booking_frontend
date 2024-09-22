// src/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'; // Import the CSS file

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h2>User List</h2>
      <div className="card-container">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <img src={user.image_path} alt={`${user.username}'s profile`} />
            <div className="card-content">
              <h3>{user.username}</h3>
              <p>Email: {user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
