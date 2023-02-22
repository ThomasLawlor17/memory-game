import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AppContext } from '../App.provider'


const StyledHeader = styled.header`
h1 {
  margin: 0;
  font-weight: 700;
  font-size: 40px;
  line-height: 49.6px; 
}

@media (max-width: 414px) {
  h1 {
    font-size: 32px;
    line-height: 39.68px;
  }
}`

const Header = () => {

  return (
    <StyledHeader>
      <h1>memory</h1>
    </StyledHeader>
  )
}

export default Header