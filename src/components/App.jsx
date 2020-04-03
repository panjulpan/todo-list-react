import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Register} from "./Register";
import {Login} from './Login';
import {Profile} from './Profile';
import {EditProfile} from './EditProfile';
import {Activity} from './Activity';
import {Delete} from './DeleteAct';
import {Create} from './CreateAct';
import {Edit} from './EditAct';
import {Admin} from './Admin';
import {CreateAdm} from './CreateAdm';
import {DeleteAdm} from './DeleteAdm';

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
        <Route path='/editActivity' component={Edit} />
        <Route path='/admin' component={Admin} />
        <Route path='/addAdmin' component={CreateAdm} />
        <Route path='/deleteAdmin' component={DeleteAdm} />
      </div>
    </Router>
  );
};

export default App;