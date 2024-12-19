import React, { useState } from 'react';
import "./Login.css";
import logoImg from "../assets/logo.png";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import links from '../../environment';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = async () => {
        try {
            const response = await fetch(`${links.backend}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password }),
                credentials: "include"
            });

            if (response.status === 403) {
                toast.error("Account is not verified. Please check your email for its verification.");
            } else if (response.status === 401) {
                toast.error("Invalid username or password.");
            } else if (response.status === 200) {
                toast.success("Login successful!");
                setTimeout(() => {
                    window.location.href = `${links.dashboard}`;
                }, 1500);
            } else {
                toast.error("An unexpected error occurred. Please try again.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            toast.error("Server error. Please try again later.");
        }
    };

    return (
        <div className='outerLoginDiv'>
            <div className='innerLoginDiv1'>
                <img src={logoImg} alt="" />
                <p>Login to Kite</p>
                <Box className='innerLoginBox1' sx={{ '& .MuiTextField-root': { width: '100%' } }}>
                    <TextField
                        id="outlined-search"
                        label="Username"
                        type="search"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Box>
                <Box className='innerLoginBox1' sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </Box>
                <button type="button" onClick={handleLogin}>Login</button>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Login;
