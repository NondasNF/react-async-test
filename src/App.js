import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [click, setClick] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${click} times`
  }, [click])

  return (
    <>
    <p>You clicked {click} times</p>
    <button
    onClick={()=>{setClick(click+1)}}>
      Click here
    </button>
    </>
  );
}

export default App;
