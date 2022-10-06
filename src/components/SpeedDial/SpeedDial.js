import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import FavoriteIcon from '@mui/icons-material/Favorite';

const actions = [
  //   { icon: <FileCopyIcon />, name: 'empty' },
  //   { icon: <SaveIcon />, name: 'Bulbapedia' },
  { icon: <FavoriteIcon />, name: 'Favorite', operation: 'favorite' },
  { icon: <PersonSearchIcon />, name: 'Search', operation: 'favorite' },
];

export default function SpeedDialTooltipOpen(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleClick(e, action) {
    e.preventDefault();
    console.dir(action);
    if (action === 'Search') props.search(true);
    handleClose();
  }

  return (
    <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel='SpeedDial tooltip'
        sx={{ position: 'absolute', bottom: 35, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={(e) => {
              handleClick(e, action.name);
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
