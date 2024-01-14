/* eslint-disable no-unused-vars */
import React,{ useState } from "react"

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('red')
  const changeBack = () =>{
    setBackgroundColor('blue')
  }
    return (
    <div style={{backgroundColor, minHeight: '100vh', transition: 'background-color 0.5s'}}>
      <h2>Hi, Kshitiz</h2>
    <button onClick={changeBack}>Night Mode</button>
    </div>
  );
};

export default App;
