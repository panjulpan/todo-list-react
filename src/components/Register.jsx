import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./style.css";

export class Register extends React.Component {
    render() {
        return(
            <div className="container">
                <h1 align="center">Register</h1>
                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" placeholder="Input Full Name"></input>
                    </div>
                    <div className="form-group">
                        <label>Mobile Phone</label>
                        <input type="text" className="form-control" placeholder="Input Mobile Phone"></input>
                    </div>
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
                        <button type="submit" class="btn btn-info"><i class="icon-hand-right"></i>Register</button>
                    </div>
                </div> 
                </form>
                <Link className="nav-link" to={"/"}>Sign In</Link>
            </div>
        )
    }
    
};

export default Register;