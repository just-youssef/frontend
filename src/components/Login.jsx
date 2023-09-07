import { Stack, Paper, Typography, TextField, Button } from '@mui/material'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase-config';

const Login = () => {
    const navigate = useNavigate();

    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        navigate("/")
      }
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const loginUser = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          console.log(user);
          navigate("/")
        } catch (error) {
          console.log(error.message);
        }
    };

    const handleLogin = event => {
        event.preventDefault();
        setEmailError(false);
        setPasswordError(false);
    
        if(email===""){
            setEmailError(true);
        }
    
        if(password===""){
            setPasswordError(true);
        }
    
        if(email && password){
            loginUser();
        }
      }

    return (
        <Paper
            elevation={0}
            variant="outlined"
            onSubmit={handleLogin}
            component="form" 
            sx={{my:2, mx: "auto", px:2, py:6 ,width: { xs:300, sm:350, md:400 }}}
        >
            <Stack
                direction="column"
                gap={2}
                sx={{alignItems: 'center'}}
            >
                <Typography
                    fontSize={25}
                    component="div"
                    color="textSecondary"
                >
                Login
                </Typography>

                <TextField
                    error={emailError}
                    onChange={event => setEmail(event.target.value)}
                    fullWidth
                    required
                    label="Username"
                    variant="outlined"
                />

                <TextField
                    type="password"
                    error={passwordError}
                    onChange={event => setPassword(event.target.value)}
                    fullWidth
                    required
                    label="Password"
                    variant="outlined"
                />

                <Button
                    sx={{mt:3}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    size='large'
                >
                Login
                </Button>

                <Button
                    onClick={() => navigate("/signup")}
                    fullWidth
                    variant="outlined"
                    size='large'
                >
                OR Signup
                </Button>
            </Stack>
        </Paper>
    )
}

export default Login