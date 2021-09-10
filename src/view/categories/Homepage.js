import React from 'react'

import Header from '../../components/common/header'
import Categories from '../../components/common/categories'
import './categories.css'
function Homepage() {
    return (
        <div className="App">
            <Header />
            <Categories/>
            <hr className="App-hr" />
            <h3 className="App-title">Mas Vendidos</h3>
                
         </div>
    )
}

export default Homepage
