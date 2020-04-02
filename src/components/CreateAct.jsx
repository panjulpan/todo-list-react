import React from 'react';
import {Link} from 'react-router-dom';

export class Create extends React.Component {
    render() {
        return(
            <div className="container">
                 <div className="position mt-3">
                    <button className="btn btn-secondary color"><Link className="color" to={"/activity"}>Back</Link></button>
                 </div>
                 <h1>Add Activity</h1>
                 <form>
                    <div className="form-group">
                        <label>Activity</label>
                        <input type="text" className="form-control" placeholder="Input Activity"></input>
                    </div>
                    <div class="form-group">                                      
                    <div class="col-md-offset-3">
                        <span className="col-md-2"></span>
                            <button type="submit" class="btn btn-success"><i class="icon-hand-right"></i>Add</button>
                            <span className="col"></span><button className="btn btn-danger"><Link className="color" to={"/activity"}>Back</Link></button>
                    </div>
                </div> 
                </form>
            </div>
        )
    }
}

export default Create;