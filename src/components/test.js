import React,{useState} from 'react';
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  
  const [User, setUser] = useState({});
  
  

   async function addUserHandler() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: User.name,
        address: User.address,
        area: User.area,
        email: User.email,
        password: User.password,
        phone: User.phone,
        paymentMethod: User.paymentMethod
      })
  };


     const response = await fetch('https://so-clean-api.herokuapp.com/api/users', requestOptions);
     const data = await response.json();
     setUser({});
      console.log (data);
      console.log("Called");
}

function changeHandler(event) {
  const {name, value} = event.target;
  setUser((prevUser) => {
     return {...prevUser, [name]: value}
  })
  
  console.log(User);
}


const history = useHistory();

  const routeChange = () =>{ 
    let path = `SignIn`; 
    history.push(path);
  }
 
 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      
      <div className={classes.paper}>


      
       
        <Typography component="h1" variant="h3">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="First Name"
                autoFocus
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="area"
                label="Last Name"
                name="area"
                autoComplete="lname"
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={changeHandler}
              />           
            </Grid>           
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={changeHandler}
              />
            </Grid>
            
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Telephone Number"
                type="Telpehone Number"
                id="phone"
                autoComplete="Telephone Number"
                onChange={changeHandler}
              />
              </Grid>
              
              <Grid item xs={15}>              
              <TextField
          variant="outlined"
          fullWidth
          name="Area"
          size={'small'}
          label="Area"
          onChange={changeHandler}
          InputProps={{
                endAdornment: (
                 <datalist id="Area">
                     <option value="Daan"></option>
                    <option value="XinYi"></option> 
                    <option value="ShiLin"></option>        
                </datalist>
                ),
                inputProps: {
                      list: "Area"
                }
              }}             
              />                      
              </Grid>
              <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address"
                label="Street and Number"
                type="Street and Number"
                id="address"
                autoComplete="Street and Number"
                onChange={changeHandler}
              />
              </Grid>
              
              <Grid item sm={15}>             
              <TextField    
                justify = "center"
                align-items="center"         
               variant="outlined"
               required
               fullWidth
               name="paymentMethod"
               label="Postal Code"
               type="Postal Code"
               id="paymentMethod"
               autoComplete="Postal Code"
               onChange={changeHandler}
             />
             </Grid>
             <Grid item xs={15}>              
              <TextField
          variant="outlined"
          name="paymentMethod"
          fullWidth
          size={'small'}
          label="Payment Method"
          onChange={changeHandler}
          InputProps={{
                endAdornment: (
                 <datalist id="paymentMethod">
                    <option value="Visa"></option>
                    <option value="Cash"></option> 
                    <option value="LinePay"></option>
                    <option value="JkoPay"></option>        
                </datalist>
                ),
                inputProps: {
                      list: "paymentMethod"
                }
              }}             
              />                      
              </Grid>
                      
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agree to share my personal information."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={(event) => {
              addUserHandler();
              routeChange();
            }}            
            className={classes.submit}  
           >
            Sign Up
          </Button>
          
          <Grid item>
          <nav>
            <ul>
                <li>
              <Link to="SignIn">already have an account? Sign In</Link>
              </li>
              </ul>
              </nav>
            </Grid>
          
        </form>
      </div>
      <Box mt={5}>      
      </Box>
    </Container>
  );
}
