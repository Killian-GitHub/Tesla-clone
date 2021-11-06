import React from 'react'
import Section from '../../components/Section'

function Home() {
  return (
    <div className="Home">
      <Section
        title="Model 3"
        link="Réservez un essai sans contact"
        background="../../images/model-3.jpg"
        btnLeftText="Configuration personnalisée"
        btnRightText="Véhicules disponibles"
      />
      <Section
        title="Model Y"
        background="model-y.jpg"
        btnLeftText="Configuration personnalisée"
        btnRightText="Essais"
      />
      <Section
        title="Model S"
        background="model-s.jpg"
        btnLeftText="Configuration personnalisée"
        btnRightText="Véhicules disponibles"
      />
      <Section
        title="Model X"
        background="model-x.jpg"
        btnLeftText="Configuration personnalisée"
        btnRightText="Véhicules disponibles"
      />
      <Section
        title="Systèmes d'énergie solaire et Powerwalls"
        description="De l’énergie pour tous vos besoins"
        background="solar-panel.jpg"
        btnLeftText="En savoir plus"
      />
      <Section
        title="Accessoires"
        background="accessories.jpg"
        btnLeftText="Commander maintenant"
      />
    </div>
  )
}

export default Home
