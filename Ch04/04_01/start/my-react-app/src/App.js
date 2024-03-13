import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(()=>{
    console.log(`It's ${emotion} right now`)
  }, [emotion, secondary]);
  useEffect(()=>{
    console.log(`It's ${secondary} around here!`)
  }, [secondary]);

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={()=>setEmotion("sad")}>Sad</button>
      <button onClick={()=>setEmotion("excited")}>Excited</button>     
      <h1>Current secondary is {secondary}</h1>
      <button onClick={()=>setSecondary("grateful")}>Grateful</button>
    </div>
  );
}

export default App;
