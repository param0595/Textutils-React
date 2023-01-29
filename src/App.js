import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';
import React,{useState} from 'react'

import {BrowserRouter as Router, Switch ,Route } from "react-router-dom";
function App() { 
  const [alert,setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    
    setTimeout(() => {
      setAlert(null);       
    }, 1500);
  }

  const [mode,setmode] = useState('light');                              
  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.background = '#0d2740';
      showAlert("Dark mode has been enabled","success")    
      document.title = "Textutils - Dark Mode"
    }

    else{
      setmode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled","success")
      document.title = "Textutils - Light Mode"
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" AboutText="About us" mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>

        
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode = {mode} />
            </Route>
            <Route exact path="/">
              <TextForm heading = "Try TextUtils - word counter , character counter , remove extra spaces" mode = {mode} showAlert={showAlert}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
