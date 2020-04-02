import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Register} from "./Register";
import {Login} from './Login';
import {Profile} from './Profile';
import {EditProfile} from './EditProfile';

function App() {
  return (
    <Router >  
      <div>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route path='/editProfile' component={EditProfile} />
      </div>
    </Router>
  );
};

export default App;