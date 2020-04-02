import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Register} from "./Register";
import {Login} from './Login';
import {Profile} from './Profile';
import {EditProfile} from './EditProfile';
import {Activity} from './Activity';
import {Delete} from './DeleteAct';
import {Create} from './CreateAct';
import {Admin} from './Admin';

function App() {
  return (
    <Router >  
      <div>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route path='/editProfile' component={EditProfile} />
        <Route path='/activity' component={Activity} />
        <Route path='/deleteActivity' component={Delete} />
        <Route path='/addActivity' component={Create} />
        <Route path='/admin' component={Admin} />
      </div>
    </Router>
  );
};

export default App;