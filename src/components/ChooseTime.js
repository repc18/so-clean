import React,{useState, useEffect, useCallback} from 'react';
import { Button } from '@material-ui/core';
import './ChooseTime.css';
import Header from "./Layout-Booking/Header";
import BookingFooter from "./Layout-Booking/BookingFooter";
import Footer from '../components/Layout/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  
  const rows = [
];

function ChooseTime(props){
  const history = useHistory()

  const routeChange = () =>{ 
    let path = `/`; 
    history.push(path);
  }

  function confirm() {
    sessionStorage.removeItem("roomData")
    sessionStorage.removeItem("workerIds")
    routeChange();
  }

    const { totalWorker, totalHours, setPage, dateChosen, timeChosen, setTimeChosen, setDateChosen } = props
    const [availableData, setAvailableData] = useState([]);

    
    
      const clickHandler = (dateChosen, timeChosen) => {
        setDateChosen(dateChosen);
        setTimeChosen(timeChosen);
        setPage(3)
      }

    function createData(availableDate, availableTime) {
      return { availableDate, availableTime};
    }


    //getting data from api
    // let transformedData = [];
    
    // const [workerSchedule, setWorkerSchedule] = useState([]);

    const fetchWorkerSchedule = useCallback(async() => {

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          "areaAddress": JSON.parse(sessionStorage.getItem('area')), 
          "workerAmount": totalWorker
        }) //meantime static data(areaAddress, workerAmount)
    };

      const response = await fetch("https://soclean-backend.herokuapp.com/api/get_schedule",requestOptions)
      const data = await response.json(); //convert from json to js
      console.log(data.schedules);

      for(const [key, value] of Object.entries(data.schedules)){
        let temp = [];
        let max = value.length - totalHours;
        if(max > 0){
          for(let i = 0; i < max; i++){
            temp.push(value[i]);
          }
          rows.push(createData(key,temp));
        }

        // console.log(value[0])
      }
      setAvailableData(rows);
    }, []);

    useEffect(() => {
      fetchWorkerSchedule();
    }, [fetchWorkerSchedule]);

    // for (const [index, value] of availableData.availableTime.entries()) {
    //   console.log(index + " " + value);
    // }

    const classes = useStyles();
    let message;
    if (availableData.length === 0) {
      message = <h5 className="text-center">No available time, please press the back button</h5>;
    } else {
      message = <h5 className="text-center">Working duration: {totalHours} hour(s)</h5>;
    }

    return(
        <div>
        {/* <Header></Header> */}
        <div>
        <br></br>
        <br></br>
        <br></br>
            <h1 className="text-center">Choose Time</h1>
            <h3 className="text-center">Please pick a starting time</h3>
            <br></br>
            {message}
            <br></br>
            <div className="inline-div">
                <h4>Date</h4>
                <h4>Time Available</h4>                 
            </div>
            <div className="inline-div">
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {availableData.map((row) => (
            <TableRow key={row.availableDate}>
              <TableCell align="center">{row.availableDate}
              </TableCell>
              <TableCell align= "center">
             {row.availableTime.map((hour) => (
            <MenuItem key={hour} value={hour} onClick = {() => clickHandler(row.availableDate, hour)}>{hour}:00</MenuItem>
          ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
            

    <br></br>
    <br></br>

            <div className="inline-div">
            <Link onClick={confirm}><Button color="primary">Back</Button></Link>
            </div>
        </div>
        {/* <BookingFooter></BookingFooter> */}
        {/* <Footer></Footer> */}
        </div>
    );
}

export default ChooseTime;