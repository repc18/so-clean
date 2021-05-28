import { useState } from 'react';

export default function useId() {

  
  const getId = () => {
    const idString = sessionStorage.getItem('customerId');
    const userId = JSON.parse(idString);
    return userId?.customerId
  };

  const [customerId, setId] = useState(getId());

  const saveId = userId => {
    sessionStorage.setItem('customerId', JSON.stringify(userId));
    setId(userId);
  };

  return {
    setId: saveId,
    customerId
  }
}
