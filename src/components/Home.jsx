import React, { useState, useEffect } from 'react'
import { Logout } from './'
import { Box, Button, Typography } from '@mui/material'
import { auth } from '../firebase-config';
import { onAuthStateChanged } from "firebase/auth";
import listAPI from '../utils/listAPI';

const Home = () => {
  const [user, setUser] = useState({});
  const [students, setStudents] = useState([]);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(()=>{
    user && listAPI('student', user.accessToken).then(data => setStudents(data))
  }, [user])

  return (
    <Box>
      <Typography>Home</Typography>
      <Typography>{ user?.email }</Typography>
      {user && <Typography>{ JSON.stringify(students) }</Typography>}
      { user && <Button variant="contained" onClick={Logout}>Logout</Button> }
    </Box>
  )
}

export default Home