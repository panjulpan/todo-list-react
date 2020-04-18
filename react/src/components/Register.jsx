import React from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import {isEmail} from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import "./style.css";

const required = value => {
    if(!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const full_name = value => {
    if(value.length < 3) {
        return (
            <div className="alert alert-danger" role="alert">
                The Full Name must be more than 3 characters!
            </div>
        );
    }
};

const no_tlp = value => {
    if(value.length > 12) {
        return (
            <div className="alert alert-danger" role="alert">
                The Mobile Phone must be 12 characters!
            </div>
        );
    }
}

const email = value => {
    if(!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not valid email!
            </div>
        );
    }
};

const password = value => {
    if(value.length < 8) {
        return (
            <div className="alert alert-danger" roel="alert">
                The Password must be 8 characters!
            </div>
        )
    }
}

export class Register extends React.Component {
    constructor(){
        super()
        this.state = {
            full_name: '',
            no_tlp: '',
            email: '',
            password: '',
            successfull: false,
            message: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();

        this.setState({
            message: "",
            successfull: false
        });

        this.form.validateAll();

        if(this.checkBtn.context._errors.length === 0) {
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
            this.setState({
                message: response.data.message,
                successfull: true
            })
            console.log(response.data.message)
            if(response.data.message === "Email telah terdaftar!"){
                this.setState({
                    successfull: false
                })
                this.props.history.push(`/register`)
            } else {

                this.setState({
                    successfull: true
                })
                this.props.history.push(`/`)
            }
        },
        error => {
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            this.setState({
                successfull: false,
                message: resMessage
            })
            console.log(resMessage)
            this.props.history.push(`/register`)
        }
        )
        }
    }
    render() {
        return(
            <div className="container">
                <h1 align="center">Register</h1>
                <div>
                {this.state.message && (
                    <div className="form-group">
                        <div className={
                            this.state.successfull ? "alert alert-success" : "alert alert-danger"
                        } role="alert">
                            {this.state.message}
                        </div>
                    </div>
                )}
                </div>
                <Form 
                    onSubmit={this.onSubmit}
                    ref = {c => {
                        this.form = c;
                    }}
                >
                    <div className="form-group">
                        <label htmlFor="full_name">Full Name</label>
                        <Input
                            type="text" 
                            className="form-control" 
                            name="full_name" 
                            value={this.state.full_name} 
                            onChange={this.onChange} 
                            validations={[required, full_name]}
                            placeholder="Input Full Name">
                        </Input>
                    </div>
                
                    <div className="form-group">
                    <label>Mobile Phone</label>
                    <Input 
                        type="number" 
                        className="form-control" 
                        name="no_tlp" 
                        value={this.state.no_tlp} 
                        onChange={this.onChange} 
                        validations={[required, no_tlp]}
                        placeholder="Input Mobile Phone">
                    </Input>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <Input 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.onChange}
                        validations={[required, email]} 
                        placeholder="Input Email">
                    </Input>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <Input 
                        type="password" 
                        className="form-control" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.onChange} 
                        validations={[required, password]}
                        placeholder="Input Password">
                    </Input>
                </div>

                <div class="form-group">                                      
                    <div class="col-md-offset-3">
                        <button type="submit" className="btn btn-info"><i className="icon-hand-right"></i>Register</button>
                    </div>
                </div>

                <CheckButton
                    style={{ display: "none"}}
                    ref={c => {
                        this.checkBtn = c;
                    }}
                />
                </Form>
                <Link className="nav-link" to={"/"}>Sign In</Link>
            </div>
        )
    }
    
};

export default Register;