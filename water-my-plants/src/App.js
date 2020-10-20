import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//imported components
import SignIn from './Components/SignIn';
import ContactUs from './Components/ContactUs'
import SignUp from './Components/SignUp'


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
          <Route path='/login' render={() => <SignIn />} />
          <Route path='/profile' render={() => <ProfileDashboard />} />
          <Route path='/contact' render={() => <ContactUs/>}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
