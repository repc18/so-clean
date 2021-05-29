import { useState } from 'react';

export default function useAddress() {

  
  const getAddress = () => {
    const addressString = sessionStorage.getItem('address');
    const userAddress = JSON.parse(addressString);
    return userAddress?.address
  };

  const [address, setAddress] = useState(getAddress());

  const saveAddress = userAddress => {
    sessionStorage.setItem('address', JSON.stringify(userAddress));
    setAddress(userAddress);
  };

  return {
    setAddress: saveAddress,
    address
  }
}
