import React, { useState, createContext } from 'react';
import UserProfile from './UserProfile.jsx';
import './style.css';

export const UserContext = createContext();

export default function App() {
  // In a real app, you would fetch the user data from an API
  const [user, setUser] = useState({
    id: 1,
    username: 'Sammy@7524',
    email: 'sammer@gmail.com',
  });

  const updateUser = (newUsername, newEmail) => {
    setUser((userData) => ({
      ...userData,
      username: newUsername,
      email: newEmail,
    }));
  };

  return (
    <div>
      <h2>Welcome back, {user.username}</h2>
      <h2>Your Email Address is: {user.email}</h2>
      <UserContext.Provider value={{ ...user, updateUser }}>
        <UserProfile />
      </UserContext.Provider>
    </div>
  );
}
