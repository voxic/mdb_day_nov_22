import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppComp from './components/AppComp';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#001e2b',
        paper: '#001e2b',
      }
    },
  });

  return (

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Router>  
          <AppComp />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Router>
    </ThemeProvider>

  );
}

export default App;
