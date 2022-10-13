import React from 'react';
import { Drawer, Box, List, ListSubheader } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import PokemonListView from '../utils/PokemonListView/PokemonListView'

export default function FavoritesList(props) {
  const { show, toggle, setCurrentIndex } = props;
  function closeList() {
    toggle(false);
  }
  function openList() {
    toggle(true);
  }

  return (
    <Drawer anchor='right' open={show} onClose={closeList} onOpen={openList}>
      <ClickAwayListener
        mouseEvent='onMouseDown'
        touchEvent='onTouchStart'
        onClickAway={closeList}
      >
        <List sx={{width:'100%', minWidth:'30ch'}} subheader={<li/>}>
            <ListSubheader>Favorites</ListSubheader>
            <PokemonListView id={6} index={6}name='Charizard' primaryType='fire' secondaryType='flying' showTypes={true}/>
        </List>
      </ClickAwayListener>
    </Drawer>
  );
}
