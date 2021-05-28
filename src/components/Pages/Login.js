import React ,{useState, useEffect }from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignitems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  const {setToken, setName, setId, setPhone, setEmail} = props;
  const classes = useStyles();
  const [email, setLoginEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await loginUser({
      email,
      password
    });
    console.log(data);
    setToken(data.token);
    setName(data.name);
    setPhone(data.phone);
    setEmail(data.email);
    setId(data._id);
    routeChange();
  }

   async function loginUser(credentials) {
    try {
      let response = await fetch('https://so-clean-backend-2.herokuapp.com/api/Users/Login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      // console.log(response);
      // res = await response.json();
      // console.log("RES: ", res);
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }

function changeHandler(event) {
  const {name, value} = event.target;
  
}

const history = useHistory();

  const routeChange = () =>{ 
    let path = `chooseRoom`; 
    history.push(path);
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate
         onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => setLoginEmail(e.target.value)}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
            
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Log in
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
            <nav>
            <ul>
                <li>
              <Link to="SignUp">Don't have an account? Sign Up</Link>
              </li>
              </ul>
           </nav>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>

        </Box>
    </Container>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}