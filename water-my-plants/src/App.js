import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'

//imported components
import SignIn from './Components/SignIn';
import ContactUs from './Components/ContactUs'
import SignUp from './Components/SignUp'



function App() {
  return (
    <div className="App">
    
      <SignIn/>
      {/* <ContactUs/> */}
      
    </div>
  );
}

export default App;
