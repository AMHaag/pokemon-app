import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Paper from '@mui/material/Paper';

export default function AppNavBar(props) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  function setCurrentView(e, string) {
    e.preventDefault();
    props.setView(string);
  }



  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label='Explore'
            icon={<SearchIcon />}
            onClick={(e)=>setCurrentView(e,'explore')}
          />
          <BottomNavigationAction label='Team' icon={<FavoriteIcon />} onClick={(e)=>setCurrentView(e,'teams')}/>
          <BottomNavigationAction label='Analyze' icon={<ArchiveIcon />} onClick={(e)=>setCurrentView(e,'analyzer')}/>
          <BottomNavigationAction
            label='Settings'
            icon={<SettingsApplicationsIcon />}
            onClick={(e)=>setCurrentView(e,'settings')}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
