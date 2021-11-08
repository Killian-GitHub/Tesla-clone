/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import styled from 'styled-components'
import './styles.css'
import CloseIcon from '@mui/icons-material/Close'
import { selectCars } from '../../features/cars/carSlice'
import { useSelector } from 'react-redux'

const Menu = styled.ul`
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
`

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const cars = useSelector(selectCars)

  return (
    <div className="header">
      <a href="/">
        <img src="/images/logo.svg" alt="Tesla logo" />
      </a>
      <ul className="header__product">
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="/">{car}</a>
            </li>
          ))}
      </ul>
      <ul className="header__nav">
        <li>
          <a href="/">Assistance</a>
        </li>
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="/">Compte</a>
        </li>
        <li onClick={() => setShowMenu(true)}>Menu</li>
      </ul>
      <Menu show={showMenu} className="header__menu">
        <div className="menu__icon">
          <CloseIcon onClick={() => setShowMenu(false)} />
        </div>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="/">{car}</a>
            </li>
          ))}
        <li>
          <a href="/">Véhicules Disponibles</a>
        </li>
        <li>
          <a href="/">Véhicules D'occasion</a>
        </li>
        <li>
          <a href="/">Reprise</a>
        </li>
        <li>
          <a href="/">Essais</a>
        </li>
        <li>
          <a href="/">Flottes & Entreprises</a>
        </li>
        <li>
          <a href="/">Cybertruck</a>
        </li>
        <li>
          <a href="/">Roadster</a>
        </li>
        <li>
          <a href="/">Électricité pour les professionnels</a>
        </li>
        <li>
          <a href="/">Industries</a>
        </li>
        <li>
          <a href="/">Énergie</a>
        </li>
        <li>
          <a href="/">Nous trouver</a>
        </li>
        <li>
          <a href="/">Événements</a>
        </li>
        <li>
          <a href="/">Assistance</a>
        </li>
        <li>
          <a href="/">Relations investisseurs</a>
        </li>
      </Menu>
    </div>
  )
}

export default Header
