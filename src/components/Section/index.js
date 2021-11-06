import React from 'react'
import styled from 'styled-components'
import './styles.css'

function Section({
  title,
  description,
  btnLeftText,
  btnRightText,
  background,
}) {
  const ProductContainer = styled.div`
    background-image: ${(props) => `url("/images/${props.backgroundImg}")`};
  `

  return (
    <ProductContainer className="section" backgroundImg={background}>
      <div className="section__text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
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
    </ProductContainer>
  )
}

export default Section
