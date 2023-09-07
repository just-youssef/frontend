import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { Navbar, Home, Signup, Login, PasswordReset } from './components';
import { Box } from '@mui/material';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const colorTheme = createTheme({
    typography: {
      fontFamily: 'Cairo',
    },

    palette: {
      mode: darkMode? "dark": "light",
      background : {
        paper: darkMode? grey[900]: grey[300],
        default: darkMode? "#121212": grey[200],
       },
       divider : darkMode? 'rgba(255, 255, 255, 0.3)': 'rgba(0, 0, 0, 0.3)',
    },
  });

  return (
    <ThemeProvider theme={colorTheme}>
      <CssBaseline />
        <Router>
          <Navbar check={darkMode} change={ ()=> setDarkMode(!darkMode) } />
          <Box mx={ {sm: 5, xs: 1} } my={2} >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/password-reset" element={<PasswordReset />} />
            </Routes>
          </Box>
        </Router>
    </ThemeProvider>
  )
}

export default App