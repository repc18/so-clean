import React from 'react';
import classes from './Home.module.css';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const FAQ = () => {
  return (

<div className={classes.FAQ}>
    <h1>FAQ</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><h2>How much will it cost?</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The price is based on the number of rooms chosen. Select the number and the price is shown instantly on the website.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h2>Do cleaners bring their own cleaning supplies, products and equipment?</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The cleaners bring their own cleaning supplies but please let us know if you have any special requests and we would be happy to pass the information to them. Alternatively, your cleaners can use green products if you would prefer. Please let us know if you would prefer green cleaning services so your cleaners can plan for this.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h2>Can we use our own cleaning supplies?</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you have personally preferred cleaning supplies, you can give them to them when the specialist arrives and teach them how you are used to it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h2>Do I have to stay at home while cleaning?</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You don't need to stay at home all the time. You can instruct the cleaning team how to enter your home when you book the cleaning, for example, get the key from the building manager on the first floor, or ask the building manager to open the door.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h2>If the worker arrived late on the cleaning day, how is the time calculated?</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          So-Clean must abide by the concept of punctuality. If the service staff is late, please start the cleaning time according to the service staff’s arrival. You can also report this question to us at any time. We must review the attendance status of the service staff; if you arrive late due to important matters, the time will start according to the arrival time of the service staff (including waiting time).
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>


//     <section className={classes.starting}>
//       <h1>FAQ</h1>
//       <h2>HOW MUCH WILL IT COST?</h2>
// The price is based on the number of rooms chosen. Select the number and the price is shown instantly on the website.

// <h2>CLEANERS BRING THEIR OWN CLEANING SUPPLIES, PRODUCTS AND EQUIPMENT?</h2>
// The cleaners bring their own cleaning supplies but please let us know if you have any special requests and we would be happy to pass the information to them. Alternatively, your cleaners can use green products if you would prefer. Please let us know if you would prefer green cleaning services so your cleaners can plan for this.

// <h2>CAN WE USE OUR OWN CLEANING SUPPLIES?</h2>
// If you have personally preferred cleaning supplies, you can give them to them when the specialist arrives and teach them how you are used to it.

// <h2>DO I HAVE TO STAY AT HOME WHILE CLEANING?</h2>
// You don't need to stay at home all the time. You can instruct the cleaning team how to enter your home when you book the cleaning, for example, get the key from the building manager on the first floor, or ask the building manager to open the door.

// <h2>IF I ARRIVE LATE ON THE CLEANING DAY, HOW IS THE TIME CALCULATED?</h2>
// So-Clean must abide by the concept of punctuality. If the service staff is late, please start the cleaning time according to the service staff’s arrival. You can also report this question to us at any time. We must review the attendance status of the service staff; if you arrive late due to important matters, the time will start according to the arrival time of the service staff (including waiting time).

//     </section>
  );
};

export default FAQ;