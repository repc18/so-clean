import React from 'react';
import classes from './Home.module.css';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AboutUs = () => {
  return (
    <div> 
    <section className={classes.aboutus}>
      <h1>About Us</h1>
      Established in 2020, So-Clean was born out of the idea by the company founder and colleagues that originates from Indonesia. With having house helpers being a popular choice for busy parents, they came to realize that many of the house helpers have poor cleaning performance and were expensive. Once in Indonesia, there was a solution to solve this problem, which is by providing an online platform where the clients are able to make an appointment with helpers to order on-demand services. This platform had customers keep coming back and was given many good feedbacks.
    
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><h2>Our Founders</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        National Taiwan University of Science and Technology Students <br></br>
          B10709012 許國亮、B10709010林恩雅、B10709016林文正、B10715013張清秀、B10709011陳凱恩<br></br>
          With the help of<br></br>
          Prof. Nai-Wei Lo 羅乃維
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>

    

    </div>

    
  );
};

export default AboutUs;