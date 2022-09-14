import React from 'react';
import './App.css';
import './index.css';

function App() {

  const userWelcome = 'Welcome to React, Son'

  return (
    <div className="App">
      <Myheader name={userWelcome} />
    </div>
  );
}

export default App;

const Myheader = (props) => {
  return (
    <div class= "preview" >
      <h1>{props.name}</h1>
    </div>
  )
}
console.log(Myheader);