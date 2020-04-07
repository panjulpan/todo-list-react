import React from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import "./style.css";

export class Register extends React.Component {
    constructor(){
        super()
        this.state = {
            full_name: '',
            no_tlp: '',
            email: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            full_name: this.state.full_name,
            no_tlp: this.state.no_tlp,
            email: this.state.email,
            password: this.state.password
        }
        return axios
        .post('/api/register', {
            full_name: newUser.full_name,
            no_tlp: newUser.no_tlp,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log('Registered')
        })
        .then(res =>{
            this.props.history.push(`/`)
        })
    }
    render() {
        return(
            <div className="container">
                <h1 align="center">Register</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" name="full_name" 
                        value={this.state.full_name} onChange={this.onChange} placeholder="Input Full Name"></input>
                    </div>
                    <div className="form-group">
                        <label>Mobile Phone</label>
                        <input type="text" className="form-control" name="no_tlp" 
                        value={this.state.no_tlp} onChange={this.onChange} placeholder="Input Mobile Phone"></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" 
                        value={this.state.email} onChange={this.onChange} placeholder="Input Email"></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChange} placeholder="Input Password"></input>
                    </div>
                    <div class="form-group">                                      
                    <div class="col-md-offset-3">
                        <button type="submit" className="btn btn-info"><i className="icon-hand-right"></i>Register</button>
                    </div>
                </div> 
                </form>
                <Link className="nav-link" to={"/"}>Sign In</Link>
            </div>
        )
    }
    
};

export default Register;