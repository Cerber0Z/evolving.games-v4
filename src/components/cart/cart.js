import React from 'react'
import Header from '../../components/common/header'
import Categories from '../../components/common/categories'
import imgbanner from '../../assets/img/icons/9340292.jpg'


const cart = () => {


    return (
        <>
        <Header />
        <Categories/>
        
            <div className="banner">
                <img className="banner-img" src={imgbanner} alt="banner" />
            </div>
            <div className="container">
                <div className="card-page">
                 <h1 className="title-game">Carrito</h1>
                   
                </div>

                <div className="Total-producto">
                    <div className="total">
                        <h4>250000</h4>
                    </div>
                </div>
                 
            </div>
        </>
    )
}

export default cart
