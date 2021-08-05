import React, { useState } from "react";

function App(){
    let [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    function checkTime(){
        setCurrentTime(new Date().toLocaleTimeString());
    }

    setInterval(checkTime, 1000);

    return(
        <div className="container">
                <h1>{currentTime}</h1>
                <button onClick={checkTime}>Check time</button>
        </div>
    );
}

export default App;