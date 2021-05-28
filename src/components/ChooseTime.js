import React,{useState, useEffect, useCallback} from 'react';
import { Button } from '@material-ui/core';
import './ChooseTime.css';
import Header from "./header/Header";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  
  const rows = [
];

function ChooseTime(props){
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
          "areaAddress": "Daan", 
          "workerAmount": totalWorker
        }) //meantime static data(areaAddress, workerAmount)
    };

      const response = await fetch("https://soclean-backend.herokuapp.com/api/get_schedule",requestOptions)
      const data = await response.json(); //convert from json to js
      // console.log(data.schedules);

      for(const [key, value] of Object.entries(data.schedules)){
        rows.push(createData(key,value));
        // console.log(value[0])
      }
      setAvailableData(rows);
      console.log(rows);

    }, []);

    useEffect(() => {
      fetchWorkerSchedule();
    }, [fetchWorkerSchedule]);

    // for (const [index, value] of availableData.availableTime.entries()) {
    //   console.log(index + " " + value);
    // }

    const classes = useStyles();

    return(
        <div>
        <Header></Header>
        <div>
        <br></br>
        <br></br>
        <br></br>
            <h1 className="text-center">Choose Time</h1>
            <h3 className="text-center">Please pick a starting time</h3>
            <h5 className="text-center">Working duration: {totalHours} hour(s)</h5>
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
            <Button color="primary">Back</Button>
            </div>
        </div>
        </div>
    );
}

export default ChooseTime;