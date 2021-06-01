import React from 'react';
import classes from './Home.module.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

const ContactUs = () => {
  return (
    <section className={classes.aboutus}>
      <h1>Our Contact Details</h1>
      <h2></h2>
      <h3>Contact Us:</h3>
      
      <br></br>

<HomeWorkIcon color="primary" fontSize="large"></HomeWorkIcon>106335 臺北市大安區基隆路 4 段 43 號
<br></br>No.43, Keelung Rd., Sec.4, Da'an Dist., Taipei City 106335, Taiwan (R.O.C.)
<br></br>
<EmailIcon color="primary" fontSize="large"></EmailIcon> soclean@gmail.com
<br></br>
<PhoneInTalkIcon color="primary" fontSize="large"></PhoneInTalkIcon> Phone number: 886-2-23979888 
<br></br>
<PhoneAndroidIcon color="primary" fontSize="large"></PhoneAndroidIcon> LINE: @w79888
    </section>
  );
};

export default ContactUs;