import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//imported components
import SignIn from './Components/SignIn';
import ContactUs from './Components/ContactUs'
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProfileDashboard from './Components/ProfileDashboard'
import PlantForm from './Components/PlantForm'
import ContactUsEmailSent from './Components/ContactUsEmailSent';
import Plant from './Components/Plant'
import PrivateRoute from './Components/private/PrivateRoute'

//App Styles



function App() {
  return (

    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/sign-up' render={() => <SignUp />} />
          <Route path='/login' render={() => <SignIn />} />
          <PrivateRoute path='/profile' component={ProfileDashboard} />
          <PrivateRoute path='/new-plant' component={PlantForm} />
          <PrivateRoute path='/update-plant/:id' component={PlantForm} />
          <Route path='/contact-us' render={() => <ContactUs />} />
          <Route path='/contact-confirmation' render={() => <ContactUsEmailSent />}/>
          <Route path='/plants/plant/:id' render={() => <Plant/>}/>
        </Switch>
     <Footer />
     
    </div>
  );
}

export default App;
