import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {NavBar} from './NavBar';
import {FaAngleLeft} from 'react-icons/fa';

export class Edit extends React.Component {
    constructor() {
      super()
      this.state = {
        activity: []
      }

      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id)
        axios.get(`/api/editActivity/${id}`)
          .then(response => {
             this.setState({activity: response.data})
          })
    }

    onChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    onSubmit(e) {
      e.preventDefault();
      const obj = {
        title: this.state.title
      }
      axios.post('/api/updateActivity/'+this.props.match.params.id, obj)
      .then(res => console.log(res.data));
      this.props.history.push('/activity')
    }
    
    render() {
        let activity = (
          <div className="form-group">
            {this.state.activity.map(act => {
                return (
                  <div>
                    <label>Activity</label> 
                    <input type="text" className="form-control" name="title" defaultValue={act.title} onChange={this.onChange}/>
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
                 <form onSubmit={this.onSubmit}>
                    {activity}
                    <div className="form-group">                                      
                    <div className="col-md-offset-3">
                        <span className="col-md-2"></span>
                            <button type="submit" className="btn btn-success"><i className="icon-hand-right"></i>Edit</button>
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