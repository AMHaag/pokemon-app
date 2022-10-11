import React from 'react';
import { calculateTypeModifiers } from '../../calculations';
import Stack from '@mui/material/Stack';
import TypeChip from './TypeChip';
import { css } from '@emotion/react';

export default function TypeModifierDisplay(props) {
  const typeObj = calculateTypeModifiers(props.type1, props.type2);

  function returnChip(type) {
    console.log(type);
    return <TypeChip type={type} size='small' />;
  }
  function immunities() {
    const immunitiesArray = typeObj.immunities();
    if (immunitiesArray.length < 1) {
      return null;
    }
    const chipArray = immunitiesArray.map(returnChip);
    console.log(chipArray.length);
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
        <p>immunities:</p>
        {chipArray}
      </Stack>
    );
  }
  function doubleResistances() {
    const doubleResistancesArray = typeObj.doubleResistances();
    if (doubleResistancesArray.length < 1) {
      return null;
    }
    const chipArray = doubleResistancesArray.map(returnChip);
    console.log(chipArray.length);
    return (
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        spacing={1}
        mt={0}
        mb={0}
        ml={1}
        sx={{ flexWrap: 'wrap' }}
      >
        <p>double resistances:</p>
        {chipArray}
      </Stack>
    );
  }
  function resistances() {
    const resistancesArray = typeObj.resistances();
    if (resistancesArray.length < 1) {
      return null;
    }
    const chipArray = resistancesArray.map(returnChip);
    console.log(chipArray.length);
    return (
      <>
        <Stack
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          spacing={1}
          mt={0}
          mb={0}
          ml={1}
          sx={{ flexWrap: 'wrap' }}
        >
          <p>resistances:</p>
          {chipArray}
        </Stack>
      </>
    );
  }
  return (
    <div>
      <h3
        css={css`
          margin: 0px;
        `}
      >
        Defenses:
      </h3>
      {immunities()}
      {doubleResistances()}
      {resistances()}
    </div>
  );
}
