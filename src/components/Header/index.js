/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './styles.css'

function index() {
  return (
    <div className="header">
      <a href="/">
        <img src="/images/logo.svg" alt="Tesla logo" />
      </a>
      <div className="header__menu">
        <p>
          <a href="/">Model S</a>
        </p>
        <p>
          <a href="/">Model 3</a>
        </p>
        <p>
          <a href="/">Model X</a>
        </p>
        <p>
          <a href="/">Model Y</a>
        </p>
        <p>
          <a href="/">Powerwall</a>
        </p>
        <p>
          <a href="/">Recharge</a>
        </p>
      </div>
      <div className="header__nav">
        <p>
          <a href="/">Assistance</a>
        </p>
        <p>
          <a href="/">Shop</a>
        </p>
        <p>
          <a href="/">Compte</a>
        </p>
        <p>
          <a href="/">Menu</a>
        </p>
      </div>
    </div>
  )
}

export default index
