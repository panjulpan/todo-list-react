import React from 'react';
import {Link} from 'react-router-dom';

export class EditProfile extends React.Component {
    render() {
        return(
            <div className="container">
                 <div className="position"><Link className="nav-link" to={"/Profile"}>Back</Link></div><h1>Edit Profile</h1>
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
        )
    }
}

export default EditProfile;