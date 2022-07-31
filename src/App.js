import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Textfield from './components/Textfield';
import { Routes, Route, Link } from "react-router-dom";
import Showdata from './components/Showdata';
function App() {
  const [mode, setmode] = useState("light")
  
  const [data, setdata] = useState([])

  const addfun = (inp)=>{
    
    
    setdata(inp)
  }
  const chng = () =>{
    if(mode==="light"){
      setmode("dark")
    }else{
      setmode("light")
    }
  }
  return (
    <>

      <Navbar mode={mode} fun={chng}/>
      <Textfield addfun={addfun}/>
      <Showdata item={data}/>
    </>

  );
}

export default App;
