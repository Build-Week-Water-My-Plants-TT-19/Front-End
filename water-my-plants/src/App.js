import React from 'react';
<<<<<<< HEAD
import './App.css';
import {Route, Link} from 'react-router-dom'

//imported components
import SignIn from './Components/SignIn';
import ContactUs from './Components/ContactUs'
import SignUp from './Components/SignUp'

=======
import SignUp from './Components/SignUp'
import Plant from './Components/PlantForm'
import './App.css';
import PlantCard from './Components/PlantCard'
import PlantForm from './Components/PlantForm'
>>>>>>> d29322657fb1a52878a7bb26c2cd6f3e2963c1ce

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
    
      <SignIn/>
      {/* <ContactUs/> */}
      
=======
      <SignUp/>
      <br></br>
      <Plant/>
      <br></br>
      <PlantCard/>
      <br></br>
      <PlantForm/>
>>>>>>> d29322657fb1a52878a7bb26c2cd6f3e2963c1ce
    </div>
  );
}

export default App;
