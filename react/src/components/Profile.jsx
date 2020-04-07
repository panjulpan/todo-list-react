import React from 'react';
import {Link} from 'react-router-dom';
import {NavBar} from './NavBar';
import {FaEllipsisH} from 'react-icons/fa';
import "./style.css"


export class Profile extends React.Component {
    render() {
        return (
          <div>
            <NavBar />
            <div className="container">
              <div className="position mt-3">
                <span className="col-md-2">  
                  <button type="submit" className="btn btn-secondary btn-circle"><i class="icon-hand-right"></i><Link className="color" to="/editProfile"><FaEllipsisH /></Link></button>
                </span>
              </div>
                <h1>Profile</h1>
                <div className="row">
                  <div className="col-md-3 col-lg-3 " align="center">
                    <img alt="User Pic" src={require("./user.png")} class="img-circle img-responsive"/>
                  </div>
                  <div class=" col-md-9 col-lg-9 "> 
                    <table class="table table-user-information">
                      <tbody>
                        <tr> 
                          <td>Email : </td>
                        </tr>
                        <tr>
                          <td>Mobile : </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
            </div>
          </div>
          </div>
        )
    }
}

export default Profile;