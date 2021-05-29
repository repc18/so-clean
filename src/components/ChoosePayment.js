import React, {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';
import Header from "./Layout-Booking/Header";
import BookingFooter from "./Layout-Booking/BookingFooter";
import './ChoosePayment.css';
import {Link, useHistory } from "react-router-dom";
import Footer from '../components/Layout/Footer';



function ChoosePayment(props){
  let history = useHistory();
  const { payment, setPayment, setPage, totalHours, totalWorker, dateChosen, timeChosen, roomOptions, totalManhour, totalPrice} = props;

    // const [payment, setPayment] = useState(null)


    const handleChange = (event) => {
      setPayment(event.target.value);
    };

    const handleNextPage = () => {
      sessionStorage.setItem('roomData', JSON.stringify({
        totalHours, totalWorker, dateChosen, timeChosen, payment, roomOptions, totalManhour, totalPrice
      }))
      history.push('/orderdetails')
    }

    
    return (
      <div>
        {/* <Header></Header> */}
        <FormControl component="fieldset">
        <br></br>

        <h1 className="text-center">Choose Payment Method</h1>
        <RadioGroup className="text-center" aria-label="payment-method" name="payment1" value={payment} onChange={handleChange}>
          <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
          <FormControlLabel value="Visa" control={<Radio />} label="Visa" />
          <FormControlLabel value="Line Pay" control={<Radio />} label="Line Pay" />
        </RadioGroup>
        <div className="inline-div">
           <Button onClick={handleNextPage}>
              Continue
            </Button>
            <Button color="primary">Back</Button>
            </div>
      </FormControl>
      {/* <BookingFooter></BookingFooter> */}
      {/* <Footer></Footer> */}
      </div>
      
    );
}

export default ChoosePayment;