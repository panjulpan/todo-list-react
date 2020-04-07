import React from "react";
import { Link } from "react-router-dom";
import {NavBar} from './NavBar';
import {FaAngleLeft, FaMinus} from 'react-icons/fa';
import "./style.css"

export class DeleteAdm extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
              <div className="position mt-3">
                <span className="col-md-2">                
                  <button type="submit" className="btn btn-secondary btn-circle"><i class="icon-hand-right"></i><Link className="color" to="/admin"><FaAngleLeft /></Link></button>
                </span>
              </div>
              <h1>Delete User</h1>
              <div className="row">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <div className="col-sm-12">
                        <td><input type="checkbox"/> User/Admin 1</td>
                      </div>
                      <td><button className="btn btn-danger btn-circle"><i class="icon-hand-right"></i><FaMinus /></button></td>
                    </tr>
                    <tr>
                      <div className="col-sm-12">
                        <td><input type="checkbox"/> User/Admin 2</td>
                      </div>
                      <td><button className="btn btn-danger btn-circle"><i class="icon-hand-right"></i><FaMinus /></button></td>
                    </tr>
                    <tr>
                      <div className="col-sm-12">
                        <td><input type="checkbox"/> User/Admin 3</td>
                      </div>
                      <td><button className="btn btn-danger btn-circle"><i class="icon-hand-right"></i><FaMinus /></button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
           </div>
           </div>
    )
  }
}

export default DeleteAdm;