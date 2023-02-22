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
position: absolute;
overflow: hidden;

&:has(.Start) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--navy);
  color: var(--white);
  gap: 78px;
  padding-top: 154px;
  height: calc(100vh - 154px);

  @media (max-width: 769px) {
    padding-top: 169px;
  }
  @media (max-width: 414px) {
    gap: 45px;
    padding-top: 80px;
  }
}

&:has(.Game) {
  background-color: var(--white);
  color: var(--navy);
}`


function App() {
  const {active} = useContext(AppContext)

  return (
    <StyledMain className='App'>

      {active ? 
      <Game/>
      :
      <>
      <Header/>
      <Start/>
      </>
      }
    </StyledMain>
  );
}

export default App;
