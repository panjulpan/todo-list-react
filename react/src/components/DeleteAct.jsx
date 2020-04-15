import React from "react";
import { Link } from "react-router-dom";
import {NavBar} from './NavBar';
import {FaAngleLeft, FaMinus} from 'react-icons/fa';
import axios from 'axios';
import "./style.css"


export class Delete extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get(`/api/activity/`)
      .then(response => {
        this.setState({data: response.data})
      });
  }

  deleteDataHandler = () => {
    const { id } = this.props.match.params
    console.log(id)
    axios.delete(`/api/deleteActivity/${id}`)
      .then(() => {
        console.log("deleted");
      });
    this.componentDidMount()
  }

  render() {
    let deleteData = (
      <tbody>
        {this.state.data.map(act => {
          let link = `/deleteActivity/${act.id}`
          return (
            <tr>
              <td key={act.id}><input type="checkbox"/> {act.title}</td>
              <td><Link to={link}><button className="btn btn-danger btn-circle" onClick={this.deleteDataHandler}><i className="icon-hand-right"></i><FaMinus /></button></Link></td>
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
              <button type="submit" className="btn btn-secondary btn-circle"><i className="icon-hand-right"></i><Link className="color" to="/activity"><FaAngleLeft /></Link></button>
            </span>
          </div>
          <h1>To Do List</h1>
          <div className="row">
            <table className="table table-borderless">
              {deleteData}
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Delete;