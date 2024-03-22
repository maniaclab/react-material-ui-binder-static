import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Atkinson Hyperlegible',
        'Arial',
        'sans-serif',
      ].join(','),
    },
    palette: {
        background: {
            default: "#ffffff",
        },
        primary: {
            light: '#bc6f5f',
            main: '#8b1724',
            dark: '#67322d',
            contrastText: '#fff',
        },
        secondary: {
            light: '#05bad2',
            main: '#007ba0',
            dark: '#00203d',
            constrastText: '#fff',
        },
    },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </React.StrictMode>
);
