import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../App.provider'


const StyledHeader = styled.header`


h1 {
  margin: 0;
}


`

const Header = () => {
  const {active} = useContext(AppContext)
  return (
    <StyledHeader>
      <h1>memory</h1>
      {active ? <div></div> : ''}
    </StyledHeader>
  )
}

export default Header