import React from "react";
import {Link, Redirect} from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import axios from "axios";

export class DeleteAdmModal extends React.Component {
    state = {
        data: [],
        redirect: false
    }

    //BUG MINOR

    deleteHandler = () => {
        const { id } = this.props.match.params
        axios.delete(`/api/deleteAdm/${id}`)
          .then(() => {
            this.setState({
              redirect: true
            })
          });
        // this.componentDidMount()
      }
    
      renderRedirect = () => {
        if (this.state.redirect) {
          return (
            <Redirect to='/admin' />
          )
        }
      }

    render(){
        return (
          <div>
            {this.renderRedirect()}
            <Modal show centered>
              <ModalHeader>
                <ModalTitle>Are You Sure To Delete This Activity ?</ModalTitle>
              </ModalHeader>
              <ModalBody><p>{this.state.data.full_name}</p></ModalBody>
              <ModalFooter>
                <button type="submit" className="btn btn-danger" onClick={this.deleteHandler}><i className="icon-hand-right"></i>Delete</button>
                <button className="btn btn-info"><Link className="color" to={"/deleteAdm"}>Back</Link></button>
              </ModalFooter>
            </Modal>
          </div>
        );
    }
}