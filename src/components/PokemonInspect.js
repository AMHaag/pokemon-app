import React, { useState, useEffect } from 'react';
import './ComponentsStyle.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TypeIcon from '../utils/TypeIcon';
import StatBlock from '../utils/StatBlock';
import capitalizeFirstLetter from '../helpers/capitalize';

function PokemonInspect() {
  const [currentIndex, setCurrentIndex] = useState(6);
  const [pokemonData, updatePokeData] = useState({name:'',
    stats: [
      { base_stat: 1 },
      { base_stat: 1 },
      { base_stat: 1 },
      { base_stat: 1 },
      { base_stat: 1 },
      { base_stat: 1 },
      { base_stat: 1 },
    ],
    types: [{ type: { name: 'fire' } }],
  });
  let index = currentIndex;
  let pokemonAvatarUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index}.png`;

  function loadData() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${currentIndex}`)
      .then((response) => response.json())
      .then((response) => {
        updatePokeData(response);
      })
      .catch((err) => console.error(err));
  }
  function setTypes() {
    

    let types = [];
    for (let i = 0; i < pokemonData.types.length; i++) {
      let newType = `${pokemonData.types[i].type.name}`;
      types.push(<TypeIcon type={newType} width='75px' />);
    }
    return types;
  }
// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
  let name = capitalizeFirstLetter(pokemonData.name);

  useEffect(loadData, [currentIndex]);

  return (
    <>
      <div className='pokemon-box'>
        <div className='title-box'>
          <KeyboardArrowLeftIcon
            onClick={() => {
              if (currentIndex > 1) setCurrentIndex(currentIndex - 1);
            }}
            style={{ margin: '15px' }}
          />
          <h2 className='pokemon-name'>
            {name}
          </h2>
          <KeyboardArrowRightIcon
            onClick={() => {
              if (currentIndex > 1) setCurrentIndex(currentIndex + 1);
            }}
            style={{ margin: '15px' }}
          />
        </div>

        <img className='pokemon-image' src={pokemonAvatarUrl} alt='Charizard' />
      </div>
      <Stack
        spacing={2}
        alignItems='center'
        direction='row'
        justifyContent='center'
        className='type-box'
      >
        {setTypes()}
      </Stack>
      <StatBlock
        hp={pokemonData.stats[0].base_stat}
        attack={pokemonData.stats[1].base_stat}
        defense={pokemonData.stats[2].base_stat}
        spAtk={pokemonData.stats[3].base_stat}
        spDef={pokemonData.stats[4].base_stat}
        speed={pokemonData.stats[5].base_stat}
      />
    </>
  );
}

export default PokemonInspect;
