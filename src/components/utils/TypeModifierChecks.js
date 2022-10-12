import React from 'react'
import Stack from '@mui/material/Stack';
import TypeChip from './TypeChip';

function returnChip(type) {
  return <TypeChip type={type}  />;
}
function immunities(typeObj) {
  const immunitiesArray = typeObj.immunities();
  if (immunitiesArray.length < 1) {
    return null;
  }
  const chipArray = immunitiesArray.map(returnChip);
  return (
    <Stack
      direction='row'
      justifyContent='flex-start'
      alignItems='center'
      spacing={1}
      mt={0}
      ml={1}
      sx={{ flexWrap: 'wrap' }}
    >
      <p style={{margin:5}}>immunities:</p>
      {chipArray}
    </Stack>
  );
}
function doubleResistances(typeObj) {
  const doubleResistancesArray = typeObj.doubleResistances();
  if (doubleResistancesArray.length < 1) {
    return null;
  }
  const chipArray = doubleResistancesArray.map(returnChip);
  return (
    <Stack
      direction='row'
      justifyContent='flex-start'
      alignItems='center'
      spacing={0.5}
      mt={0}
      mb={0}
      ml={1}
      sx={{ flexWrap: 'wrap' }}
    >
      <p style={{ margin: 5 }}>double resistances:</p>
      {chipArray}
    </Stack>
  );
}
function resistances(typeObj) {
  const resistancesArray = typeObj.resistances();
  if (resistancesArray.length < 1) {
    return null;
  }
  const chipArray = resistancesArray.map(returnChip);
  return (
    <>
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        spacing={1}
        mt={0}
        pt={0}
        mb={0}
        pb={0}
        ml={1}
        sx={{ flexWrap: 'wrap' }}
      >
        <p style={{ margin: 5 }}>resistances:</p>
        {chipArray}
      </Stack>
    </>
  );
}
function weaknesses(typeObj) {
  const weaknessesArray = typeObj.weaknesses();
  if (weaknessesArray.length < 1) {
    return null;
  }
  const chipArray = weaknessesArray.map(returnChip);
  return (
    <>
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        spacing={1}
        mt={0}
        pt={0}
        mb={0}
        pb={0}
        ml={1}
        sx={{ flexWrap: 'wrap' }}
      >
        <p style={{ margin: 5 }}>weaknesses:</p>
        {chipArray}
      </Stack>
    </>
  );
}
function doubleWeaknesses(typeObj) {
  const doubleWeaknessesArray = typeObj.doubleWeaknesses();
  if (doubleWeaknessesArray.length < 1) {
    return null;
  }
  const chipArray = doubleWeaknessesArray.map(returnChip);
  return (
    <>
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        spacing={1}
        mt={0}
        pt={0}
        mb={0}
        pb={0}
        ml={1}
        sx={{ flexWrap: 'wrap' }}
      >
        <p style={{ margin: 5 }}>doubleWeaknesses:</p>
        {chipArray}
      </Stack>
    </>
  );
}

export {immunities,doubleResistances,resistances,weaknesses,doubleWeaknesses}