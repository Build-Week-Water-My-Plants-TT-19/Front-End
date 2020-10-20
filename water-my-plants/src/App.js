import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'

//imported components
import SignIn from './Components/SignIn';
import ContactUs from './Components/ContactUs'
import SignUp from './Components/SignUp'
import './App.css';
import PlantCard from './Components/PlantCard'
import PlantForm from './Components/PlantForm'

function App() {
  return (
    <div className="App">
    
      <SignIn/>
      {/* <ContactUs/> */}
      <SignUp/>
      <br></br>
      <PlantForm/>
      <br></br>
      <PlantCard/>
      <br></br>
    </div>
  );
}

export default App;
