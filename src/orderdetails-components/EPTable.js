import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(roomname, quantity, size) {
  return { roomname, quantity, size};
}

const rows = [
  // {bedroom: {quantity: "2", size: 0.5}, livingroom: {quantity: 0, size: 0.5},…}
  
  createData('Bedroom', 3, "Medium"),
  createData('Living Room', 1, "Medium"),
  createData('Toilet', 2, "Small"),
];

export default function DenseTable(props) {
  const {roomOptions} = props

  // const addData = (roomOptions) => {
  //   for(const [key, value] of Object.entries(roomOptions)){
  //     if(value(quantity)!==0){
  //       rows.push(createData(key,value(quantity), value(size)));
  //     }
      // console.log(value[0])
  //   }
  // };

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell font="large">Room Type</TableCell>
            <TableCell font="large">Quantity</TableCell>
            <TableCell font="large">Size</TableCell>
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.roomname}>
              <TableCell component="th" scope="row">
                {row.roomname}
              </TableCell>
              <TableCell align="inherit">{row.quantity}</TableCell>
              <TableCell align="inherit">{row.size}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}