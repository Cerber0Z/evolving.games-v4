import React from 'react'
import carshop from '../../assets/img/icons/boton-car.png'
import {Link} from "react-router-dom";

const botoncar = () => {
    return (
        <>
        <Link to="/carshop">
        <div className="btn-car">
            <img className="img-carshop" src={carshop} alt="carshop"></img>
        </div>
        </Link>
        </>
    )
}

export default botoncar
