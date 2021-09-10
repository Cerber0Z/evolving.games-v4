import React from 'react'
import imgcaratula from '../../assets/img/caratulas/467300471532422795.jpg'


const carrito = () => {
    return (
        <div className="carritos">
          <div className="carrito">
              <div className="carrito_close">
                  <box-icon name="x"></box-icon>
              </div>
              <h2>Su carrito</h2>
              <div className="carrito__center">
                    <img src={imgcaratula}></img>
                    <div>
                        <h3>title</h3>
                        <p className="precio">$345</p>
                    </div>
                    <div>
                        <box-icon name="up-arrow" type="solid"></box-icon>
                        <p className="cantidad">1</p>
                        <box-icon name="down-arrow" type="solid"></box-icon>
                    </div>
                    <div className="remove__item">
                        <box-icon name="trash" type="solid"></box-icon>
                    </div>
              </div>
              <div className="carrito_footer">
                <h3>Total: $2055</h3>
                <button className="btn">Comprar</button>
              </div>    
          </div>
        </div>
    )
}

export default carrito
