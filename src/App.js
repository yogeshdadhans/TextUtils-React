import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1c1840';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing Mode.';
      // }, 2000);
      // setInterval(()=>{
      //   document.title = 'Switch to Light Mode.';
      // }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <Switch>
        {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>
          </Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
