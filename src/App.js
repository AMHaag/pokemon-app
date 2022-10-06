import { useState } from 'react';
import './App.css';
import AppNavBar from './components/AppNavBar';
import ExplorerView from './components/ExplorerView';
import SearchDrawer from './components/SlideOvers/SearchDrawer';
import { SpeedDial } from './components/SpeedDial';

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
      <ExplorerView
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <AppNavBar />
      <SpeedDial search={toggleSearchDrawer} />
      <SearchDrawer
        show={showSearchDrawer}
        toggle={toggleSearchDrawer}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}

export default App;
