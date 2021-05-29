import React,{useState, useEffect, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Header from "./Layout-Booking/Header";
import BookingFooter from "./Layout-Booking/BookingFooter";
import _ from 'lodash'
import { Link } from 'react-router-dom';

function AssistedWorkers(props){
  const history = useHistory()
  const [asistedWorkers,setAssistedWorkers] = useState([]);

  const routeChange = () =>{ 
    let path = `/`; 
    history.push(path);
  }

  function confirm() {
    sessionStorage.removeItem("roomData")
    sessionStorage.removeItem("workerIds")
    routeChange();
  }


  const fetchAssistedWorker = async( workerIds) => {   

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ workerIds})
};

    // FLASK API
    console.log(JSON.stringify({ workerIds}))
    const response = await fetch("https://soclean-backend.herokuapp.com/api/get_worker",requestOptions)
    const data = await response.json(); //convert from json to js
    
    console.log(data.workers);

    const transformedData = data.workers.map((workerData) => {
      return {
        area: workerData.areaAddress,
        email: workerData.email,
        name: workerData.name,
        phoneNumber: workerData.phoneNumber,
      };
    });
    setAssistedWorkers(transformedData);
    console.log(transformedData);
  }

  useEffect(() => {
    // const roomData = JSON.parse(sessionStorage.getItem('roomData'))
    // if(!roomData){
    //   history.push('/')
    // }

    const workerIds =JSON.parse(sessionStorage.getItem('workerIds'));
    console.log(workerIds.worker_id)
    // if(_.isEmpty(workerIds)){
    //   history.push('/ChooseRoom')
    // }
    if(workerIds){
      fetchAssistedWorker(workerIds.worker_id);
    }
    
  }, [])

  // useEffect(() => {
  // }, [fetchAssistedWorker]);

  const renderCard = (card) => {
    return(
      <div class="card">
            <div class="card-body">
              <h5 class="card-title">{card.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{card.email}</h6>
              <h6 class="card-subtitle mb-2 text-muted">{card.phoneNumber}</h6>
              <p class="card-text">{card.area}</p>
            </div>
      </div>
    );
  };

    return(
        <div>
        {/* <Header></Header> */}
        <br></br>
        <br></br>
        <br></br>
            <h1 className="text-center">Your Assigned Workers</h1>
            {/* <div className="inline-div">
                <h4>Image</h4>
                <h4>Worker Details</h4>
            </div> */}
            <div>
              {asistedWorkers.map(renderCard)}
            </div>
            <div>
            <Link onClick={confirm}>Back to Home</Link>
            </div>
            {/* <BookingFooter></BookingFooter> */}
        </div>
    );
}

export default AssistedWorkers;