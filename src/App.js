import React, {Component } from 'react';
import ChooseRoom from "./components/ChooseRoom";
import ChooseTime from "./components/ChooseTime";
import ChoosePayment from "./components/ChoosePayment";
import AssistedWorkers from "./components/AssistedWorkers";
import OrderDetails from "./components/OrderDetails";
import {Route} from "react-router-dom";


import useToken from './components/Pages/useToken';
import useName from './components/Pages/useName';
import useId from './components/Pages/useId';
import usePhone from './components/Pages/usePhone';
import useEmail from './components/Pages/useEmail';


import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';
import MainHeader from './components/Layout/MainHeader';
import Footer from './components/Layout/Footer';
import Home from './components/Pages/Home';

function App(){

  const { token, setToken } = useToken();
  const { name, setName } = useName();
  const { customerId, setId } = useId();
  const { phone, setPhone } = usePhone();
  const { email, setEmail } = useEmail();

  if(!token) {
    return (
    <div>

    <MainHeader/>

    
    <main> 
    <Route path="/Login">
      <Login setToken={setToken} setName={setName} setId={setId} setPhone={setPhone} setEmail={setEmail}/>
      </Route>
    <Route path="/" exact>
      <Login setToken={setToken} setName={setName} setId={setId} setPhone={setPhone} setEmail={setEmail}/>
      </Route>  
    <Route path="/SignUp">
      <SignUp/>
    </Route>


      </main>
    </div>
    )
  }


  return(
      <div>        
        <MainHeader/>
        <main>  
        <Route path="/" exact >
          <Home/>
        </Route>    
        <Route path="/Login ">
          <Login setToken={setToken}/>
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        


        <Route path="/ChooseRoom">
            <ChooseRoom />
          </Route>
          <Route path="/ChooseTime">
            <ChooseTime />
          </Route>
          <Route path="/ChoosePayment">
            <ChoosePayment />
          </Route>
          <Route path="/AssistedWorkers">
            <AssistedWorkers />
          </Route>
          <Route path="/orderdetails">
            <OrderDetails />
          </Route>
          </main>
        <Footer/>
      </div>

  );
}

export default App;