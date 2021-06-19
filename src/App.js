import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [curTime, setCurTime] = useState('');
  const [isEven, setIsEven] = useState(false);

  useEffect(() => {
    const instanceOFTime = setInterval(() => {
      setCurTime(getTime());
    }, 1000);

    return () => {
      clearInterval(instanceOFTime);
    };
  }, [curTime]);

  const getTime = () => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const evenOrOdd = isEvenNumber(hours) && isEvenNumber(minutes) && isEvenNumber(seconds);
    const combineTime = `${hours} : ${minutes} : ${seconds}`;
    setIsEven(evenOrOdd);
    return combineTime;
  }
  const isEvenNumber = num => num % 2 === 0 ? true : false;

  return (
    <div className="App">
      <div className="app-content" style={{ backgroundColor: isEven ? "black" : "white" }}>
        <h1 style={{ color: isEven ? "white" : "black" }}>{curTime}</h1>
      </div>
    </div>
  );
}

export default App;
