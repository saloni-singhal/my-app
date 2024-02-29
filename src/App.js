import './App.css';
import Alert from './components/Alert';
/*import About from './components/About';*/
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
/*import About from './components/About';*/
import React, {useState} from 'react';
/*import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";*/


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleRed =() =>{
    if (mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="red";
      showAlert("Red mode enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "";
      showAlert("Light mode has been enabled", "danger");
    }
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "grey"
      showAlert("Dark mode has been enabled", "success");
      /*document.body.style.backgroundColor = "#0c2448"*/
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils now";
      }, 1000);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "";
      showAlert("Light mode has been enabled", "danger");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
  {/*<BrowserRouter>
  <Navbar title = "TestUtils2" about = "Some content" mode={mode} toggleMode={toggleMode} toggleRed={toggleRed}/>
  <Alert alert={alert}/>
  <div className="container my-3">
    <Routes>
      <Route path="/about" element={<About/>}>
      </Route>
      <Route path="/" element={<TextForm heading = "Enter the text to analyse" showAlert = {showAlert} toggleRed={toggleRed} mode={mode}/>}>
      </Route>
    </Routes>
  </div>
  </BrowserRouter>*/}
  <Navbar title = "TestUtils2" about = "Some content" mode={mode} toggleMode={toggleMode} toggleRed={toggleRed}/>
  <Alert alert={alert}/>
  <div className="container my-3">
    <TextForm heading = "Enter the text to analyse" showAlert = {showAlert} toggleRed={toggleRed} mode={mode}/>
  </div>
  </>);
}

export default App;
