import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Welcomepage from './Components/Welcomepage';
import Home  from './Components/Home';
import Profile from './Components/Profile';
import Settings from './Components/Settings';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Depression from './Components/Resources/Depression';
import OCD from './Components/Resources/OCD';
import PTSD from './Components/Resources/PTSD';
import Anxiety from './Components/Resources/Anxiety';
import PersonalityDisorder from './Components/Resources/PersonalityDisorder';
import ASMR from './Components/Resources/ASMR';


import './App.css';
import ForgotPassword from './Components/forgotpassword';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Welcomepage} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/forgotpassword" component={ForgotPassword}/>
          <Route path="/depression" component={Depression}/>
          <Route path="/OCD" component={OCD}/>
          <Route path="/PTSD" component={PTSD}/>
          <Route path="/Anxiety" component={Anxiety}/>
          <Route path="/PersonalityDisorder" component={PersonalityDisorder}/>
          <Route path="/ASMR" component={ASMR}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
