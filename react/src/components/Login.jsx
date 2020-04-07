import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./style.css"


export class Login extends React.Component {
    constructor() {
        super()
        this.state = {
          email: '',
          password: '',
          errors: {}
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
        onChange(e) {
            this.setState({ [e.target.name]: e.target.value })
        }
        onSubmit(e) {
            e.preventDefault()
        
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        return axios
        .post('/api/login', {
            email: user.email,
            password: user.password
        })
        .then(res =>{
            this.props.history.push(`/activity`)
        })
    }
    render() {
        return(
            <div className="container">
                <h1 align="center">Login</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" 
                        value={this.state.email} onChange={this.onChange} placeholder="Input Email"></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChange} placeholder="Input Password"></input>
                    </div>
                    <div className="form-group">                                      
                    <div className="col-md-offset-3">
                        <button type="submit" className="btn btn-info"><i className="icon-hand-right"></i>Login</button>
                    </div>
                </div> 
                </form>
                <Link to={"/register"}>Sign Up</Link>
            </div>
        )
    }
    
};

export default Login;