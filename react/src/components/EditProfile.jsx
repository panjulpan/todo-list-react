import React from 'react';
import {Link} from 'react-router-dom';
import {NavBar} from './NavBar';
import {FaAngleLeft} from 'react-icons/fa';

export class EditProfile extends React.Component {
    //BUG MAYOR
    render() {
        return(
            <div>
                <NavBar />
            <div className="container">
                <div className="position mt-3">
                    <span className="col-md-2">  
                    <button type="submit" className="btn btn-secondary btn-circle"><i class="icon-hand-right"></i><Link className="color" to="/Profile"><FaAngleLeft /></Link></button>
                    </span>
                </div>
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