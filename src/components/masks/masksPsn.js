import React from 'react'
import Videogame from '../mask/mask'
import {Link} from 'react-router-dom';
import Footer from '../footer/footer'

function masks() {

    const [videojuegos, setVideojuegos] = React.useState([]);

    React.useEffect(() => {
       obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
       const data = await fetch('http://localhost:3000/api/videogame')
       const videojugos = await data.json();
       setVideojuegos(videojugos)
    }

    return (
        <>
        <div className="Cards">
            <h2 className="titleCategory">PSN</h2>
           {
                videojuegos.map(videojuegos => (  
                    <Link className="a-img" key={videojuegos._id} to={`/playstation/${videojuegos._id}`}>
                        <Videogame key={videojuegos._id} props={videojuegos}/>
                    </Link>    
                ))
            }
             
        </div>
        <Footer/>
           </>
    )
}

export default masks
