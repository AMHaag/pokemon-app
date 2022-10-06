import React, { useState, useEffect } from 'react';
import './ExplorerView.styles.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Stack from '@mui/material/Stack';
import { TypeIcon, StatBlock, AvatarLarge } from '../utils';
import capitalizeFirstLetter from '../../helpers/capitalize';

function ExplorerView(props) {
  let currentIndex = props.currentIndex || 6;
  let setCurrentIndex = props.setCurrentIndex;

  const [pokemonData, updatePokeData] = useState({
    name: '',
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
  let name = capitalizeFirstLetter(pokemonData.name);
  let number = pokemonData.id;

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
          <h2 className='pokemon-name'>{name}</h2>
          <KeyboardArrowRightIcon
            onClick={() => {
              if (currentIndex > 1) setCurrentIndex(currentIndex + 1);
            }}
            style={{ margin: '15px' }}
          />
        </div>
        <div className='image-container'>
          <AvatarLarge index={currentIndex} name={name} />
          <div className='index-number'># {number}</div>
        </div>
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
      <div>
        <StatBlock
          hp={pokemonData.stats[0].base_stat}
          attack={pokemonData.stats[1].base_stat}
          defense={pokemonData.stats[2].base_stat}
          spAtk={pokemonData.stats[3].base_stat}
          spDef={pokemonData.stats[4].base_stat}
          speed={pokemonData.stats[5].base_stat}
        />
      </div>
    </>
  );
}

export default ExplorerView;
