import React from 'react';
import {Link} from 'react-router-dom';
import {NavBar} from './NavBar';
import {FaAngleLeft} from 'react-icons/fa';
import axios from 'axios';

export class CreateAdm extends React.Component {
    constructor() {
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

    onChange (e) {
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
        .post('/api/addAdmin', {
            full_name: newUser.full_name,
            no_tlp: newUser.no_tlp,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log(response)
        })
        .then(res =>{
            this.props.history.push(`/admin`)
        })
    }

    render() {
        return(
            <div>
            <NavBar />
            <div className="container">
                 <div className="position mt-3">
                    <button className="btn btn-secondary color btn-circle"><Link className="color" to={"/admin"}><FaAngleLeft /></Link></button>
                 </div>
                 <h1>Add Admin</h1>
                 <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="full_name" value={this.state.full_name} className="form-control" placeholder="Input Full Name" onChange={this.onChange} required></input>
                    </div>
                    <div className="form-group">
                        <label>Mobile Phone</label>
                        <input type="text" name="no_tlp" value={this.state.no_tlp} className="form-control" placeholder="Input Mobile Phone" onChange={this.onChange} required></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.onChange} className="form-control" placeholder="Input Email" required></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.onChange} className="form-control" placeholder="Input Password" required ></input>
                    </div>
                    <div class="form-group">                                      
                    <div class="col-md-offset-3">
                        <span className="col-md-2"></span>
                            <button type="submit" class="btn btn-success"><i class="icon-hand-right"></i>Add</button>
                            <span className="col"></span><button className="btn btn-danger"><Link className="color" to={"/admin"}>Back</Link></button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        )
    }
}

export default CreateAdm;