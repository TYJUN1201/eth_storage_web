import React, { useRef, useState } from 'react';
import style from './Authenticate.module.css';
import {
  Button,
  Box,
  Card,
  Container,
  Grid,
  TextField,
} from '@material-ui/core';

export default function Authentication(props) {
    const userList = ['user1', 'user2', 'user3'];
    const [username, setUsername] = useState('user2'); // User state, null if not authenticated
    const [password, setPassword] = useState(null); // User state, null if not authenticated
  
    const handleLogin = (username) => {
        // Check if the username exists in the list
        if (userList.includes(username)) {
            console.log(`${username} please enter your password.`);
        // Show scan QR function
        } else {
            console.log('Authentication failed. Please check your credentials.');
        }
    };

    const handleLogout = () => {
        setUsername(null); // Log the user out by clearing the user state.
    };

    const handleChange = () => {
        // Your handleChange logic here
    };

    return (
        <div className={style.cardContainer}>
            {username ? (
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

    // LoginForm component for user authentication
    function LoginForm({ onLogin }) {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const handleLoginClick = () => {
        // Call the onLogin function with username
        onLogin(username);
        };

        return (
        <div>
            <h2>Login</h2>
            <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleLoginClick}>
                Login
            </Button>
        </div>
        );
    }
}
