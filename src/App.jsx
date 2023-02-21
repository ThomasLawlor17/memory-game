import { useContext } from 'react';
import styled from 'styled-components';
import './App.css';
import {AppContext} from './App.provider';
import Game from './components/Game';
import Header from './components/Header';
import Start from './components/Start';

const StyledMain = styled.main`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

@media (max-width: 769px) {
  gap: 78px;
  padding-top: 169px;
}

@media (max-width: 414px) {
  gap: 45px;
  padding-top: 80px;
}


`


function App() {
  const {active} = useContext(AppContext)

  return (
    <StyledMain className='App' style={{backgroundColor: `var(--${active ? 'white' : 'navy'})`, color: `var(--${active ? 'navy' : 'white'})`}}>
      <Header/>
      {active ? 
      <Game/>
      :
      <Start/>
      }
    </StyledMain>
  );
}

export default App;
