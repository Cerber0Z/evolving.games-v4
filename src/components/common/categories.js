import React from 'react'
import iconsCategories from '../../assets/icons-categories'
import './categories.css';
import {Link} from "react-router-dom";


class categories extends React.Component {
    render(){
        return (  
           
            <div className="category">
               
                <ul className="categories">
                    <div className="categories-div">
                        <li className="icons-category">
                          <Link to="/playstation"><img className="icon-category" src={iconsCategories.playstation} title="PlayStation" alt="PlayStation" /></Link>
                        </li>
                    </div>
                    <div className="categories-div">
                        <li className="icons-category">
                            <Link to="/xbox"><img className="icon-category" src={iconsCategories.xbox} title="Xbox" alt="Xbox" /></Link>
                        </li>
                    </div>
                    <div className="categories-div">
                        <li className="icons-category">
                            <Link to="/nintendo"><img className="icon-category" src={iconsCategories.nintendo} title="Nintendo" alt="Nintendo" /></Link>
                        </li>
                    </div>
                </ul>   
            </div>
            
        )
    }
}

export default categories
