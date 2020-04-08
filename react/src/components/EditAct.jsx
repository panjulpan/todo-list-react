import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {NavBar} from './NavBar';
import {FaAngleLeft} from 'react-icons/fa';

export class Edit extends React.Component {
    state = {
        activity: []
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/api/editActivity/${id}`)
          .then(response => {
             this.setState({activity: response.data})
          })
    }

    render() {
        let activity = (
          <div className="form-group">
            {this.state.activity.map(act => {
                return (
                  <div>
                    <label>Activity</label>
                    <input type="text" className="form-control" value={act.title}/>
                  </div>
                )
            })}
          </div>
        )

        return(
            <div>
            <NavBar />
            <div className="container">
                 <div className="position mt-3">
                    <button className="btn btn-secondary color btn-circle"><Link className="color" to={"/activity"}><FaAngleLeft /></Link></button>
                 </div>
                 <h1>Edit Activity</h1>
                 <form>
                    {activity}
                    <div class="form-group">                                      
                    <div class="col-md-offset-3">
                        <span className="col-md-2"></span>
                            <button type="submit" class="btn btn-success"><i class="icon-hand-right"></i>Edit</button>
                            <span className="col"></span><button className="btn btn-danger"><Link className="color" to={"/activity"}>Back</Link></button>
                    </div>
                </div> 
                </form>
            </div>
            </div>
        )
    }
}

export default Edit;