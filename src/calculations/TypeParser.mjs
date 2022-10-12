import * as TypeModifiers from './TypeModifiers.mjs';

export default function parseTypeFromString(string) {
  if (string === 'normal') {
    return TypeModifiers.normal;
  }
  if (string === 'fire') {
    return TypeModifiers.fire;
  }
  if (string === 'water') {
    return TypeModifiers.water;
  }
  if (string === 'grass') {
    return TypeModifiers.grass;
  }
  if (string === 'electric') {
    return TypeModifiers.electric;
  }
  if (string === 'ice') {
    return TypeModifiers.ice;
  }
  if (string === 'fighting') {
    return TypeModifiers.fighting;
  }
  if (string === 'poison') {
    return TypeModifiers.poison;
  }
  if (string === 'ground') {
    return TypeModifiers.ground;
  }
  if (string === 'flying') {
    return TypeModifiers.flying;
  }
  if (string === 'psychic') {
    return TypeModifiers.psychic;
  }
  if (string === 'bug') {
    return TypeModifiers.bug;
  }
  if (string === 'rock') {
    return TypeModifiers.rock;
  }
  if (string === 'ghost') {
    return TypeModifiers.ghost;
  }
  if (string === 'dragon') {
    return TypeModifiers.dragon;
  }
  if (string === 'dark') {
    return TypeModifiers.dark;
  }
  if (string === 'steel') {
    return TypeModifiers.steel;
  }
  if (string === 'fairy') {
    return TypeModifiers.fairy;
  }
  // console.error('invalid type string')
}
