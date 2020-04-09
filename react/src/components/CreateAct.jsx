import React from 'react';
import {Link} from 'react-router-dom';
import {NavBar} from './NavBar';
import {FaAngleLeft} from 'react-icons/fa';
import axios from 'axios';

export class Create extends React.Component {
    constructor() {
        super()
        this.state = {
          title: '',
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
        onChange(e) {
            this.setState({ [e.target.name]: e.target.value })
        }
        onSubmit(e) {
            e.preventDefault()
        
        const user = {
            title: this.state.title
        }

        return axios
        .post('/api/addActivity', {
            title: user.title
        })
        .then(res =>{
            this.props.history.push(`/activity`)
        })
    }

    render() {
        return(
            <div>
            <NavBar />
            <div className="container">
                 <div className="position mt-3">
                    <button className="btn btn-secondary color btn-circle"><Link className="color" to={"/activity"}><FaAngleLeft /></Link></button>
                 </div>
                 <h1>Add Activity</h1>
                 <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Activity</label>
                        <input type="text" className="form-control" name="title" placeholder="Input Activity" value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">                                      
                    <div className="col-md-offset-3">
                        <span className="col-md-2"></span>
                            <button type="submit" className="btn btn-success" onClick={this.postActHandler}><i className="icon-hand-right"></i>Add</button>
                            <span className="col"></span><button className="btn btn-danger"><Link className="color" to={"/activity"}>Back</Link></button>
                    </div>
                </div> 
                </form>
            </div>
            </div>
        )
    }
}

export default Create;