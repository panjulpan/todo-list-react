import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./style.css";

export class Login extends React.Component {
    render() {
        return(
          <Router >
            <div className="container">
                <h1 align="center">Login</h1>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Input Email"></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Input Password"></input>
                    </div>
                    <div class="form-group">                                      
                    <div class="col-md-offset-3">
                        <button type="submit" class="btn btn-info"><i class="icon-hand-right"></i>Login</button>
                    </div>
                </div> 
                </form>
                <Link to={"/register"}>Sign Up</Link>
            </div>
          </Router>
        )
    }
    
};

export default Login;