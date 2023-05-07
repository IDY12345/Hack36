import  React,{useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, addDoc } from "firebase/firestore";
import { ethers } from 'ethers';

const firebaseConfig = {
  apiKey: "AIzaSyBU4EKHBp5L7GTOl7eCDVqMYed_ZMA99QA",
  authDomain: "hack36-83483.firebaseapp.com",
  projectId: "hack36-83483",
  storageBucket: "hack36-83483.appspot.com",
  messagingSenderId: "568739059463",
  appId: "1:568739059463:web:cf5878aa066dd2fd2517a2",
  measurementId: "G-843SRHH96X"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="/">
        The Pioneers
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp({isAuth}) {

  const navigate=useNavigate()

  useEffect(()=>
  {
      if(isAuth)
      {
          navigate("/Home")
      }
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!window.ethereum) {
      window.alert("Please add a wallet")
      return
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const message = "You agree to login with your mask "
    try {
      const signature = await signer.signMessage(message)
      const address = ethers.utils.verifyMessage(message, signature)
      await setDoc(doc(db, "user_signup", address.toString()), {
        signature: signature.toString(),
        wallet_address: address.toString(),
      });

      await window.alert("Signed Up successfully")
    } catch (error) {
      console.log(error)
      window.alert("Looks like wallet is not connected please connect your wallet")
      return;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up using metamask
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}