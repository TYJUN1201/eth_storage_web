import React, { useState } from 'react';
import style from './Authenticate.module.css';
import {
  Button,
  TextField,
} from '@material-ui/core';

export default function Authentication(props) {
  const userList = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
  ];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (enteredUsername, enteredPassword) => {
    // Find the user in the userList based on the entered username
    const user = userList.find((user) => user.username === enteredUsername);

    if (user) {
      // Check if the entered password matches the user's password
      if (user.password === enteredPassword) {
        console.log('Authentication successful. Welcome, ' + user.username);
        setAuthenticated(true);
      } else {
        console.log('Authentication failed. Please check your credentials.');
      }
    } else {
      console.log('User not found. Please check your username.');
    }
  };

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setAuthenticated(false);
  };

  const handleChange = () => {
    if (authenticated) {
      // Your logic when the user is authenticated
      console.log('User is authenticated. Handle the change.');
    } else {
      console.log('User is not authenticated. Please log in.');
    }
  };

  return (
    <div className={style.cardContainer}>
      {authenticated ? (
        <div>
          <h2 className={style.h2}>Patient Medical Data</h2>
          {/* Your form code here */}
          <div className={style.btnGroup}>
            <Button
              className={[style.btn, style.btnRed].join(' ')}
              onClick={handleLogout}
            >
              Logout
            </Button>
            <Button className={style.btn} onClick={handleChange}>
              Save
            </Button>
          </div>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );

  // LoginForm component for user authentication
  function LoginForm({ onLogin }) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const handleLoginClick = () => {
      // Call the onLogin function with entered username and password
      onLogin(enteredUsername, enteredPassword);
    };

    return (
      <div>
        <h2>Login</h2>
        <TextField
          label="Username"
          value={enteredUsername}
          onChange={(e) => setEnteredUsername(e.target.value)}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleLoginClick}>
          Login
        </Button>
      </div>
    );
  }
}
