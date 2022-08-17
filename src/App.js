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
  const [btnClass, setBtnClass] = useState('success');
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
  const removeBodyClasses= ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    if (cls === 'dark') {
        setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success")
    }
    else {
        setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    }
    if (cls === 'primary') {
      setBtnClass('warning');
    } else {
      setBtnClass('primary');
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
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} btnClass={ btnClass} />} />
            <Route exact path="/about" element={<About mode={ mode}  />} />
          </Routes>
        </div>
      </Router>
 
    </>
  );
}

export default App;
