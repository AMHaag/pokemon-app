import React from 'react';
import { Drawer, Box, TextField, Autocomplete } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import nameList from '../utils/nameArray';

export default function SearchDrawer(props) {
  let show = props.show;
  function closeDrawer() {
    props.toggle(false);
  }
  function openDrawer() {
    props.toggle(true);
  }

  function handleNumberLookUp(e) {
    e.preventDefault();
    let valueAsInt = parseInt(e.currentTarget.value);
    props.setCurrentIndex(valueAsInt);
  }

  function handleNameChange(e, v) {
    e.preventDefault();
    if (nameList.getIndexByName(v)) {
      props.setCurrentIndex(nameList.getIndexByName(v));
      closeDrawer();
    }
  }

  let pokemonNames = nameList.getNameArray();

  return (
    <>
      <Drawer
        anchor='top'
        open={show}
        onClose={closeDrawer}
        onOpen={openDrawer}
        // sx={{ backgroundColor: '#3d4554' }}
      >
        <ClickAwayListener
          mouseEvent='onMouseDown'
          touchEvent='onTouchStart'
          onClickAway={closeDrawer}
        >
          <Box
            role='presentation'
            // onClick={trace}
            // onKeyDown={trace}
            sx={{ margin: '10px 5px',  }}
          >
            <TextField
              label='National Pokédex Number'
              size='small'
              id='outlined-size-small'
              type='number'
              defaultValue={props.currentIndex}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleNumberLookUp}
            />
            <Autocomplete
              options={pokemonNames}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Pokémon Name'
                  size='small'
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
              sx={{ margin: '10px 0 0 0' }}
              onInputChange={handleNameChange}
              // onChange={handleNameSubmit}
            />
          </Box>
        </ClickAwayListener>
      </Drawer>
    </>
  );
}
