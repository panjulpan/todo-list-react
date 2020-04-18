import React from 'react';
import {Link} from 'react-router-dom';
import {NavBar} from './NavBar';
import {FaAngleLeft} from 'react-icons/fa';
import axios from 'axios'

export class EditProfile extends React.Component {
    
    constructor(){
        super()
        this.state = {
            data: []
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        const id = this.props.match.params.id
        console.log(id)
        axios.get(`/api/editProfile/${id}`)
        .then(response => {
            this.setState({data: response.data})
            console.log(response.data)
        })
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            full_name: this.state.full_name,
            no_tlp: this.state.no_tlp,
            email: this.state.email
        }
        axios.post(`/api/updateProfile/`+this.props.match.params.id, obj)
        .then(response => console.log(response.data));
        this.props.history.push('/profile')
    }

    render() {
        let edit = (
            <div className="form-group">
                {this.state.data.map(prof => {
                    return (
                        <div>
                        <label>Full Name</label>
                            <input type="text" name="full_name" defaultValue={prof.full_name} onChange={this.onChange} className="form-control" placeholder="Input Full Name"/>
                        </div>
                    )
                })}
            </div>
        )

        let mobile = (
            <div className="form-group">
                {this.state.data.map(prof => {
                    return (
                        <div>
                        <label>Mobile Phone</label>
                            <input type="text" name="no_tlp" defaultValue={prof.no_tlp} onChange={this.onChange} className="form-control" placeholder="Input Mobile Phone"/>
                        </div>
                    )
                })}
            </div>
        )
        
        let email = (
            <div className="form-group">
                {this.state.data.map(prof => {
                    return (
                        <div>
                        <label>Email</label>
                    <input type="email" name="email" defaultValue={prof.email} onChange={this.onChange} className="form-control" placeholder="Input Email"/>
                        </div>
                    )
                })}
            </div>
        )
        return(
            <div>
                <NavBar />
            <div className="container">
                <div className="position mt-3">
                    <span className="col-md-2">  
                    <button type="submit" className="btn btn-secondary btn-circle"><i class="icon-hand-right"></i><Link className="color" to="/Profile"><FaAngleLeft /></Link></button>
                    </span>
                </div>
                <h1>Edit Activity</h1>
                 <form onSubmit={this.onSubmit}>
                    {edit}
                    {mobile}
                    {email}
                    <div class="form-group">                                      
                    <div class="col-md-offset-3">
                        <span className="col-md-2"></span>
                            <button type="submit" class="btn btn-warning"><i class="icon-hand-right"></i>Edit</button>
                            <span className="col"></span><button type="submit" class="btn btn-danger"><i class="icon-hand-right"></i>Cancel</button>
                    </div>
                </div> 
                </form>
            </div>
            </div>
        )
    }
}

export default EditProfile;