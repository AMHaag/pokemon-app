import React from 'react';

export default function AvatarLarge(props) {
  let pokemonAvatarUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.index}.png`;

  return (
    <>
      <img className='pokemon-image' src={pokemonAvatarUrl} alt={props.name} />
    </>
  );
}
