import React from 'react';
import SignUp from './Components/SignUp'
import Plant from './Components/PlantForm'
import './App.css';
import PlantCard from './Components/PlantCard'
import PlantForm from './Components/PlantForm'

function App() {
  return (
    <div className="App">
      <SignUp/>
      <br></br>
      <Plant/>
      <br></br>
      <PlantCard/>
      <br></br>
      <PlantForm/>
    </div>
  );
}

export default App;
