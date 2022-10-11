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
  const showSearchDrawer = props.showSearchDrawer;


  const toggleSearchDrawer = function (e) {
    e.preventDefault();
    if(showSearchDrawer){props.toggleSearchDrawer(false);}
    props.toggleSearchDrawer(true)
    console.log(showSearchDrawer);
  };

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
            onClick={toggleSearchDrawer}
          />
          <BottomNavigationAction label='Team' icon={<FavoriteIcon />} />
          <BottomNavigationAction label='Analyze' icon={<ArchiveIcon />} />
          <BottomNavigationAction
            label='Settings'
            icon={<SettingsApplicationsIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
