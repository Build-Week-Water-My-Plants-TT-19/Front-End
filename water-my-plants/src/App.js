import React from 'react';
import SignUp from './Components/SignUp'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Components/Home'
import Navbar from './Components/Navbar'
import ProfileDashboard from './Components/ProfileDashboard'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/sign-up' render={() => <SignUp />} />
          <Route path='/profile' render={() => <ProfileDashboard />} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
