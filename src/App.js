import './App.css';
import PokemonInspect from './components/PokemonInspect';
import AppNavBar from './components/AppNavBar';
import SearchDrawer from './components/SearchDrawer';
import { useState } from 'react';
import { Input } from '@mui/material';
function App() {
  const [currentIndex, setCurrentIndex] = useState(6);
  const [showSearchDrawer, toggleSearchDrawer] = useState(true);

  function handleChange(event) {
    event.preventDefault();
    let val = parseInt(event.target.value);

    console.log(val);
    if (Number.isInteger(val)) setCurrentIndex(event.target.value);
  }

  return (
    <div className='App'>
      <PokemonInspect
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <Input
        placeholder='index search'
        components='input'
        onChange={handleChange}
      />
      <SearchDrawer show={showSearchDrawer} toggle={toggleSearchDrawer} />
      <AppNavBar
        showSearchDrawer={showSearchDrawer}
        toggleSearchDrawer={toggleSearchDrawer}
      />
    </div>
  );
}

export default App;
