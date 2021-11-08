/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import './styles.css'
import Fade from 'react-reveal/Fade'

const ProductContainer = styled.div`
  background-image: ${(props) => `url("/images/${props.backgroundImg}")`};
`

function Section({
  title,
  link,
  description,
  btnLeftText,
  btnRightText,
  background,
}) {
  return (
    <ProductContainer className="section" backgroundImg={background}>
      <Fade>
        <div className="section__text">
          <h1>{title}</h1>
          <a href="/">{link}</a>
          <p>{description}</p>
        </div>
      </Fade>
      <Fade>
        <div className="section__btn">
          <div className="btn__group">
            <button className="btn__left">{btnLeftText}</button>
            {btnRightText && (
              <button className="btn__right">{btnRightText}</button>
            )}
          </div>
          <img
            src="/images/down-arrow.svg"
            className="btn__arrow"
            alt="Animate arrow"
          />
        </div>
      </Fade>
    </ProductContainer>
  )
}

export default Section
