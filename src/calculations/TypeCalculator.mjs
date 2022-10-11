import { pokemonType } from './TypeModifiers.mjs';
import parseTypeFromString from './TypeParser.mjs';

function calculateTypeModifiers(primaryType, secondaryType) {
  const type1 = parseTypeFromString(primaryType);
  const type2 = parseTypeFromString(secondaryType);

  return createDualType(type1, type2);
}

function createDualType(primaryTypeObj, secondaryTypeObj) {
  if (!secondaryTypeObj) {
    return primaryTypeObj;
  }
  const pdef = primaryTypeObj.defense;
  const sdef = secondaryTypeObj.defense;
  const poff = primaryTypeObj.offense;
  const soff = secondaryTypeObj.offense;
  const dualType = new pokemonType();

  dualType.defense.normal = pdef.normal * sdef.normal;
  dualType.defense.fire = pdef.fire * sdef.fire;
  dualType.defense.water = pdef.water * sdef.water;
  dualType.defense.grass = pdef.grass * sdef.grass;
  dualType.defense.electric = pdef.electric * sdef.electric;
  dualType.defense.ice = pdef.ice * sdef.ice;
  dualType.defense.fighting = pdef.fighting * sdef.fighting;
  dualType.defense.poison = pdef.poison * sdef.poison;
  dualType.defense.ground = pdef.ground * sdef.ground;
  dualType.defense.flying = pdef.flying * sdef.flying;
  dualType.defense.psychic = pdef.psychic * sdef.psychic;
  dualType.defense.bug = pdef.bug * sdef.bug;
  dualType.defense.rock = pdef.rock * sdef.rock;
  dualType.defense.ghost = pdef.ghost * sdef.ghost;
  dualType.defense.dragon = pdef.dragon * sdef.dragon;
  dualType.defense.dark = pdef.dark * sdef.dark;
  dualType.defense.steel = pdef.steel * sdef.steel;
  dualType.defense.fairy = pdef.fairy * sdef.fairy;

  dualType.offense.normal = poff.normal * soff.normal;
  dualType.offense.fire = poff.fire * soff.fire;
  dualType.offense.water = poff.water * soff.water;
  dualType.offense.grass = poff.grass * soff.grass;
  dualType.offense.electric = poff.electric * soff.electric;
  dualType.offense.ice = poff.ice * soff.ice;
  dualType.offense.fighting = poff.fighting * soff.fighting;
  dualType.offense.poison = poff.poison * soff.poison;
  dualType.offense.ground = poff.ground * soff.ground;
  dualType.offense.flying = poff.flying * soff.flying;
  dualType.offense.psychic = poff.psychic * soff.psychic;
  dualType.offense.bug = poff.bug * soff.bug;
  dualType.offense.rock = poff.rock * soff.rock;
  dualType.offense.ghost = poff.ghost * soff.ghost;
  dualType.offense.dragon = poff.dragon * soff.dragon;
  dualType.offense.dark = poff.dark * soff.dark;
  dualType.offense.steel = poff.steel * soff.steel;
  dualType.offense.fairy = poff.fairy * soff.fairy;

  return dualType;
}

// let test = caclulateTypeModifiers('fire','flying')
// console.table(test)

export default calculateTypeModifiers;
