import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import ExpenseItem from '../orderdetails-components/ExpenseItem';
import ExpenseItemPrice from '../orderdetails-components/EPPrice';
import { Button } from '@material-ui/core';
// import Button from '../orderdetails-components/Button';
import Table from '../orderdetails-components/EPTable';
import './OrderDetails.css';
import Header from "./Layout-Booking/Header";
import BookingFooter from './Layout-Booking/BookingFooter';
import Footer from '../components/Layout/Footer';


function OrderDetails () {
    const history = useHistory()
    const [data, setData] = useState({})
const expenses = [
    {
      id: 'e1',
      title: 'Name  :',
      data: JSON.parse(sessionStorage.getItem("name")),
      // date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
    title: 'Address   : ', 
    data: JSON.parse(sessionStorage.getItem("address")), 
    // date: new Date(2021, 2, 12) 
  },
    {
      id: 'e3',
      title: 'Telephone:',
      data: JSON.parse(sessionStorage.getItem("phone")),
      // date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Amount:',
      amount: JSON.parse(sessionStorage.getItem('roomData')).totalPrice,
      // date: new Date(2021, 5, 12),
    }
  ];

  const fetchData = async (roomData) => {
      try {
          console.log(roomData);
          console.log(String(JSON.parse(sessionStorage.getItem('area'))))
          console.log(String(JSON.parse(sessionStorage.getItem('address'))))
          const requestOptions = {
            // mode: 'no-cors',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': JSON.parse(sessionStorage.getItem('token'))},
            body: JSON.stringify({
              area: roomData.area,
              address: roomData.address,
              orderDetails: {
                  date: roomData.dateChosen,
                  workersAmount: roomData.totalWorker,
                  price: roomData.totalPrice,
                  shift: [roomData.timeChosen, roomData.endingHour],
                  paymentMethod: roomData.payment,
                  manhour: roomData.totalManhour
              },
              startingHour: roomData.timeChosen,
              endingHour: roomData.endingHour
            }),
          };
          await fetch('https://so-clean-backend-2.herokuapp.com/api/users/createOrder', requestOptions) //1
          .then((response) => response.json()) //2
          .then((response) => {
            console.log(response.workerIds);
            sessionStorage.setItem('workerIds', JSON.stringify({worker_id: response.workerIds}));
            history.push('/AssistedWorkers')
          })
      } catch (error) {
          console.log(error.message)
      }
  }

  useEffect(() => {
    const roomData = JSON.parse(sessionStorage.getItem('roomData'))
    const area1 = JSON.parse(sessionStorage.getItem("area"))
    const address1 = JSON.parse(sessionStorage.getItem("address"))
    if(!roomData){
        return history.push('/ChooseRoom')
    }
    const endingTime = Number(roomData.timeChosen) + Number(roomData.totalHours);
    Object.assign(roomData,{endingHour: endingTime});
    Object.assign(roomData,{area: String(area1)});
    Object.assign(roomData,{address: String(address1)});

    setData(roomData)

    // const result = fetchData(roomData)
    // console.log(result)

  }, [])

  return(
  <div>
  {/* <Header></Header> */}
  <br></br>
    <h2 align="center">Order Details</h2>
    
    <ExpenseItem
    title ={expenses[0].title}
    data ={expenses[0].data} 
    // date={expenses[0].date}
    ></ExpenseItem>
    <ExpenseItem
    title ={expenses[1].title} 
    data={expenses[1].data} 
    // date={expenses[1].date}
    ></ExpenseItem>
    <ExpenseItem
    title ={expenses[2].title} 
    data={expenses[2].data} 
    // date={expenses[2].date}
    ></ExpenseItem>
    <ExpenseItemPrice
    title ={expenses[3].title} 
    amount={expenses[3].amount} 
    // date={expenses[3].date}
    ></ExpenseItemPrice>
    <h2></h2>
    <h2></h2>

   
    {data && <>
    <br></br>
    <br></br>
      <div className="inline-div">
        <h4 align="center">Date:</h4>
        <h4>{data.dateChosen}</h4>
        <h4 align="center">Starting Time:</h4>
        <h4>{data.timeChosen}:00</h4>
        <h4 align="center">Ending Time:</h4>
        <h4>{data.endingHour}:00</h4>
        <h4 align="center">Duration:</h4>
        <h4>{data.totalHours} hour(s)</h4>   
        <h4>Worker Amount:</h4>
        <h4>{data.totalWorker} people</h4>     
        <h4>Payment:</h4>
        <h4>{data.payment}</h4>
      </div>

      </>

    }

    <h2></h2>
    <h2></h2>
    <h2></h2>
    <br></br>
    <div className="text-center">
    <Button variant="outlined" color="primary" onClick ={async () => {
      fetchData(data)
      // sessionStorage.setItem('workerIds', JSON.stringify({worker_id}))
      // history.push("/AssistedWorkers")
    }}>Confirm</Button>
    <Button variant="outlined" color="secondary">
        Cancel
      </Button>
      <br></br>
      <br></br>
    </div>

  {/* <BookingFooter></BookingFooter> */}
  {/* <Footer></Footer> */}
  </div>
);
}

export default OrderDetails;