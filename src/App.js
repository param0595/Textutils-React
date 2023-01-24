
// //import logo from './logo.svg';
// import './App.css';                  // ---------> importing App.css file
// let name = "PARAM";
// function App() {
//   return (
//     <>                               {/*---------> when you are using more than one tag then in "return()" . enclose all the tags in between <>_______</>*/}
//     <nav>
//       <li>Home</li>
//       <li>About</li>
//       <li>Contact</li>
//     </nav>
//     <img src="" alt="" />
//     <div classNameName="container">
//       <h1>Hello {name} </h1>            {/* -------> contentwritten in between "{_____}" act like javascript and are functional*/}
//       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur similique quos dolor repellendus odit, et qui quibusdam eveniet. Esse nobis consequuntur minima, accusantium at quidem voluptatum dolor nihil obcaecati? Aut repellendus blanditiis nulla eum?</p>
//     </div>
//     </>
//   );
// }

// we are importing App.css
import './App.css';
// we are importing "About" which is present in folder "components" 
import About from './components/About';
// we are importing "Navbar" which is present in folder "components" 
import Navbar from "./components/Navbar";
// we are importing "TextForm" which is present in folder "components" 
import TextForm from "./components/TextForm";
// we are importing "Alert" which is present in folder "components" 
import Alert from './components/Alert';
// importing useState from 'react'
import React,{useState} from 'react'

// we brought this code from "reactrouter.com"
// by using "react router" we can change the necessary content of page without completely loading the page  
// importing "BrowserRouter","Switch","Route","Link" from "react - router -dom" package
import {BrowserRouter as Router, Switch ,Route } from "react-router-dom";
// "react-router-dom"----------> this is a package , which we need to install externally using command
// " npm install react-router-dom"

// JSX :  we use both javascript and HTML together
// there is a slight difference between HTML and JSX 
// using bootstrap navbar
function App() { 

  // we get alert after some action is performed, therefore initially "alert" is set to "null"  
  const [alert,setAlert] = useState(null);
  // showAlert function is called when we want to display "alert".
  // here "message" mean what "text" to be displayed in "alert"
  //  here "type" represent either "success(green)","danger(red)","warning(yellow)","alert(light blue)","primary(sky blue)","secondary(grey)","light","dark" alert
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    // "setTimeout" function will display "alert" message for mentioned time (900  millisec)
    setTimeout(() => {
      setAlert(null);       //after (900 milli sec) alert wil be updated to null
    }, 1500);
  }

  const [mode,setmode] = useState('light');  // whether to enable dark mode or not                                
  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      // document.body.style.background = 'grey';
      document.body.style.background = '#0d2740';
      showAlert("Dark mode has been enabled","success")    //when toggleMode is executed it display respective alert according to mode
      document.title = "Textutils - Dark Mode"
      // this is how we change title of our webpage Dynamically, when "dark mode" is enabled title become "Textutils - Dark Mode" 
      
      // we can automatically change title of our web page for every paticular interval of time
      // this is give bad user experiance , USED TO DRAG ATTENTION OF USER
      /*
      setInterval(() => {
        document.title = "Textutils is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install Textutils Now";
      }, 900);
      */
    }

    else{
      setmode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled","success")
      document.title = "Textutils - Light Mode"
      // this is how we change title of our webpage Dynamically, when "light mode" is enabled title become "Textutils - Light Mode" 
    }
  }

  return (
    <>
      <Router>
        {/* we created a separate file "Navbar" to store "JSX" used for building Navbar   */}
        {/* <Navbar title={3}  AboutText ="About us"/> */}
        {/* <Navbar title="TextUtils"/> */}
        <Navbar title="TextUtils" AboutText="About us" mode = {mode} toggleMode = {toggleMode}/>
        {/* here "title" and "AboutText" are "props" which are sending to "Navbar.js" floder */}

        <Alert alert={alert}/>

        {/* by adding " TextForm " in class called "container" we will center our textField */}
        <div className="container my-3">          {/* my-3   is a class which give spacing in Y-axis */}
          <Switch>
            {/* it's always a good practice to to write "exact path" insted of only "path". because react does partial matchimg which may give wrong output  */}
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm heading = "Enter The Text To Analyze Below" mode = {mode} showAlert={showAlert}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
