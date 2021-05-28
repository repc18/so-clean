import { useState } from 'react';

export default function usePhone() {

  
  const getPhone = () => {
    const phoneString = sessionStorage.getItem('phone');
    const userPhone = JSON.parse(phoneString);
    return userPhone?.phone
  };

  const [phone, setPhone] = useState(getPhone());

  const savePhone = userPhone => {
    sessionStorage.setItem('phone', JSON.stringify(userPhone));
    setPhone(userPhone);
  };

  return {
    setPhone: savePhone,
    phone
  }
}
