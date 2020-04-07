import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import {FaPlus, FaMinus, FaEllipsisH} from 'react-icons/fa';
import "./style.css";

export class Activity extends React.Component {

  state = {
    data: []
  }

  componentDidMount(){
    const urlFetch = fetch('http://localhost:3001/api/todos');

    urlFetch.then(res => {
      if( res.status === 200)
        return res.json()
    }).then(resJson => {
      this.setState({
        data: resJson
      })
    })
  }

  render() {
    let data = (
      <div>
        {this.state.data.map(act => {
          return (
            <tr>
              <div className="col-sm-12">
                <td><input type="checkbox"/> {act.title}</td>
              </div>
              <td><button className="btn btn-warning btn-circle"><i className="icon-hand-right"></i><Link className="color" to="/editActivity"><FaEllipsisH /></Link></button></td>
            </tr>
          )
        })}
      </div>
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
                  <tbody>
                    {data}
                  </tbody>
                </table>
              </div>
           </div>
      </div>
    )
  }
}


export default Activity;