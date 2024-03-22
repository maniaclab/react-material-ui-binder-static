import './App.css';
import { Helmet } from 'react-helmet';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import binderImage from './img/binder.png';
import efiImage from './img/efi_sig.png';

// The following defines 3 major areas of the page: Header (top bar), MainContent (two slabs in the middle), and Footer (bottom bar)

function Header(props) {
  return (  
        <Grid 
         container 
         component="header" 
         sx={{ 
            height: '3vh', 
            minHeight: '16px',
            backgroundColor: 'primary.main', 
            justifyContent: 'left', 
            alignItems: 'center'
         }}
        >
          <Typography variant="h7" color="white" align="center" sx={{ paddingLeft: '1rem' }}>
            PSD Connect
          </Typography>
        </Grid>
  )
}

function MainContent(props) {
  return (
      <Grid container component="main" sx={{ height: '82vh' }}>
        <CssBaseline />
        <Description />
        <Login />
      </Grid>
  )
}

function Footer(props) {
  return (
        <Grid container component="footer" sx={{ height: '15vh', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
          <img src={efiImage} alt="EFI" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
        </Grid>
  )
}

// Splash image and description
function Description(props) {
 return (
          <Grid
           item
           xs={false}
           sm={4}
           md={7}
           sx={{
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
           }}
          >
          <Box sx={{ m: 4, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 4, flexBasis: '50%' }}>
              <Typography variant="h4" align="left" color="textPrimary" gutterBottom>
                On-Demand Interactive Notebooks with Pile
              </Typography> 
              <Typography variant="body1" align="left" color="textPrimary" paragraph>
                Pile is a powerful platform that enables users to create and manage their own Jupyter notebook environments for interactive data analysis and simulation.
                With Pile,  you can bring your own software and leverage our high-performance infrastructure, including fast networking, ample scratch storage, and generous CPU and memory allocations. 
              </Typography>
            </Box>
            <Box sx={{ flexBasis: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }}>
              <Box sx={{ width: '50%', paddingTop: '50%', position: 'relative' }}>
                <img src={binderImage} alt="Binder" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain' }} />
              </Box>
            </Box>
          </Box>
          </Grid>
  )
}

// Login screen on the right side of the page
function Login(props) {
  return (
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box sx={{ mt: 1 }}>
                  Physical Sciences Division Users
                  <Grid item xs>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 1, mb: 2 }}
                  >
                    Log in with cnetid
                  </Button>
                  </Grid>
                  External Users
                  <Grid item xs>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 1, mb: 2 }}
                  >
                    Log in / Sign Up via Globus
                  </Button>
                  </Grid>
                <Grid container>
                  <Grid item xs>
                    <Copyright />
                  </Grid>
                  <Grid item>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
  )
}

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
        University of Chicago 
    </Typography>
  );
}

// Entrypoint

function App() {
    return (
        <> 
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
            </Helmet>
            <div className="App">
              <Grid container>
                <Header />
                <MainContent />
                <Footer />
              </Grid>
            </div>
        </>
    );
}

export default App;
