import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  InputAdornment,
  TextField,
} from '@material-ui/core'
import React, { useState } from 'react'
import style from './AddData.module.css'
import React, { useState } from 'react';

export default function AddMedicalData(props) {
  const [user, setUser] = useState(null); // User state, null if not authenticated

  const handleLogin = (email, password) => {
    // Implement your authentication logic here.
    // If authentication is successful, set the user state.
    if (/* authentication is successful */) {
      setUser({ email }); // You can store more user-related data here.
    } else {
      alert('Authentication failed. Please check your credentials.');
    }
  }

  const handleLogout = () => {
    setUser(null); // Log the user out by clearing the user state.
  }

  // ... Rest of your component code ...

  return (
    <div className={style.cardContainer}>
      {user ? (
        // User is authenticated, render the medical data form
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
        // User is not authenticated, render a login form
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

// LoginForm component for user authentication
function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    // Call the onLogin function with email and password
    onLogin(email, password);
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}