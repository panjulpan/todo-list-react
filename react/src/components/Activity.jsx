import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";
import {FaPlus, FaMinus, FaEllipsisH} from 'react-icons/fa';
import "./style.css";

export class Activity extends React.Component {

  state = {
    data: []
  }

  componentDidMount(){
    axios.get('/api/activity')
      .then(response => {
        this.setState({data: response.data})
      });
  }

  render() {
    let data = (
      <tbody>
          {this.state.data.map(act => {
            let link = "/editActivity/" + act.id
            return (
              <tr>
                <td key={act.id}><input type="checkbox"/> {act.title}</td>
                <td><button className="btn btn-warning btn-circle"><i className="icon-hand-right"></i><Link className="color" to={link}><FaEllipsisH /></Link></button></td>
              </tr>
            )
          })}
        </tbody>
    )

    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="position mt-3">
            <span className="col-md-2">  
              <button type="submit" className="btn btn-success btn-circle"><i className="icon-hand-right"></i><Link className="color" to="/addActivity"><FaPlus /></Link></button>
            </span>
            <span className="col-md-2">                
              <button type="submit" className="btn btn-danger btn-circle"><i className="icon-hand-right"></i><Link className="color" to="/deleteActivity"><FaMinus /></Link></button>
            </span>
          </div>
          <h1>To Do List</h1>
          <div className="row">
            <table className="table table-borderless">
                {data}
            </table>
          </div>
        </div>
      </div>
    )
  }
}


export default Activity;