import { Stack, Paper, Typography, TextField, Button } from '@mui/material'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase-config';

const Signup = () => {
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

    const createUser = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
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
      
    const handleSignup = event => {
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
            createUser();
        }
      }

    return (
        <Paper
            elevation={0}
            variant="outlined"
            onSubmit={handleSignup}
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
                Signup
                </Typography>

                <TextField
                    type='email'
                    error={emailError}
                    onChange={event => setEmail(event.target.value)}
                    fullWidth
                    required
                    label="Email"
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
                SignUp
                </Button>

                <Button
                    onClick={() => navigate("/login")}
                    fullWidth
                    variant="outlined"
                    size='large'
                >
                OR Login
                </Button>
            </Stack>
        </Paper>
    )
}

export default Signup