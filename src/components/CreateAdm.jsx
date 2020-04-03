import React from 'react';
import {Link} from 'react-router-dom';
import {NavBar} from './NavBar';
import {FaAngleLeft} from 'react-icons/fa';

export class CreateAdm extends React.Component {
    render() {
        return(
            <div>
            <NavBar />
            <div className="container">
                 <div className="position mt-3">
                    <button className="btn btn-secondary color btn-circle"><Link className="color" to={"/admin"}><FaAngleLeft /></Link></button>
                 </div>
                 <h1>Add Admin</h1>
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