import { useState } from 'react';

export default function useArea() {

  
  const getArea = () => {
    const areaString = sessionStorage.getItem('area');
    const userArea = JSON.parse(areaString);
    return userArea?.area
  };

  const [area, setArea] = useState(getArea());

  const saveArea = userArea => {
    sessionStorage.setItem('area', JSON.stringify(userArea));
    setArea(userArea);
  };

  return {
    setArea: saveArea,
    area
  }
}
