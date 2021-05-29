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
import useAddress from './components/Pages/useAddress';
import useArea from './components/Pages/useArea';


import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';
import Home from './components/Pages/Home';
import Footer from './components/Layout/Footer';

import MainHeader from './components/Layout/MainHeader';
import LogoutPage from './components/Pages/LogoutPage';
import SecondHeader from './components/Layout/SecondHeader';
import Home2 from './components/Pages/Home2';

function App(){

  const { token, setToken } = useToken();
  const { name, setName } = useName();
  const { customerId, setId } = useId();
  const { phone, setPhone } = usePhone();
  const { email, setEmail } = useEmail();
  const { address, setAddress } = useAddress();
  const { area, setArea } = useArea();

  if(!token) {
    return (
    <div>

    <MainHeader/>

    
    <main> 
    <Route path="/Login">
      <Login setToken={setToken} setName={setName} setId={setId} setPhone={setPhone} setEmail={setEmail} setAddress={setAddress} setArea={setArea}/>
      </Route>
    <Route path="/" exact>
        <Home/>
      </Route>  
    <Route path="/SignUp">
      <SignUp/>
    </Route>


    <Route path="/Logout">
      <LogoutPage/>
    </Route>

    <Footer/>
      </main>
    </div>
    )
  }


  return(
      <div>        
        <SecondHeader/>
        <main>  
       <Route path="/" exact >
        <Home2/>
      </Route>    
      <Route path="/Login ">
        <Login setToken={setToken} setName={setName} setId={setId} setPhone={setPhone} setEmail={setEmail} setAddress={setAddress} setArea={setArea}/>
      </Route>
      <Route path="/SignUp">
        <SignUp />
      </Route>

      <Route path="/Logout">
      <LogoutPage/>
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