import React from 'react';
import { calculateTypeModifiers } from '../../calculations';
import {immunities,doubleResistances,resistances,weaknesses,doubleWeaknesses} from './TypeModifierChecks'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function TypeModifierDisplay(props) {
  const typeObj = calculateTypeModifiers(props.type1, props.type2);
  const immunitiesArray = immunities(typeObj);
  const resistancesArray = resistances(typeObj)
const doubleResistancesArray = doubleResistances(typeObj)
const weaknessesArray = weaknesses(typeObj)
const doubleWeaknessesArray = doubleWeaknesses(typeObj)
  return (
    <div>
      <Accordion sx={{ backgroundColor: '#3d4554' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='type-defenses-content'
          id='type-defenses-header'
        >
          <Typography>Type Defenses</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {immunitiesArray}
          {resistancesArray}
          {doubleResistancesArray}
          {weaknessesArray}
          {doubleWeaknessesArray}
        </AccordionDetails>
      </Accordion>
      {/* <h3
        style={{margin:0}}
      >
        Type Defenses:
      </h3>
       */}
    </div>
  );
}
