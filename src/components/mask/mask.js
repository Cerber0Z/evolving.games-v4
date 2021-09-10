import React from 'react';
import './mask.css';
// import imgcyber from '../../assets/img/caratulas/467300471532422795.jpg';
// import {Button,Modal, ModalHeader, ModalBody} from 'reactstrap';


function mask({props}){
    //  state={
    //      abierto: false,
    //    }
 
    //    abrirModal=()=>{
    //      this.setState({abierto: !this.state.abierto});
    //   }
      
        return(
            <>
            <div className="card">
                <img className="mask-img" src={props.caratula} alt={props.name} ></img>    
            </div>
            {/*onClick={this.abrirModal}  <Modal isOpen={this.state.abierto} >
            <Button  type="button" className="btn-close btnclose" onClick={this.abrirModal} ></Button>
            <ModalHeader>
            Nombre Del juego
            </ModalHeader>
            <ModalBody>
            </ModalBody>
        </Modal> */}
      </>
        )
    }
 
  

export default mask
