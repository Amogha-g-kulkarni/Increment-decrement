import './App.css';
import { Route } from 'react-router-dom';
import AllMeetUp from './pages/AllMeetUp';
import Favorites from './pages/Favorites';
import NewMeetUp from './pages/NewMeetUp';
import { useState } from 'react';

function App() {
  let [num,setnum]=useState(0)
  return (
    <div >
      <button onClick={()=>{setnum(num+5)}}>+</button>
      <h1>{num}</h1>
      <button  onClick={()=>{setnum(num-1)}}>-</button>
    </div>
  );
}

export default App;
