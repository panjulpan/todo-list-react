import React from "react";
import { Link } from "react-router-dom";
import {NavBar} from './NavBar';
import {FaAngleLeft, FaMinus} from 'react-icons/fa';
import axios from 'axios'
import "./style.css"

export class DeleteAdm extends React.Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get(``)
    .then(response => {
      this.setState({data: response.data})
      console.log(response.data)
    })
    
  }

  render() {
    let hapus = (
      <tbody>
        {this.state.data.map(del => {
          let link = `/DeleteAdmModal/${del.id}`
          return (
            <tr>
              <td key={del.id}><input type="checkbox"/> {del.full_name}</td>
              <td><Link to={link}><button className="btn btn-danger btn-circle" ><i className="icon-hand-right"></i><FaMinus /></button></Link></td>
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
                  <button type="submit" className="btn btn-secondary btn-circle"><i class="icon-hand-right"></i><Link className="color" to="/admin"><FaAngleLeft /></Link></button>
                </span>
              </div>
              <h1>Delete User</h1>
              <div className="row">
                <table className="table table-borderless">
                  {hapus}
                </table>
              </div>
           </div>
           </div>
    )
  }
}

export default DeleteAdm;