import React from "react";
import {  ListItem,ListItemAvatar,ListItemText,Avatar } from "@mui/material";
import TypeChip from "../TypeChip";

export default function PokemonListView(props){
const {name,index,id,primaryType,secondaryType, showTypes} = props
function displayTypes(){
    if(!showTypes){return}
    return (
      <>
        <TypeChip type={primaryType} />
        <TypeChip type={secondaryType} />
      </>
    );
}

    return (
      <ListItem >
        <ListItemAvatar>
          <Avatar
            alt={name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          />
        </ListItemAvatar>
        <ListItemText primary={name}/>
        {displayTypes()}
      </ListItem>
    );
}