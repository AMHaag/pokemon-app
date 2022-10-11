import React from 'react';
import {
  Bug,
  Dark,
  Dragon,
  Electric,
  Fairy,
  Fighting,
  Fire,
  Flying,
  Ghost,
  Grass,
  Ground,
  Ice,
  Normal,
  Poison,
  Psychic,
  Rock,
  Steel,
  Water,
} from '../../icons/types';

export default function TypeIcon(props) {
  let type = props.type.toLowerCase();
  let altText = `${type} type icon`
  let IconFile='';
  let size = {width:props.width}

  if (type === 'bug') {IconFile=Bug};
  if (type === 'dark' ) IconFile = Dark;
  if (type === 'dragon' ) IconFile = Dragon;
  if (type === 'electric' ) IconFile = Electric;
  if (type === 'fairy') IconFile = Fairy;
  if (type === 'fighting' ) IconFile = Fighting;
  if (type === 'fire' ) IconFile = Fire;
  if (type === 'flying' ) IconFile = Flying;
  if (type === 'ghost' ) IconFile = Ghost;
  if (type === 'grass' ) IconFile = Grass;
  if (type === 'ground' ) IconFile = Ground;
  if (type === 'ice' ) IconFile = Ice;
  if (type === 'normal' ) IconFile = Normal;
  if (type === 'poison' ) IconFile = Poison;
  if (type === 'psychic' ) IconFile = Psychic;
  if (type === 'rock' ) IconFile = Rock;
  if (type === 'steel') 
IconFile=Steel;

  if (type === 'water') IconFile = Water;

  return (
    <div>
      <img src={IconFile} alt={altText} style={size} className='type-icon'/>
    </div>
  );
}
