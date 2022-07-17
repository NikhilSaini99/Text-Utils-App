//import logo from './logo.svg';
import './App.css'; //import our CSS completely..

import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
//import About from './Components/About';
import React, { useState } from 'react';
// import Loginlogout from './Components/Loginlogout';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", 'success');
    }
  }








  return (
    <>
      {/* <Router> */}
        <Navbar title="Text-utils" About='About us' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        {/* <Switch>
          
          
            <Route exact path="/about">
              <About />
            </Route> */}
          {/* <Route exact path="/"> */}
              <Textform showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
            {/* </Route> */}
          
        {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
