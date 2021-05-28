import React, {useState} from 'react';
import { useHistory } from "react-router-dom"
import bedroom from '../images/bedroom.jpeg';
import bathroom from '../images/bathroom.jpg';
import livingRoom from '../images/living and dining room.jpg';
import kitchen from '../images/kitchen.jpg';
import garage from '../images/garage.jpg';
// import SizeOptions from "./SizeOptions";
import { Button } from '@material-ui/core';
import {Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./ChooseRoom.css";
import Header from "./header/Header";
import ChoosePayment from './ChoosePayment';
import ChooseTime from './ChooseTime';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },
//     },
// }));

function ChooseRoom(){
  const history = useHistory();
    // const classes = useStyles(); //material-ui theme function
    const [totalHours, setTotalHours] = useState(0);
    const [totalWorker, setTotalWorker] = useState(0);

    const [dateChosen, setDateChosen] = useState("");
    const [timeChosen, setTimeChosen] = useState("");

    const [payment, setPayment] = useState(null)

    const [roomData, setRoomData] = useState({
      bedroom:{
        quantity: 0,
        size: 0.5
      },
      livingRoom:{
        quantity: 0,
        size: 0.5
      },
      kitchen:{
        quantity: 0,
        size: 0.5
      },
      bathroom:{
        quantity: 0,
        size: 0.5
      },
      garage:{
        quantity: 0,
        size: 0.5
      }
    })


    const [page, setPage] = useState(1);
    const [bedroomQuantity, setBedroomQuantity] = useState(0);
    const [livingroomQuantity, setLivingroomQuantity] = useState(0);
    const [kitchenQuantity, setKitchenQuantity] = useState(0);
    const [bathroomQuantity, setBathroomQuantity] = useState(0);
    const [garageQuantity, setGarageQuantity] = useState(0);
    const [bedroomSize, setBedroomSize] = useState(0.5);//0.5 small, 1 medium, 1.2 large
    const [livingroomSize, setLivingroomSize] = useState(0.5);
    const [kitchenSize, setKitchenSize] = useState(0.5);
    const [bathroomSize, setBathroomSize] = useState(0.5);
    const [garageSize, setGarageSize] = useState(0.5);

    

    let workerAmount = 0;
    let roomOptions = {};
    Object.assign(roomOptions, {bedroom: {quantity: bedroomQuantity, size: bedroomSize}});
    Object.assign(roomOptions, {livingroom: {quantity: livingroomQuantity, size: livingroomSize}});
    Object.assign(roomOptions, {kitchen: {quantity: kitchenQuantity, size: kitchenSize}});
    Object.assign(roomOptions, {bathroom: {quantity: bathroomQuantity, size: bathroomSize}});
    Object.assign(roomOptions, {garage: {quantity: garageQuantity, size: garageSize}});

    function setWorkerAmount(roomOptions, hours){
      console.log(roomOptions);
      let totalManHour = 0;
      
      totalManHour = totalManHour + (roomOptions.bedroom.quantity * roomOptions.bedroom.size);
      totalManHour = totalManHour + (roomOptions.livingroom.quantity * roomOptions.livingroom.size);
      totalManHour = totalManHour + (roomOptions.kitchen.quantity * roomOptions.kitchen.size);
      totalManHour = totalManHour + (roomOptions.bathroom.quantity * roomOptions.bathroom.size);
      totalManHour = totalManHour + (roomOptions.garage.quantity * roomOptions.garage.size);
      console.log(totalManHour);
      // console.log(hours);
      if(hours === 0 || hours === null){
        return 0;
      }
      return Math.ceil(totalManHour/hours);    
    }

    const handleChange = (e) => {
      console.log(e)
    }


    const bedroomSizeChangeHandler = (event) => {
      // roomOptions.set('bedroom', {quantity: bedroomQuantity, size: event.target.value});
      roomOptions.bedroom.size = event.target.value;
      setBedroomSize(event.target.value);
      workerAmount = setWorkerAmount(roomOptions,totalHours);
      setTotalWorker(workerAmount);
    };

    const bathroomSizeChangeHandler = (event) => {
      // roomOptions.set('bathroom', {quantity: bathroomQuantity, size: event.target.value});
      roomOptions.bathroom.size = event.target.value;
      setBathroomSize(event.target.value);
      workerAmount = setWorkerAmount(roomOptions,totalHours);
      setTotalWorker(workerAmount);
    };
    
    const kitchenSizeChangeHandler = (event) => {
      // roomOptions.set('kitchen', {quantity: kitchenQuantity, size: event.target.value});
      roomOptions.kitchen.size = event.target.value;
      setKitchenSize(event.target.value);
      workerAmount = setWorkerAmount(roomOptions,totalHours);
      setTotalWorker(workerAmount);
    };
    
    const livingroomSizeChangeHandler = (event) => {
      // roomOptions.set('livingroom', {quantity: livingroomQuantity, size: event.target.value});
      roomOptions.livingroom.size = event.target.value;
      setLivingroomSize(event.target.value);
      workerAmount = setWorkerAmount(roomOptions,totalHours);
      setTotalWorker(workerAmount);
    };
    
    const garageSizeChangeHandler = (event) => {
      // roomOptions.set('garage', {quantity: garageQuantity, size: event.target.value});
      roomOptions.garage.size = event.target.value;
      setGarageSize(event.target.value);
      workerAmount = setWorkerAmount(roomOptions,totalHours);
      setTotalWorker(workerAmount);
    };

    const bedroomQuantityChangeHandler = (event) => {
      // roomOptions.set('bedroom', {quantity: event.target.value, size: bedroomSize});
      roomOptions.bedroom.quantity = event.target.value;
      setBedroomQuantity(event.target.value);
      workerAmount = setWorkerAmount(roomOptions,totalHours);
      setTotalWorker(workerAmount);
    };
    
    const livingroomQuantityChangeHandler = (event) => {
      // roomOptions.set('livingroom', {quantity: event.target.value, size: livingroomSize});
      roomOptions.livingroom.quantity = event.target.value;
      setLivingroomQuantity(event.target.value);
      workerAmount = setWorkerAmount(roomOptions,totalHours);
      setTotalWorker(workerAmount);
      // roomOptions.set('resourcesNeeded', {workers: workerAmount, hours: event.target.value});
    };

    const kitchenQuantityChangeHandler = (event) => {
      // roomOptions.set('kitchen', {quantity: event.target.value, size: kitchenSize});
      roomOptions.kitchen.quantity = event.target.value;
      setKitchenQuantity(event.target.value);
      workerAmount = setWorkerAmount(roomOptions,totalHours);
      setTotalWorker(workerAmount);
    };

    const bathroomQuantityChangeHandler = (event) => {
      // roomOptions.set('bathroom', {quantity: event.target.value, size: bathroomSize});
      roomOptions.bathroom.quantity = event.target.value;
      setBathroomQuantity(event.target.value);
      workerAmount = setWorkerAmount(roomOptions,totalHours);
      setTotalWorker(workerAmount);
    };

    const garageQuantityChangeHandler = (event) => {
      // roomOptions.set('garage', {quantity: event.target.value, size: garageSize});
      roomOptions.garage.quantity = event.target.value;
      setGarageQuantity(event.target.value);
      workerAmount = setWorkerAmount(roomOptions,totalHours);
      setTotalWorker(workerAmount);
    };

    const totalHoursChangeHandler = (event) =>{
      if(null) {
        setTotalHours(0);

      }else{
        setTotalHours(event.target.value);
      }
      workerAmount = setWorkerAmount(roomOptions,event.target.value);
      setTotalWorker(workerAmount);
    }

    const renderPage = () => {
      if(page === 1){
        return <form>
        <Header></Header>
         
          <div>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="text-center">Please Choose And Add Your Room Details</h2>
          <div className="room-options-header">
            <h3>Room Type</h3>
            <h3>Quantity</h3>
            <h3>Size</h3>
          </div>
          <br></br>
          <h5>Bedroom</h5>
          <div className="room-options">
              <img src={bedroom} width="200" height="200" alt="Bedroom" />
              <input type="number" min="0" max="20" onChange={bedroomQuantityChangeHandler} ></input>
              <select id="rooms" onChange={bedroomSizeChangeHandler}>
              <option value="0.5" >Small</option>
              <option value="1">Medium</option>
              <option value="1.2">Large</option>
            </select>
          </div>
          <h5>Living Room</h5>
          <div className="room-options">
              <img src={livingRoom} width="200" height="200" alt="Dining and Living Room" />
              <input type="number" min="0" max="20" onChange={livingroomQuantityChangeHandler} ></input>
              <select id="rooms" onChange={livingroomSizeChangeHandler}>
              <option value="0.5" >Small</option>
              <option value="1">Medium</option>
              <option value="1.2">Large</option>
          </select>
          </div>
          <h5>Kitchen</h5>
          <div className="room-options">
              <img src={kitchen} width="200" height="200" alt="Kitchen" />
              <input type="number" min="0" max="20" onChange={kitchenQuantityChangeHandler} ></input>
              <select id="rooms" onChange={kitchenSizeChangeHandler}>
              <option value="0.5" >Small</option>
              <option value="1">Medium</option>
              <option value="1.2">Large</option>
          </select>
          </div>
          <h5>Bathroom</h5>
          <div className="room-options">
              <img src={bathroom} width="200" height="200" alt="Bathroom" />
              <input type="number" min="0" max="20" onChange={bathroomQuantityChangeHandler} ></input>
              <select id="rooms" onChange={bathroomSizeChangeHandler}>
              <option value="0.5" >Small</option>
              <option value="1">Medium</option>
              <option value="1.2">Large</option>
          </select>        
          </div>
          <h5>Garage</h5>
          <div className="room-options">
              <img src={garage} width="200" height="200" alt="Garage" />
              <input type="number" min="0" max="20" onChange={garageQuantityChangeHandler} ></input>
              <select id="rooms" onChange={garageSizeChangeHandler}>
              <option value="0.5" >Small</option>
              <option value="1">Medium</option>
              <option value="1.2">Large</option>
          </select>        
          </div>
          <div align="center">
          <br></br>
              <h5>How many hours?</h5>
              <TextField id="outlined-basic" label="" variant="outlined" onChange={totalHoursChangeHandler}/>
              <br></br>
              <br></br>

              <h5>Worker Amount</h5>
              <p>{totalWorker}</p>
          </div>
          <div className="text-center">
          <Button variant="outlined" color="primary" onClick={() => setPage(2)}>
                Continue
              </Button>
          <Link to="/"><Button variant="outlined" color="primary">
                Back
              </Button>
              </Link>
          </div>
        </div>
        </form>
      }else if(page === 2){
        return <ChooseTime totalHours={totalHours} totalWorker={totalWorker} setPage={setPage} dateChosen={dateChosen} timeChosen={timeChosen} setDateChosen={setDateChosen} setTimeChosen={setTimeChosen}/>
      }else if(page === 3){
        return <ChoosePayment payment={payment} setPayment={setPayment} setPage={setPage} totalHours={totalHours} totalWorker={totalWorker} dateChosen={dateChosen} timeChosen={timeChosen} roomOptions={roomOptions}/>
      }
    }

    return renderPage()
    
  }
  
  export default ChooseRoom;