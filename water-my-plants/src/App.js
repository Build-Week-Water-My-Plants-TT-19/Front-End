import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
