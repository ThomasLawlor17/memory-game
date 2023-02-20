import { useContext } from 'react';
import './App.css';
import {AppContext} from './App.provider';
import Game from './components/Game';
import Start from './components/Start';

function App() {
  const {active} = useContext(AppContext)

  return (
    <div className="App">
      {active ? 
      <Game/>
      :
      <Start/>
      }
    </div>
  );
}

export default App;
