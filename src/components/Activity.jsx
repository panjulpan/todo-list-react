import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

export class Activity extends React.Component {
  render() {
    return <div className="container">
              <div className="position mt-3">
                <span className="col-md-2">  
                  <button type="submit" className="btn btn-success"><i class="icon-hand-right"></i><Link className="color" to="/addActivity">+</Link></button>
                </span>
                <span className="col-md-2">                
                  <button type="submit" className="btn btn-danger"><i class="icon-hand-right"></i><Link className="color" to="/deleteActivity">-</Link></button>
                </span>
              </div>
              <h1>To Do List</h1>
              <div className="row">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <div className="col-sm-12">
                        <td><input type="checkbox"/> Activity 1</td>
                      </div>
                      <td><button className="btn btn-warning"><i class="icon-hand-right"></i><Link className="color" to="/editActivity">...</Link></button></td>
                    </tr>
                    <tr>
                      <div className="col-sm-12">
                        <td><input type="checkbox"/> Activity 2</td>
                      </div>
                      <td><button className="btn btn-warning"><i class="icon-hand-right"></i><Link className="color" to="/editActivity">...</Link></button></td>
                    </tr>
                    <tr>
                      <div className="col-sm-12">
                        <td><input type="checkbox"/> Activity 3</td>
                      </div>
                      <td><button className="btn btn-warning"><i class="icon-hand-right"></i><Link className="color" to="/editActivity">...</Link></button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
           </div>
  }
}

export default Activity;