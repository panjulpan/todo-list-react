import React from "react";
import { Link } from "react-router-dom";
import {NavBar} from './NavBar';
import {FaPlus, FaMinus} from 'react-icons/fa';
import "./style.css"

export class Admin extends React.Component {
  render() {
    return <div>
      <NavBar /> 
    <div className="container">
              <div className="position mt-3">
                <span className="col-md-2">  
                  <button type="submit" className="btn btn-success btn-circle"><i class="icon-hand-right"></i><Link className="color" to="/addAdmin"><FaPlus /></Link></button>
                </span>
              </div>
              <h1>User List</h1>
              <div className="row">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <div className="col-sm-12">
                        <td><input type="checkbox"/> User/Admin 1</td>
                        <td>Role</td>
                      </div>
                      <td><button className="btn btn-danger btn-circle"><i class="icon-hand-right"></i><Link className="color" to="/deleteAdmin"><FaMinus /></Link></button></td>
                    </tr>
                    <tr>
                      <div className="col-sm-12">
                        <td><input type="checkbox"/> User/Admin 1</td>
                        <td>Role</td>
                      </div>
                      <td><button className="btn btn-danger btn-circle"><i class="icon-hand-right"></i><Link className="color" to="/deleteAdmin"><FaMinus /></Link></button></td>
                    </tr>
                    <tr>
                      <div className="col-sm-12">
                        <td><input type="checkbox"/> User/Admin 1</td>
                        <td>Role</td>
                      </div>
                      <td><button className="btn btn-danger btn-circle"><i class="icon-hand-right"></i><Link className="color" to="/deleteAdmin"><FaMinus /></Link></button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
           </div>
           </div>
  }
}

export default Admin;