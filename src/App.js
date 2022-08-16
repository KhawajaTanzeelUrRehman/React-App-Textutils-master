import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    },1500)
}
const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success")
    }
    else {
        setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    }
};
  return (
    <>   
      {/* <Navbar title='Textutils' aboutText= 'About Textutils' /> */}
      {/* <Navbar/> */}
      
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>        
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode}/>} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
 
    </>
  );
}

export default App;
