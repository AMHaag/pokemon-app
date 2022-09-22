import './App.css';
import PokemonInspect from './components/PokemonInspect'
import AppNavBar from './components/AppNavBar';
// import {useState} from 'react';

function App() {

  return (
    <div className="App">
      <PokemonInspect/>
      <AppNavBar/>
    </div>
  );
}

export default App;
