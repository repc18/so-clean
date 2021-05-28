import { useState } from 'react';

export default function useEmail() {

  
  const getEmail = () => {
    const emailString = sessionStorage.getItem('email');
    const userEmail = JSON.parse(emailString);
    return userEmail?.email
  };

  const [email, setEmail] = useState(getEmail());

  const saveEmail = userEmail => {
    sessionStorage.setItem('email', JSON.stringify(userEmail));
    setEmail(userEmail);
  };

  return {
    setEmail : saveEmail,
    email
  }
}
