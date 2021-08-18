import React, { useState } from 'react';

const App = () => {
    const[num, setNum] = useState();


    
    var crt = Math.cbrt(num);
    var srt = Math.sqrt(num);
    

    const value = (event) => {
        setNum(event.target.value);
    }

return(
    <>
    <div>
     <h1>SQUARE ROOT -- {num} is <span> {srt} </span></h1>
     <h1>CUBE ROOT -- {num} is <span> {crt} </span></h1>
    <input type="text" id="text" placeholder="Enter a number" value={num} onChange={value} style={{marginLeft: '10px', marginTop: '5px'}}/><br/>
    </div>
    </>
)

}

export default App;