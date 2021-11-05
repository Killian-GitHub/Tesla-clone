import React from 'react'
import './styles.css'
import Arrow from '../../images/down-arrow.svg'

function Section() {
  return (
    <div className="section">
      <div className="section__text">
        <h1>Model 3</h1>
        <p>Réservez un essai sans contact</p>
      </div>
      <div className="section__btn">
        <div className="btn__group">
          <button className="btn__left">Configuration personnalisée</button>
          <button className="btn__right">Véhicules disponibles</button>
        </div>
        <img src={Arrow} className="btn__arrow" alt="Animate arrow" />
      </div>
    </div>
  )
}

export default Section
