import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  


function App() {
const [mode, setMode] = useState('light'); // Whether the Dark Mode Is Enabled or Not
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
const toggleMode=()=>{
    if (mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#000000';
        showAlert("Dark Mode has been Enabled", "success");
        document.title = 'Checklify - Dark Mode';
        // setInterval(() => {
        //     document.title = 'Checklify a text editor';

        // }, 2000);
        // setInterval(() => {
        //     document.title = 'Install Checklify Now';

        // }, 1500);
     }  
     else{
         setMode('light');
         document.body.style.backgroundColor = 'white';
         showAlert("Light Mode has been Enabled", "success");
        document.title = 'Checklify - Light Mode'; 

     }
}   
return( 
    <>
    {/*<Navbar title="Checklify" aboutText="About Checklify"/>*/}
    {/* <Navbar/> */}
    {/* <Router> */}

    <Navbar title="Checklify" mode={mode}  toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch> */}
        {/* /users --> Component 1
           /users/home --> Component 2 */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert}heading="Enter Your Desired Text To Analyze" mode={mode}/>
          {/* </Route> */}
    {/* </Switch> */}
    </div>
    {/* </Router> */} 

    </>

)};
export default App;
