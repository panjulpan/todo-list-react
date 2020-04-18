import React from 'react';
import {Link} from 'react-router-dom';
import {NavBar} from './NavBar';
import {FaEllipsisH} from 'react-icons/fa';
import axios from 'axios';
import "./style.css"


export class Profile extends React.Component {
    
    state = {
        data: []
    }

    componentDidMount(){
      axios.get('/api/profile')
      .then(response => {
        this.setState({data: response.data})
        // console.log(response)
        //console.log(this.state.data)
    })
  }
    render() {
      let edit;
      let link = (
        <span className="col-md-2">
        {this.state.data.map(act => {
          edit = "/editProfile/" + act.id
          return (
              <button type="submit" className="btn btn-secondary btn-circle"><i class="icon-hand-right"></i><Link className="color" to={edit}><FaEllipsisH /></Link></button>
          )
          
        })}
        </span>
      )
      let full_name = (
        <tbody>
            {this.state.data.map(act => {
              return (
                <tr>
                  <td key={act.id}>{act.full_name}</td>                 
                </tr>
              )
            })}
          </tbody>
      )

      let email = (
        <tbody>
            {this.state.data.map(act => {
              return (
                <tr>
                  <td key={act.id}>Email : {act.email}</td>                 
                </tr>
              )
            })}
          </tbody>
      )

      let mob = (
        <tbody>
            {this.state.data.map(act => {
              return (
                <tr>
                  <td key={act.id}>Mobile : {act.no_tlp}</td>                 
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
                {link}
              </div>
                <h1>Profile</h1>
                {full_name}
                <div className="row">
                  <div className="col-md-3 col-lg-3 " align="center">
                    <img alt="User Pic" src={require("./user.png")} class="img-circle img-responsive"/>
                  </div>
                  <div class=" col-md-9 col-lg-9 "> 
                    <table class="table table-user-information">
                      {email}
                      {mob}
                    </table>
                  </div>
            </div>
          </div>
          </div>
        )
    }
}

export default Profile;