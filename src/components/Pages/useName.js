import { useState } from 'react';

export default function useName() {

  
  const getName = () => {
    const nameString = sessionStorage.getItem('name');
    const userName = JSON.parse(nameString);
    return userName?.name
  };

  const [name, setName] = useState(getName());

  const saveName = userName => {
    sessionStorage.setItem('name', JSON.stringify(userName));
    setName(userName);
  };

  return {
    setName: saveName,
    name
  }
}
