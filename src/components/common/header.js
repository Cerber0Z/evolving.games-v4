import imglogo from '../../assets/img/icons/logo-games.png';
import React from 'react'
import {Link} from "react-router-dom";
class Header extends React.Component {
    render(){
    return (
        <div className="App">
            <header className="App-header">
                <div className="principal">
                    <div className="secundario">
                       <Link to="/"><img className="img-logo" src={imglogo} alt="logo"></img></Link>
                    </div>
                </div>
            </header>
         </div>
    )
    }
}

export default Header
