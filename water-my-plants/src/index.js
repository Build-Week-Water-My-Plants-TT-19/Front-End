import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// import SignUp from './Components/SignUp'
// import Plant from './Components/PlantForm'
// import './App.css';
// import PlantCard from './Components/PlantCard'
// import PlantForm from './Components/PlantForm'