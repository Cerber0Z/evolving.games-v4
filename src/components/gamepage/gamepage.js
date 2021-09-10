import React from 'react'
import { useParams } from 'react-router'
import Header from '../../components/common/header'
import './gamepage.css'
import Categories from '../../components/common/categories'
import {Button} from 'reactstrap';
const Gamepage = () => {

    const {id} =  useParams()
   
    const [videogame, setVideogame] = React.useState([]);

    React.useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`http://localhost:3000/api/videogame/${id}`)
            const videojugos = await data.json();
            setVideogame(videojugos)
         }
         obtenerDatos()
    }, [id])

    return (
        <>
        <Header />
        <Categories/>
            <div className="banner">
                <img className="banner-img" src={videogame.banner} alt={videogame.name} />
            </div>
            <div className="container">
                <div className="card-page">
                    <h1 className="title-game">{videogame.name}</h1>
                    <div className="precio-development">
                        <h6 className="developers">{videogame.developers}</h6>
                        <h2 className="precio">${videogame.price},00</h2>
                    </div>
                    <Button className="btn-añadir" id="btn-añadir" >Añadir</Button> 
                </div>

                <div className="card-caratula">
                    <img className="mask-img" src={videogame.caratula} alt={videogame.name} ></img>    
                </div>
                <div className="card-description">
                    <h3 className="Description">DESCRIPCIÓN DEL JUEGO</h3>
                    <p className="description-text">{videogame.description}</p> 
                </div>
               

            </div>
            
        </>
    )
}

export default Gamepage
