import React, {useState} from 'react';


function SizeOptions(){

    const [roomSize, setRoomSize] = useState("");

    const roomSizeChangeHandler = (event) => {
      setRoomSize(event.target.value);
    };

    return(
        <select id="rooms" onChange={roomSizeChangeHandler}>
            <option value="small" >Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
        </select>
    )
}

export default SizeOptions;