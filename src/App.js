import { useState } from 'react';
import './App.css';
import AppNavBar from './components/AppNavBar';
import ExplorerView from './components/ExplorerView';
import SettingsView from './components/SettingsView/SettingsView';
import TeamView from './components/TeamView/TeamView';
import AnalyzerView from './components/AnalyzerView/AnalyzerView';
import SearchDrawer from './components/SlideOvers/SearchDrawer';
import { SpeedDial } from './components/SpeedDial';
import { Favorite } from '@mui/icons-material';
import FavoritesList from './components/SlideOvers/FavoritesList';



function App() {
  const [currentIndex, setCurrentIndex] = useState(6);
  const [showSearchDrawer, toggleSearchDrawer] = useState(false);
  const [showFavoritesList,toggleFavoritesList] = useState(true)
  const [currentView, setCurrentView] = useState('explore');
  console.log(currentView)
  
  function displayCurrentView() {
    if (currentView === 'settings') {
      return <SettingsView />;
    }
    if (currentView === 'teams') {
      return <TeamView />;
    }
    if (currentView === 'analyzer') {
      return <AnalyzerView />;
    } else {
      return (
        <ExplorerView
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      );
    }
  }
  return (
    <div className='App'>
      {displayCurrentView()}
      <AppNavBar setView={setCurrentView} />
      <SpeedDial search={toggleSearchDrawer} />
      <SearchDrawer
        show={showSearchDrawer}
        toggle={toggleSearchDrawer}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <FavoritesList show={showFavoritesList} toggle={toggleFavoritesList} setCurrentIndex={setCurrentIndex}/>
    </div>
  );
}

export default App;
