import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Welcomepage from './Components/Welcomepage';
import Home  from './Components/Home';
import Profile from './Components/Profile';
import Settings from './Components/Settings';
import ChatApp from './Components/Chat/ChatApp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Welcomepage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/settings" component={Settings}/>
          <Route exact path="/chatapp" component={ChatApp}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
