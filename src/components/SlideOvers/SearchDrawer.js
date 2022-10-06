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
  function trace(e) {
    console.log(e);
  }

  function handleNumberLookUp(e) {
    e.preventDefault();
    let valueAsInt = parseInt(e.currentTarget.value);
    console.log(valueAsInt);
    props.setCurrentIndex(valueAsInt);
  }

  function handleNameChange(e, v) {
    e.preventDefault();
    console.log(nameList.getIndexByName(v));
    console.log(v);
    if (nameList.getIndexByName(v)) {
      props.setCurrentIndex(nameList.getIndexByName(v));
      closeDrawer();
    }
  }

  function handleNameSubmit(e, v) {
    console.log('submit' + v);
  }
  let pokemonNames = nameList.getNameArray();

  return (
    <>
      <Drawer
        anchor='top'
        open={show}
        onClose={closeDrawer}
        onOpen={openDrawer}
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
            sx={{ margin: '10px 5px' }}
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
