import './App.css';
import React, { useState } from 'react';

function App2() {
  const [value, setValue] = useState("")

  return (
    <>
    <p>Type something:</p>
    <input
    placeholder='Type here'
    value={value}
    onChange={(e)=>{setValue(e.target.value)}}
    />
    <p>{value}</p>
    </>
  );
}

export default App2;
