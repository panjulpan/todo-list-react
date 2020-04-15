import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {NavBar} from './NavBar';
import {FaPlus, FaMinus} from 'react-icons/fa';
import "./style.css"

export class Admin extends React.Component {
  state = {
    data: []
  }

  componentDidMount(){
    axios.get('/api/admin')
      .then(response => {
        // console.log(response.data)
        this.setState({data: response.data})
      });
  }

  render() {
    let userList = (
      <tbody>
          {this.state.data.map(user => {
            return (
              <tr>          
                <td><input type="checkbox"/> {user.full_name}</td>
                <td>{user.role_user}</td>
                <td><button className="btn btn-danger btn-circle"><i className="icon-hand-right"></i><Link className="color" to="/deleteAdmin"><FaMinus /></Link></button></td>
              </tr>
            )
          })}
        </tbody>
    )
    return(
       <div>
        <NavBar /> 
          <div className="container">
            <div className="position mt-3">
              <span className="col-md-2">  
                  <button type="submit" className="btn btn-success btn-circle"><i className="icon-hand-right"></i><Link className="color" to="/addAdmin"><FaPlus /></Link></button>
              </span>
            </div>
            <h1>User List</h1>
            <div className="row">
              <table className="table table-borderless">
                {userList}
              </table>
            </div>
          </div>
        </div>
      )
  }
}

export default Admin;