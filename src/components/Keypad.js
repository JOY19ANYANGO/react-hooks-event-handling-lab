// Code Keypad Component Here
import React from "react";
function Keypad (){
   const handleChange = () => {
        console.log('Entering password...');
      };
    

    return (
        <div>
             return <input type="password" onChange={handleChange} />;
        </div>
    )
}

export default Keypad;